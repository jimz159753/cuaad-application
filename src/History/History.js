import React, {Component} from "react";
import { Text, View, StyleSheet, ListView, Dimensions, StatusBar, TouchableHighlight, Image } from "react-native";


const ds = new ListView.DataSource({rowHasChanged: (row1, row2) => row1 != row2});

export default class History extends Component {
  constructor(){
    super();
    this.state = {
      dataSource: ds.cloneWithRows([
        'place1', 'place2', 'place3', 'place4', 'place5'
      ]),
    }
  }

  renderRow(rowData, sectionID, rowID) {
  return (
      <TouchableHighlight underlayColor='#dddddd' style={{height:60,}}>
        <View style={styles.eachButton}>
        <Image style={styles.photo} source={{uri: 'http://www.udg.mx/sites/default/files/img_noticias/161013_cuaad_jam_1.jpg'}} ></Image>
        <Text style={styles.text} numberOfLines={1}>{rowData}</Text>
        <View style={{height: 1, backgroundColor: '#dddddd'}}/>
        </View>
      </TouchableHighlight>
  );
}

  render() {

    return(
      <View>
        <Text style={{textAlign: 'center', fontSize: 30, marginBottom: 20 }}>HISTORY</Text>
      <ListView dataSource={this.state.dataSource} renderRow={this.renderRow.bind(this)}>
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
    fontSize: 25,
    textAlign: 'center', 
  }
});
