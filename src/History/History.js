import React, {Component} from "react";
import { Text, View, StyleSheet, ListView, Dimensions, StatusBar } from "react-native";

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

  _renderRow(rowData){
    return <Text>{rowData}</Text>
  }

  render(){
    return(
      <View style={{flex: 1}}>
      <StatusBar hidden/>
        <Text>HISTORY</Text>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this._renderRow}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  menu: {
    backgroundColor: 'red',
    width: 500,
    height: 950,
  },
});
