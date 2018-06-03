import React from "react"
import {
  Platform,
  StyleSheet,
  Text,
  Image,
  Button,
  View
} from 'react-native';
import Sub from "./comps/sub.js"
import Carconnect from "./connect/car.js"
export default class Father extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      car: {
        name: 'audi sq5',
        price: '578000',
        changeCar: value => {
          this.setState(state => {
            return {
              ...state,
              car: {
                ...state.car,
                ...value
              }
            }
          })
        }
      }
    }
  }
  render() {
    return (
      <Carconnect.Provider value={this.state.car}>
        <View>
          <Sub />
        </View>
      </Carconnect.Provider>
    )
  }
}