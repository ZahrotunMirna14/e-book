import React, { Component } from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity
} from 'react-native';
import Logo from '../component/Logo';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

export default class MenuPage extends Component<{}> {
	render() {
		return(
			<View style={styles.container}>
          <TouchableOpacity style={styles.buttonMasuk} onPress = {() => this.props.navigation.navigate('materi')}>
              <Text style={styles.buttonTextMasuk}>Materi Pembelajaran</Text> 
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonMasuk} onPress = {() => this.props.navigation.navigate('Login')}>
              <Text style={styles.buttonTextMasuk}>Kuis</Text> 
          </TouchableOpacity><TouchableOpacity style={styles.buttonMasuk} onPress = {() => this.props.navigation.navigate('Login')}>
              <Text style={styles.buttonTextMasuk}>Ujian</Text> 
          </TouchableOpacity>
          
			</View>
		)
	}
}

const styles = StyleSheet.create({  
  container: {
    paddingTop: 60,
    alignItems: 'center',
    backgroundColor:'#fff',
    height: 2000,
  },
  buttonMasuk: {
    marginBottom: 20,
    width: 323, 
    height: 116,
    backgroundColor:'#fff',
    borderRadius: 10,
    paddingHorizontal: 18,
    elevation: 10,
  },
  buttonTextMasuk: {
    paddingTop: 73,
    color: '#000',
    fontSize:14,
  },
})

