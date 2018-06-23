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
  {id:1, title:'Twin Lions', description: 'Descripcion de casino twin lions', lat:20.6792205, long:-103.3982859},
  {id:2, title:'Camino Real', description: 'Descripcion de camino real', lat:20.6732333, long:-103.411237},
  {id:3, title:'Mirall Cinema', description: 'Descripcion de mirall cinema', lat:20.66258, long:-103.4034842},
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
  }

  watchID: ?number = null

  componentDidMount() {
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
        this.setState({markerPosition: initialRegion})

    }, (error) => alert(JSON.stringify(error)),
    {enableHighAccuracy: true, timeout: 20000, maxiumAge: 1000})

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
      /*this.setState({markerPosition: lastRegion})*/
    })
  }

  render(){
    const window = Dimensions.get('window');
    const { width, height }  = window
    let LATITUD_DELTA = 0.0922
    let LONGITUDE_DELTA = LATITUD_DELTA * (width / height)
    return(
      <View style={styles.container}>
        <TouchableHighlight 
          underlayColor={'rgba(255, 255, 255, 0.10)'}
          style={styles.btn_center}
          onPress={()=>alert('Pressed!')}
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
        <MapViewDirections
          origin={{latitude:this.state.initialPosition['latitude'], longitude:this.state.initialPosition['longitude']}}
          destination="20.6792205,-103.3982859"
          apikey={GOOGLE_MAPS_APIKEY}
          strokeWidth={3}
          strokeColor="hotpink"
          resetOnChange={true}
        />
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
    name: state
  }
}

export default connect(mapStateToProps, { selectBuilding })(HomeScreen);