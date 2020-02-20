import React from 'react';
import {  SafeAreaView,  StyleSheet,  ScrollView,  View,  Text,  StatusBar,  TouchableOpacity, ImageBackground, Image, Modal} from 'react-native';
import { Container, Header, body, Title, Card, CardItem, Left, Content, Thumbnail, Subtitle, Icon} from 'native-base';
import ListMenu from './ListMenu';
import SimpleModal from './SimpleModal';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

export default class MenuPage extends React.Component {
  constructor(props) {
        super(props);
        this.state = {
            isModalVisible: false,
            choosenData: '',
        };
    }
    changeModalVisibility = (bool) => {
    this.setState({ isModalVisible: bool })
    }

    static navigationOptions = {
      header: ()=> false
    } 
  // static navigationOptions= ({navigation}) =>({ 
  //      headerLeft: () => 
  //        <TouchableOpacity style={{marginLeft: 10}} onPress ={() => navigation.goBack()}>
  //          <Image
  //              style={{width: 25, height: 25, marginTop: 2}}
  //              source={require('../images/back.png')}/>
  //        </TouchableOpacity>
  //      ,
  //     title: 'Bela Negara',
  //     headerStyle: {
  //       elevation: 0,
  //       backgroundColor: '#ffffff'
  //     },
  //     headerTitleStyle: {
  //       color: '#7850EA',
  //       fontFamily: 'NunitoSans-SemiBold',
  //       fontSize: 16
  //     },
      
  //   });

  render() {
    return (
      <Container style={styles.container}>
      <ImageBackground style={{width: '100%', height: '100%'}} resizeMode="stretch" source={require('../images/backmenu.png')}>

      <View style={styles.title}>
        <Text style={styles.txt}>Bela Negara</Text>
        <TouchableOpacity style={{ marginLeft: '55%'}} onPress ={() => this.props.navigation.navigate('About')}>
        <Image 
          style={{width: 25, height: 25,}}
          source={require('../images/about.png')}/>
        </TouchableOpacity>
      </View>

      <Content style={styles.conten}>
        <ListMenu
          judul="Materi Pembelajaran"
          subtitle="Masuk"
          img={require('../images/icon1.png')} style={{width: '100%', height: '100%'}} resizeMode="stretch"
          navigation= {() => this.props.navigation.navigate('Materi')}
        />

        <ListMenu
          judul="Latihan Soal"
          subtitle="Masuk"
          img={require('../images/icon2.png')}
          navigation= {() => this.changeModalVisibility(true)}
        />

        <Modal transparent={true} animationType="fade" visible={this.state.isModalVisible} 
               onRequestClose={() => this.changeModalVisibility(false)} style={styles.modalContainer}>
             <SimpleModal changeModalVisibility={this.changeModalVisibility} />
         </Modal>

        <ListMenu
          judul="Kuis"
          img={require('../images/icon3.png')}
        />
      </Content>
      </ImageBackground>
      </Container>
    )
  }

}
const styles = StyleSheet.create({
    container: {
      backgroundColor: '#ECEFF3'
    },
    conten: {
      marginTop: '10%',
      height: '100%'
    },
    title: { 
      flexDirection: 'row',
      height: '8%', 
      alignItems: 'center',
    },
    txt: {
      color: '#ffffff',
      fontFamily: 'NunitoSans-Bold',
      fontSize: 16,
      marginLeft: '6%'
    }
 })