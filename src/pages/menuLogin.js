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
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import MenuPage from './MenuPage';
import signup from './signup';
import LoginPage from './LoginPage';
import materi from './materi';
import Logo from '../component/Logo';

export class menuLogin extends React.Component {
  render() {
    return (
     <View style={styles.container}>
      <Logo />
        <TouchableOpacity style={styles.buttonMasuk} onPress = {() => this.props.navigation.navigate('Login')}>
          <Text style={styles.buttonTextMasuk}>Masuk</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonDaftar} onPress = {() => this.props.navigation.navigate('register')}>
          <Text style={styles.buttonTextDaftar}>Daftar</Text>
        </TouchableOpacity>
      </View>
    )
  }

}

const AppStackNavigator = createStackNavigator({
    menuLog: menuLogin,
    Menu: MenuPage,
    Login: LoginPage,
    register: signup,
    materi: materi,
  }
);

export default createAppContainer(AppStackNavigator);

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
    marginTop:90
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
