import React from 'react';
import {  SafeAreaView,  StyleSheet,  ScrollView,  View,  Text,  StatusBar,  TouchableOpacity, ImageBackground,  } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import MenuPage from './MenuPage';
import signup from './signup';
import LoginPage from './LoginPage';
import materi from './materi';
import Logo from '../component/Logo';
import sc from './sc';
import dasar from './dasar';
import unsur from './unsur';
import fungsi from './fungsi';
import tujuan from './tujuan';
import manfaat from './manfaat';

export class menuLogin extends React.Component {
  static navigationOptions = {
      header: ()=> false,
    };
  // static navigationOptions = () =>{
  //       Header: "none"
  //   }
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground style={{width: '100%', height: '100%'}} resizeMode="stretch" source={require('../images/bg.png')}>
          <View style={styles.btn}>
            <Text style={styles.title}>Bela Negara</Text>
            <Text style={styles.subtitle}>Bela Negara adalah sikap dan perilaku warga negara yang dijiwai oleh kecintaannya terhadap tanah air</Text>
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

const AppStackNavigator = createStackNavigator({
    menuLog: menuLogin,
    Menu: MenuPage,
    Masuk: LoginPage,
    Daftar: signup,
    Materi: materi,
    Pengertian: sc,
    Dasarhukum : dasar,
    Unsur: unsur,
    Fungsi: fungsi,
    Tujuan : tujuan,
    Manfaat: manfaat,
  }
);

export default createAppContainer(AppStackNavigator);

const styles = StyleSheet.create({  
  container: {
    flexGrow: 1,
    alignItems: 'center',
    backgroundColor: '#ffffff'
  },

  bg:{
    resizeMode: 'stretch',
    width: '100%',
    height: '100%'
  },

  title:{
    marginTop: 60,
    textAlign: 'center',
    paddingHorizontal: 18,
    color: '#ffffff',
    fontSize: 24,
    fontFamily: 'NunitoSans-Bold'
  },

  subtitle:{
    marginTop: 12,
    marginBottom: 350,
    textAlign: 'center', 
    paddingHorizontal: 18,   
    color: '#ffffff',
    fontSize: 14,
    fontFamily: 'NunitoSans-Regular',
  },

  btn:{
    alignItems: 'center',
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
