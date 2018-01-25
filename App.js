import React, { Component } from "react";
import { View } from "react-native";
import RootNavigator from './src/Routes'

export default class AwesomeApp extends Component {
    render() {
      return <RootNavigator />;
  }
}
