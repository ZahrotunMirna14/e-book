import React, { Component } from 'react';
import {  SafeAreaView,  StyleSheet,  ScrollView,  View, StatusBar,  TouchableOpacity, ImageBackground, BackHandler, Alert, Image } from 'react-native';
import {Container, Header, Content, Button, Text} from 'native-base';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

export default class MenuLogin extends Component {

  static navigationOptions = {
   header: ()=> false,
  }
   render(){
    return(
      <View style={styles.container}>
        <ImageBackground style={{width: '100%', height: '100%'}} resizeMode="stretch" source={require('../images/background.png')}>
        <View style={styles.top}>
          <Text style={styles.title}>Bela Negara</Text>
          <Text style={styles.subtitle}>Bela Negara adalah sikap dan perilaku warga negara yang dijiwai oleh kecintaannya terhadap tanah air</Text>
        </View>
        <View style={styles.center}>
          <Image style={{width: '85%', height: '120%', marginTop: '-20%'}} resizeMode="contain"
            source={require('../images/img.png')}/>
        </View>
        <View style={styles.bottom}>
          <TouchableOpacity style={styles.buttonMasuk} onPress = {() => this.props.navigation.navigate('Masuk')}>
            <Text style={styles.buttonTextMasuk}>Masuk</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonDaftar} onPress = {() => this.props.navigation.navigate('Daftar')}>
            <Text style={styles.buttonTextDaftar}>Daftar</Text>
          </TouchableOpacity>
        </View>        
        </ImageBackground>
      </View>
      )
}
}

const styles = StyleSheet.create({  
  container: {
    flexGrow: 1,
    alignItems: 'center',
    backgroundColor: '#ffffff'
  },
  top:{
    height: '25%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  center:{
    height: '50%',
    alignItems: 'center',
  },

  bottom:{
    height: '25%',
    alignItems: 'center',
  },

  title:{
   
    textAlign: 'center',
   
    color: '#ffffff',
    fontSize: 24,
    fontFamily: 'NunitoSans-Bold'
  },

  subtitle:{
    marginTop: 12,
    marginHorizontal: 18,
    textAlign: 'center',   
    color: '#ffffff',
    fontSize: 14,
    fontFamily: 'NunitoSans-Regular',
  },


  buttonMasuk: {
    marginBottom: 20,
    width: 324, 
    height: 48,
    backgroundColor:'#7850EA',
    borderRadius: 10,
    alignItems: 'center',

  },

  buttonDaftar: {
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
    fontFamily: 'NunitoSans-SemiBold',
  },

  buttonTextDaftar: {
    padding: 13,
    color: '#7d7d7d',
    fontSize:14,
    fontFamily: 'NunitoSans-SemiBold',
  }

})