import React, {Component} from "react";
import { View, WebView } from "react-native";
import { connect } from 'react-redux';
import { selectBuilding } from '../actions';

class Info extends Component {
  constructor(){
    super();
  }

  render() {

    return(
      <View style={{flex:1}}>
        <WebView 
        source={{uri: `http://visionsistemica.cuaad.udg.mx/index.php/${this.props.obj.name}/`}}
        style={{marginTop: 20}}
        />
      </View>
    );
}
}

/*const styles = StyleSheet.create({
  
});*/

function mapStateToProps(state){
  return {
    obj: state
  }
}

export default connect(mapStateToProps, { selectBuilding })(Info);