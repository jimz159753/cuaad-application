import React, { Component } from "react";
import { View } from "react-native";
import RootNavigator from './src/Routes'
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './src/reducers/generalReducer';

const store = createStore(reducer);

export default class AwesomeApp extends Component {
    render() {
      	return (
      		<Provider store={store}>
      			<RootNavigator />
      		</Provider>
      	);
    }
}
