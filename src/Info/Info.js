import React, {Component} from "react";
import { View, WebView } from "react-native";

export default class Info extends Component {
  constructor(){
    super();
    this.state = {
    }
  }

  render() {

    return(
      <View style={{flex:1}}>
        <WebView 
        source={{uri: 'http://visionsistemica.cuaad.udg.mx/index.php/casa-farah/'}}
        style={{marginTop: 20}}
        />
      </View>
    );
}
}

/*const styles = StyleSheet.create({
  
});*/
