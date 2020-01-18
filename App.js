/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity
} from 'react-native';
import 'react-native-gesture-handler';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Menu from './src/pages/MenuPage';
import Login from './src/pages/LoginPage';

export class App extends React.Component {
  render() {
    return (
     <View style={styles.container}>
      <Logo />
        <TouchableOpacity style={styles.buttonMasuk} onPress = {() => this.props.navigation.navigate('Login')}>
          <Text style={styles.buttonTextMasuk}>Masuk</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonDaftar}>
          <Text style={styles.buttonTextDaftar}>{this.props.type}Daftar</Text>
        </TouchableOpacity>
      </View>
    )
  }

}

export default class menuLogin extends React.Component{
  render(){
    return(
      <RootStack/>
    )
  }
}


const RootStack = createStackNavigator({
    Login: LoginPage,
    Menu: MenuPage,
  });

const styles = StyleSheet.create({  
  container: {
    paddingTop: 60,
    alignItems: 'center'
  },

  buttonMasuk: {
    marginBottom: 24,
    width: 324, 
    height: 48,
    backgroundColor:'#F9942F',
    borderRadius: 10,
    alignItems: 'center',
    marginTop:144
  },

  buttonDaftar: {
      marginBottom: 24,
      width: 324, 
      height: 48,
      backgroundColor:'#DADADA',
      borderRadius: 10,
      alignItems: 'center',
  },

  buttonTextMasuk: {
    padding: 13,
    color: '#ffffff',
    fontSize:14,
  },

  buttonTextDaftar: {
    padding: 13,
    color: '#7d7d7d',
    fontSize:14,
  }

})
