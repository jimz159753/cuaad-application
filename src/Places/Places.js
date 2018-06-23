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
  }

  renderRow(rowData) {
    console.log(rowData);
    console.log(this.props.name)
  return (
      <TouchableHighlight 
        underlayColor='#dddddd' 
        style={{height:250,}} 
        onPress={() => this.props.selectBuilding(rowData)}>
          <View style={styles.eachButton}>
            <Card >
              <CardImage>
                <Image style={{width: Dimensions.get('window').width, height: 180}}
                       source={{uri: 'https://i.pinimg.com/originals/a8/77/e5/a877e5e685b5c944baacda1f08f384a1.jpg'}}
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
    name: state
  }
}

export default connect(mapStateToProps, { selectBuilding })(Places);