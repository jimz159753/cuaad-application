import React, {Component} from 'react';
import { AppRegistry, View, Text, TouchableHighlight, StyleSheet, Dimensions } from 'react-native';
import MapView from 'react-native-maps'
import MapViewDirections from 'react-native-maps-directions';
import { connect } from 'react-redux';
import { selectBuilding } from '../actions';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const {width, height} = Dimensions.get('window')


const SCREEN_HEIGHT = height
const SCREEN_WIDTH = width
const ASPECT_RATIO = width / height
const LATITUDE_DELTA = 0.0922
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO
const GOOGLE_MAPS_APIKEY = 'AIzaSyB6uuLYlh1lS4bEHWT-ChT4OQ8j_IJiRdU';

const RANDOM_COORDS = [
  {id:1, title:'Casa Farah', description: 'Descripcion de casino Farah', lat:20.674243, long:-103.372476},
  {id:2, title:'Casa Fernandez del Valle', description: 'Descripcion de Fernandez del Valle', lat:20.673005, long:-103.371547},
  {id:3, title:'Casa Gustavo Cristo', description: 'Descripcion de Gustavo Cristo', lat:20.675590, long:-103.370869},
  {id:4, title:'Expo Guadalajara', description: 'Descripcion de Expo Guadalajara', lat:20.652919, long:-103.3939527},
  {id:5, title:'Hospicio Cabañas', description: 'Descripcion de Hospicio Cabañas', lat:20.677093, long:-103.337774},
  {id:6, title:'Museo Regional', description: 'Descripcion de Museo Regional', lat:20.6777629, long:-103.348424},
  {id:7, title:'Parainfo', description: 'Descripcion de Parainfo', lat:20.6746973, long:-103.3614527},
  {id:8, title:'Privada Castellanos', description: 'Descripcion de Privada Castellanos', lat:20.6087787, long:-103.3480183},
  {id:9, title:'Privada Torreon', description: 'Descripcion de Privada Torreon', lat:20.6992344, long:-103.3981751},
  {id:10, title:'Teatro Degollado', description: 'Descripcion de Teatro Degollado', lat:20.6770708, long:-103.3469124},
  {id:11, title:'Teatro Experimental de Jalisco', description: 'Descripcion de Teatro Experimental de Jalisco', lat:20.660696, long:-103.349357},
  {id:12, title:'Torre Chapultepec', description: 'Descripcion de Torre Chapultepec', lat:20.676624, long:-103.368985},
];



class HomeScreen extends Component {
  constructor(props){
    super(props);

    this.state = {
      initialPosition: {
          latitude: 0,
          longitude: 0,
          latitudeDelta: 0,
          longitudeDelta: 0
      },
      markerPosition: {
        latitude: 0,
        longitude: 0
      }
    }
    this.findMe = this .findMe.bind(this);
  }

  watchID: ?number = null

  componentDidMount() {
    this.findMe();

  }

  componentWillMount(){
  	this.watchID = navigator.geolocation.watchPosition((position) => {
      var lat = parseFloat(position.coords.latitude)
      var long = parseFloat(position.coords.longitude)

      var lastRegion = {
          latitude: lat,
          longitude: long,
          longitudeDelta: LONGITUDE_DELTA,
          latitudeDelta: LATITUDE_DELTA
      }
      this.setState({initialPosition: lastRegion})
    })
  }

  findMe(){
    navigator.geolocation.getCurrentPosition((position) => {
        var lat = parseFloat(position.coords.latitude)
        var long = parseFloat(position.coords.longitude)

        var initialRegion = {
            latitude: lat,
            longitude: long,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA
        }

        this.setState({initialPosition: initialRegion})

    }, (error) => alert(JSON.stringify(error)),
    {enableHighAccuracy: true, timeout: 20000, maxiumAge: 1000})
  }

  render(){

    let DESTINATION = this.props.obj.lat+','+this.props.obj.lon;
    console.log('DESTINATION', DESTINATION)
    const window = Dimensions.get('window');
    const { width, height }  = window
    let LATITUD_DELTA = 0.0922
    let LONGITUDE_DELTA = LATITUD_DELTA * (width / height)
    return(
      <View style={styles.container}>
        <TouchableHighlight 
          underlayColor={'rgba(255, 255, 255, 0.10)'}
          style={styles.btn_center}
          onPress={()=>this.findMe()}
          >
          <Icon name={'anchor'} size={60} color={'gray'} />
        </TouchableHighlight>
        <MapView
          region={this.state.initialPosition}
          style={ styles.map }
          followsUserLocation={true}
          showsUserLocation={true}
          showsMyLocationButton={true}
          loadingEnabled={true}
          toolbarEnabled={true}
          zoomEnabled={true}
          rotateEnabled={true}
        >
        {
        RANDOM_COORDS.map(marker =>
            <MapView.Marker
                coordinate={{latitude: marker.lat, longitude: marker.long}}
                title={marker.title}
                description={marker.description}
                key={marker.id}
            />
        )
        }
        {this.props.obj.lat?
          <MapViewDirections
          origin={{latitude:this.state.initialPosition['latitude'], longitude:this.state.initialPosition['longitude']}}
          destination={DESTINATION}
          apikey={GOOGLE_MAPS_APIKEY}
          strokeWidth={3}
          strokeColor="hotpink"
          resetOnChange={true}
        />: null}
        
        </MapView>
        
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
		...StyleSheet.absoluteFillObject,
		flex: 1,
		justifyContent: 'center',
		alignItems: 'stretch',
		backgroundColor: 'gray',
	},
  map: {
    position: 'absolute',
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
    zIndex: -1
  },
  btn_center: {
    position: 'absolute',
    top: 500,
    left: 30
  }
});

function mapStateToProps(state){
  return {
    obj: state
  }
}

export default connect(mapStateToProps, { selectBuilding })(HomeScreen);