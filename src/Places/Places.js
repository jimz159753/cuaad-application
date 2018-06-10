import React, {Component} from "react";
import { Text, View, StyleSheet, ListView, Dimensions, StatusBar, TouchableHighlight, Image, WebView } from "react-native";


const ds = new ListView.DataSource({rowHasChanged: (row1, row2) => row1 != row2});

export default class Places extends Component {
  constructor(){
    super();
    this.state = {
      dataSource: ds.cloneWithRows([
        'place1', 'place2', 'place3', 'place4', 'place5'
      ]), /*It's going to be an array of objects for passing place parameters*/
    }
	this.renderRow = this.renderRow.bind(this);
  }

  pressCell(rowData){
     return(
	<View style={{flex: 1}}> 
	<WebView
        source={{uri: 'https://github.com/facebook/react-native'}}
        style={{marginTop: 20, height: 1000}}
      />
	</View>);
  }


  renderRow(rowData) {
  return (
      <TouchableHighlight 
        underlayColor='#dddddd' 
        style={{height:60,}} 
        onPress={() => this.pressCell(rowData)}>
          <View style={styles.eachButton}>
          
          <Text style={styles.text} numberOfLines={1}>{rowData}</Text>
          <View style={{height: 1, backgroundColor: '#dddddd'}}/>
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
    fontSize: 25,
    textAlign: 'center', 
  }
});
