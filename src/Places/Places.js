import React, {Component} from "react";
import { Text, View, StyleSheet, ListView, Dimensions, StatusBar, TouchableHighlight, Image } from "react-native";
import { Card, CardImage, CardTitle, CardContent, CardAction } from 'react-native-card-view';
import { connect } from 'react-redux';
import { selectBuilding } from '../actions';

const ds = new ListView.DataSource({rowHasChanged: (row1, row2) => row1 != row2});

class Places extends Component {
  constructor(){
    super();
    this.state = {
      dataSource: ds.cloneWithRows([
        'casa-farah', 'casa-fernandez-del-valle', 'casa-gustavo-cristo', 'expo-guadalajara', 'hospicio-cabanas',
        'museo-regional', 'paraninfo', 'privada-castellanos', 'privada-del-torreon', 'teatro-degollado',
        'teatro-experimental-de-jalisco', 'torre-chapultepec'
      ]), /*It's going to be an array of objects for passing place parameters*/
    }
	this.renderRow = this.renderRow.bind(this);
  this.location = this.location.bind(this);
  }

  renderRow(rowData) {
    console.log('Name place:',rowData);
    console.log(this.props.obj)
    let place;
    switch(rowData){
      case 'casa-farah':
        place = require('../images/casa-farah.jpg')    
      break;
      case 'casa-fernandez-del-valle':
        place = require('../images/casa-fernandez-del-valle.jpg')
      break;
      case 'casa-gustavo-cristo':
        place = require('../images/casa-gustavo-cristo.jpg')
      break;
      case 'expo-guadalajara':
        place = require('../images/expo-guadalajara.jpg')
      break;
      case 'hospicio-cabanas':
        place = require('../images/hospicio-cabanas.jpg')
      break;
      case 'museo-regional':
        place = require('../images/museo-regional.jpg')
      break;
      case 'paraninfo':
        place = require('../images/paraninfo.jpg')
      break;
      case 'privada-castellanos':
        place = require('../images/privada-castellanos.jpg')
      break;
      case 'privada-del-torreon':
        place = require('../images/privada-del-torreon.jpg')
      break;
      case 'teatro-degollado':
        place = require('../images/teatro-degollado.jpg')
      break;
      case 'teatro-experimental-de-jalisco':
        place = require('../images/teatro-experimental-de-jalisco.jpg')
      break;
      case 'torre-chapultepec':
        place = require('../images/torre-chapultepec.jpg')
      break;
      default:
        place = require('../images/casa-farah.jpg')
    }
    
    return (
        <TouchableHighlight 
          underlayColor='#dddddd' 
          style={{height:250,}} 
          onPress={() => this.location(rowData)}>
            <View style={styles.eachButton}>
              <Card >
                <CardImage>
                  <Image style={{width: Dimensions.get('window').width, height: 180}}
                         source={place}
                  />
                </CardImage>
                <CardContent>
                  <Text style={styles.text} numberOfLines={1}>{rowData}</Text>
                </CardContent>
              </Card>
            </View>
        </TouchableHighlight>
    );
  }

  location(rowData){
    let newLocation = {};
    switch(rowData){
      case 'casa-farah':
        newLocation = { name: 'casa-farah', lat: '20.674243', lon: '-103.372476'}
        this.props.selectBuilding(newLocation);
      break;
      case 'casa-fernandez-del-valle':
        newLocation = { name: 'casa-fernandez-del-valle', lat: '20.673005', lon: '-103.371547'}
        this.props.selectBuilding(newLocation);
      break;
      case 'casa-gustavo-cristo':
        newLocation = { name: 'casa-gustavo-cristo', lat: '20.675590', lon: '-103.370869'}
        this.props.selectBuilding(newLocation);
      break;
      case 'expo-guadalajara':
        newLocation = { name: 'expo-guadalajara', lat: '20.652919', lon: '-103.3939527'}
        this.props.selectBuilding(newLocation);
        break;
      case 'hospicio-cabanas':
        newLocation = { name: 'hospicio-cabanas', lat: '20.677093', lon: '-103.337774'}
        this.props.selectBuilding(newLocation);
        break;
      case 'museo-regional':
        newLocation = { name: 'museo-regional', lat: '20.6777629', lon: '-103.348424'}
        this.props.selectBuilding(newLocation);
        break;
      case 'paraninfo':
        newLocation = { name: 'paraninfo', lat: '20.6746973', lon: '-103.3614527'}
        this.props.selectBuilding(newLocation);
        break;
      case 'privada-castellanos':
        newLocation = { name: 'privada-castellanos', lat: '20.6087787', lon: '-103.3480183'}
        this.props.selectBuilding(newLocation);
        break;
      case 'privada-del-torreon':
        newLocation = { name: 'privada-del-torreon', lat: '20.6992344', lon: '-103.3981751'}
        this.props.selectBuilding(newLocation);
      break;
      case 'teatro-degollado':
        newLocation = { name: 'teatro-degollado', lat: '20.6770708', lon: '-103.3469124'}
        this.props.selectBuilding(newLocation);
        break;
      case 'teatro-experimental-de-jalisco':
        newLocation = { name: 'teatro-experimental-de-jalisco', lat: '20.660696', lon: '-103.349357'}
        this.props.selectBuilding(newLocation);
      break;
      case 'torre-chapultepec':
        newLocation = { name: 'torre-chapultepec', lat: '20.676624', lon: '-103.368985'}
        this.props.selectBuilding(newLocation);
        break;
      default:
        alert('Wrong place!')
      }
  }

  render() {
    return(
      <View style={{flex:1}}>
        <Text style={{textAlign: 'center', fontSize: 30, marginBottom: 20 }}>Places</Text>
      	<ListView dataSource={this.state.dataSource} renderRow={this.renderRow}>
      	</ListView>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  eachButton: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center', 
    borderBottomWidth: 1,
  },
  photo: {
    height: 35,
    width: 35,
    borderRadius: 18,
    marginLeft: 30,
    marginRight: 40,
  },
  text: {
    fontSize: 15
  }
});

function mapStateToProps(state){
  return {
    obj: state
  }
}

export default connect(mapStateToProps, { selectBuilding })(Places);