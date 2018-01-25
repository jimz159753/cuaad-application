import React, {Component} from 'react';
import { AppRegistry, View, Text, Button, StyleSheet, Dimensions } from 'react-native';
import MapView from 'react-native-maps'

export default class HomeScreen extends Component {
  constructor(props){
      super(props);

      this.state = {
      latitude: null,
      longitude: null,
      error:null,
    };
  }

  render(){
    const window = Dimensions.get('window');
    const { width, height }  = window
    let LATITUD_DELTA = 0.0922
    let LONGITUDE_DELTA = LATITUD_DELTA * (width / height)

    return(
      <View style={styles.container}>
        <MapView
          initialRegion={{
            latitude: this.state.latitude,
            longitude: this.state.longitude,
            latitudeDelta: LATITUD_DELTA,
            longitudeDelta: LONGITUDE_DELTA,
          }}
          style={ styles.map }
          followsUserLocation={true}
          showsUserLocation={true}
          showsMyLocationButton={true}
          loadingEnabled={true}
          toolbarEnabled={true}
          zoomEnabled={true}
          rotateEnabled={true}
        >
        <Button onPress={() => this.props.navigation.navigate('History')}
          title="History"></Button>
        </MapView>
      </View>
    );
  }

  componentWillMount(){
    navigator.geolocation.getCurrentPosition(
       (position) => {
         this.setState({
           latitude: position.coords.latitude,
           longitude: position.coords.longitude,
           error: null,
         });
       },
       (error) => this.setState({ error: error.message }),
       { enableHighAccuracy: false, timeout: 200000, maximumAge: 1000 },
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
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
  }
});
