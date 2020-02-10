import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView
} from 'react-native';
import Animbutton from './animbutton'
export default class QuizApp extends Component {
  render() {
    return (
      <ScrollView>
      <View style={styles.container}>
        <Animbutton onColor={"blue"} effect={"bounce"} _onPress={(status) => {}} text="Bounce" />
        <Animbutton onColor={"green"} effect={"flash"} _onPress={(status) => {}} text="Flash" />
        <Animbutton onColor={"red"} effect={"jello"} _onPress={(status) => {}} text="Jello" />
        <Animbutton onColor={"orange"} effect={"pulse"} _onPress={(status) => {}} text="Pulse" />
        <Animbutton onColor={"purple"} effect={"rotate"} _onPress={(status) => {}} text="Rotate" />
        <Animbutton onColor={"brown"} effect={"rubberBand"} _onPress={(status) => {}} text="Rubberband" />
        <Animbutton onColor={"black"} effect={"shake"} _onPress={(status) => {}} text="Shake" />
        <Animbutton onColor={"blue"} effect={"swing"} _onPress={(status) => {}} text="Swing" />
        <Animbutton onColor={"red"} effect={"tada"} _onPress={(status) => {}} text="Tada" />
        <Animbutton onColor={"orange"} effect={"wobble"} _onPress={(status) => {}} text="Wobble" />
      </View></ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    marginTop: 20
  }
});

AppRegistry.registerComponent('QuizApp', () => QuizApp);