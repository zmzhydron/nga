import React from "react"
import {
  Platform,
  StyleSheet,
  Text,
  Image,
  Button,
  View
} from 'react-native';
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import * as actions from "./../redux/actions/1.js"
import CarHoc from "./../connect/carHoc.js"
 class Father extends React.Component {
  constructor(props) {
    super(props);
    this.actions = bindActionCreators(actions, props.dispatch);
  }
  changehealth(){
    console.log(this);
    this.actions.changeaaahealth('a++');
  }
  changemycar(){
    this.props.cars.changeCar({
      name: "benz glc43 amg 4matic",
      price: '580000'
    })
  }
  shitload() {
    fetch('http://192.168.2.91:8889/get/fuck').then(val => {
      this.setState({
        msg: `192.168.2.91/get/fuck`
        // msg: val
      })
    }).catch(val => {
      this.setState({
        msg: '$$$$$$$$$$$$$$$$$$$$'
      })
    })
  }
  render() {
    let { name, health, age } = this.props.aaa;
    let { name: carname, price: carprice} = this.props.cars;
    console.log(this.props.cars)
    return (
      <View>
          <Text>father: 111</Text>
          <Text>{name} : {age} : {health}</Text>
          <Text>carname: {carname},, carprice: {carprice} : {health}</Text>
          <Button
            onPress={this.changehealth.bind(this)}
            title="goodhealthtomyfather"
          />
                    <Button
            onPress={this.changemycar.bind(this)}
            title="changemycarsfromconnect"
          />
          <Image source={require('./../imgs/1.jpg')} style={styles.imgs} />
      </View>
    )
  }
}
var AAA = connect(state => {
  return {
    aaa: state.aaa
  }
})(Father);
export default CarHoc(AAA)
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
