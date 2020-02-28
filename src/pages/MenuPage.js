import React from 'react';
import {  SafeAreaView,  StyleSheet,  ScrollView,  View,  Text,  StatusBar,  TouchableOpacity, ImageBackground, Image, Dimensions} from 'react-native';
import { Container, Header, body, Title, Card, CardItem, Left, Content, Thumbnail, Subtitle, Icon} from 'native-base';
import ListMenu from './ListMenu';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Modal, { ModalContent, ModalFooter, ModalButton } from 'react-native-modals';

export default class MenuPage extends React.Component {
   constructor(props) {
         super(props);
         this.state = {
            isModalVisible: false,

         };
     }
     
    static navigationOptions = {
      header: ()=> false
    }     





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
          navigation= {() =>  this.setState({ visible: true })}
        />        
        <ListMenu
          judul="Kuis"
          img={require('../images/icon3.png')}
          navigation= {() =>  this.setState({ visible: true })}
        />

        <Modal
            visible={this.state.visible} 
          >
            <ModalContent>
              <View>
                <View style={styles.img}>
                  <Image style={{width: 147, height: 147, marginVertical: '8%'}} source={require('../images/ImageDialog.png')}/>
                </View>
                <View style={styles.textView}>
                  <Text style={[styles.text, {fontSize: 16, color: '#7850EA'}]}>SEMANGAT !</Text>
                  <Text style={styles.text}>Kerjakan dengan sebaik mungkin untuk mengetahui pemahaman anda dalam belajar Bela Negara</Text>
                </View>
              </View>
              <View style={{flexDirection: 'row',	justifyContent: 'space-between', marginTop: 28, marginBottom: 20, }}>
                <TouchableOpacity 
                  style={{
                    width: '45%',
                    height: 40,
                    borderRadius:10, 
                    backgroundColor:"#DADADA",
                    justifyContent: 'center'
                  }}
                  onPress={() => this.setState({ visible: false })}>
                  <Text style={{textAlign: 'center', fontFamily: 'NunitoSans-SemiBold', fontSize: 14,}}>Tutup</Text>
                </TouchableOpacity>                
                <TouchableOpacity 
                  style={{
                    width: '45%',
                    height: 40,
                    paddingTop: 5,
                    paddingBottom: 5, 
                    borderRadius:10, 
                    backgroundColor:"#7850EA",
                    marginLeft: 7,
                    justifyContent: 'center'
                  }}
                  onPress={() => this.props.navigation.navigate('quiziz')}>
                  <Text style={{color: '#ffffff', textAlign: 'center', fontFamily: 'NunitoSans-SemiBold',fontSize: 14,}}>Mulai</Text> 
                </TouchableOpacity>
              </View>
              {/* <ModalFooter>
                <ModalButton
                  text="CANCEL"
                  onPress={() => this.setState({ visible: false })}
                />
                <ModalButton
                  text="OK"
                  onPress={() => {this.props.navigation.navigate('quiziz')}}
                />
              </ModalFooter> */}
            
            </ModalContent>
        </Modal>

      </Content>
      </ImageBackground>
      </Container>
    )
  }

}
const styles = StyleSheet.create({
    container: {
      backgroundColor: '#ECE6F5',
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
    },
    img: {
      alignItems: 'center',
    },
    text: { 
      marginVertical: 5,
      marginHorizontal: 18,
      fontSize: 14,
      fontFamily: 'NunitoSans-SemiBold',
      textAlign: 'center',
  },
  modal: {
    width:324,
    height: 430,
    paddingTop: 10,
    alignSelf: 'center',
    alignItems: 'center',
    textAlign: 'center',
    backgroundColor: "#7d7d7d",
    borderRadius: 10,
},
 })