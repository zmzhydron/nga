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

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super();
    this.state = { msg: `fetch Api` };
  }
  componentDidMount() {
    console.log(`componentDidMount() {`)
  }
  shitload() {
    console.log(`shit load stockings`);
    fetch('http://192.168.2.91:8889/get/fuck').then(val => {
      console.log(val);
      this.setState({
        msg: `192.168.2.91/get/fuck`
        // msg: val
      })
    }).catch(val => {
      console.log(`--------------`)
      console.log(val);
      this.setState({
        msg: '$$$$$$$$$$$$$$$$$$$$'
      })
      console.log(`--------------`)
    })
  }
  render() {
    console.disableYellowBox = true;
    console.warn('YellowBox is disabled.');
    let name = 'shitman';
    return (
      <View style={styles.container}>
        <Text style={styles.instructions}>
          -------{this.state.msg} --------
        </Text>
        <Text style={styles.welcome}>
          {this.state.msg}
        </Text>
        <Image source={require('./src/imgs/1.jpg')} style={styles.imgs} />
        <Button onPress={this.shitload.bind(this)} title="lord!!"></Button>
        <Text style={styles.instructions}>
          fuckyou ~~~ btich..........!!!!
        </Text>
        <Text style={styles.instructions}>
          {instructions}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  imgs: {
    height: 200,
    width: 200
  },
  welcome: {
    fontSize: 36,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
