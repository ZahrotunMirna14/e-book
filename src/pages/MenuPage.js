import React from 'react';
import {  SafeAreaView,  StyleSheet,  ScrollView,  View,  Text,  StatusBar,  TouchableOpacity, ImageBackground, Image} from 'react-native';
import { Container, Header, body, Title, Card, CardItem, Left, Content, Thumbnail, Subtitle} from 'native-base';
import ListMenu from './ListMenu';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

export default class MenuPage extends React.Component {
  static navigationOptions = { 
      headerStyle: {
        elevation: 0,
        backgroundColor: '#ECEFF3'
      },
      headerTitleStyle: {
        color: '#7850EA',
        fontFamily: 'NunitoSans-SemiBold',
        fontSize: 16
  }
};
  render() {
    return (
      <Content>
        <ListMenu
          judul="Materi Pembelajaran"
          subtitle="Masuk"
          img={require('../images/icon1.png')} style={{width: '100%', height: '100%'}} resizeMode="stretch"
          navigation= {() => this.props.navigation.navigate('Materi')}
        />

        <ListMenu
          judul="Latihan Soal"
          img={require('../images/icon2.png')}
          
        />

        <ListMenu
          judul="Kuis"
          img={require('../images/icon3.png')}
        />
      </Content>
    )
  }

}