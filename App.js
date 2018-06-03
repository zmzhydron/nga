/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  Image,
  Button,
  View
} from 'react-native';
import Index from "./src/index.js"
import { Provider } from "react-redux"
import { createStore, applyMiddleware, combineReducers } from 'redux'
import mainReducer from "./src/redux/store/index.js"
let store  = createStore(mainReducer);


export default class App extends Component<Props> {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
            <Index />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});
