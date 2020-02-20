import React from 'react';
import {  SafeAreaView,  StyleSheet,  ScrollView,  View,  Text,  StatusBar,  TouchableOpacity, Image, Animated } from 'react-native';
import { Container, Header, body, Title, Card, CardItem, Left, Content, Thumbnail, Subtitle} from 'native-base';
import List from './ListContent';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

const HEADER_MIN_HEIGHT = 60;
const HEADER_MAX_HEIGHT = 175;
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;
export default class materi extends React.Component {
  static navigationOptions = {
   header: ()=> false
  }
   // static navigationOptions = { 
   //      headerStyle: {
   //        elevation: 0,
   //        backgroundColor: '#ECEFF3',
   //      },
   //      headerTitleStyle: {
   //      color: '#7850EA',
   //      fontFamily: 'NunitoSans-SemiBold',
   //      fontSize: 16
   //      },
   //       headerBackground: ()=>
   //        <Image
   //       style={{width: '100%', height: '100%'}} resizeMode="stretch"
   //       source={require('../images/bgmenu.png')}
   //     />
//  };
	constructor() {
    super();

    this.scrollYAnimatedValue = new Animated.Value(0);

    this.array = [];
  }

  render() {

  	const headerHeight = this.scrollYAnimatedValue.interpolate(
      {
        inputRange: [0, (HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT)],
        outputRange: [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
        extrapolate: 'clamp'
      });

     const headerBackgroundColor = this.scrollYAnimatedValue.interpolate(
      {
        inputRange: [0, (HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT) , (HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT)],
         outputRange: ['#ECE6F5', '#ECE6F5','#7850EA'],
         extrapolate: 'clamp'
      });
    const imageOpacity = this.scrollYAnimatedValue.interpolate(
      {
        inputRange: [HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
        outputRange: [1, 0],
        extrapolate: 'clamp',
      });
    const imageTranslate = this.scrollYAnimatedValue.interpolate(
      {
        inputRange: [0, HEADER_SCROLL_DISTANCE],
        outputRange: [0, -120],
        extrapolate: 'clamp',
      });
    const headerZindex = this.scrollYAnimatedValue.interpolate(
      {
        inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
        outputRange: [0, 1],
        extrapolate: 'clamp',
      });
    return (
      <Container style={styles.container}>
        <Animated.View style={[styles.animatedHeaderContainer, { height: headerHeight, backgroundColor: headerBackgroundColor,  zIndex: headerZindex,}]}>
        <Animated.Image
            style={[
              styles.backgroundImage,
              {opacity: imageOpacity, transform: [{translateY: imageTranslate}]},
            ]}
            source={require('../images/bgmenu.png')}
          />
          <View style={styles.grp}>
            <TouchableOpacity onPress ={() => this.props.navigation.navigate('Menu')}>
                <Image
                style={{width: 25, height: 25, marginLeft: '16%'}}
                source={require('../images/backpth.png')}/>
            </TouchableOpacity>
            <Text style={styles.headerText}>Materi Pembelajaran</Text>
          </View>
        </Animated.View>
      <ScrollView
          style={{ flex: 1 }}
          contentContainerStyle={{ paddingTop: HEADER_MAX_HEIGHT }}
          scrollEventThrottle={16}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { y: this.scrollYAnimatedValue } } }]
          )}>

      <Content style={styles.conten}>
        <List
          style={{marginTop: 48}}
          judul="Pengertian"
          subtitle="Bela Negara adalah sikap dan perilaku warga ..."
          img={require('../images/iconMateri/pengertian.png')}
          navigation= {() => this.props.navigation.navigate('Pengertian')}
        />

        <List
          judul="Dasar Hukum"
          subtitle="Pasal 27 ayat (3) UUD 1945 ..."
          img={require('../images/iconMateri/dasar.png')}
          navigation= {() => this.props.navigation.navigate('Dasarhukum')}
        />

        <List
          judul="Unsur"
          subtitle="Memiliki jiwa cinta tanah air,Rela berkorban demi ..."
          img={require('../images/iconMateri/unsur.png')}
          navigation= {() => this.props.navigation.navigate('Unsur')}
        />

        <List
          judul="Fungsi"
          subtitle="Mempertahankan Negara dari berbagai ancaman ..."
          img={require('../images/iconMateri/fungsi.png')}
          navigation= {() => this.props.navigation.navigate('Fungsi')}
        />

        <List
          judul="Tujuan"
          subtitle="Mempertahankan kelangsungan hidup bang ..."
          img={require('../images/iconMateri/tujuan.png')}
          navigation= {() => this.props.navigation.navigate('Tujuan')}
        />

        <List
          judul="Manfaat"
          subtitle="Membentuk sikap disiplin waktu, aktivitas, ..."
          img={require('../images/iconMateri/manfaat.png')}
          navigation= {() => this.props.navigation.navigate('Manfaat')}
        />

        <List
          judul="Contoh dan Penerapan"
          subtitle="Mengembangkan sikap saling mengasihi, saling ..."
          img={require('../images/iconMateri/contoh.png')}
          navigation= {() => this.props.navigation.navigate('Contoh')}
        />

        <List
          judul="Bentuk Partisipasi"
          subtitle="Hubungan patriotisme dengan pertahanan ..."
          img={require('../images/iconMateri/bentuk.png')}
          navigation= {() => this.props.navigation.navigate('Partisipasi')}
        />
      </Content> 

      </ScrollView>


      </Container>
    )
  }

}
const styles = StyleSheet.create(
  {
    container: {
      flex: 1,
      justifyContent: "center",
        backgroundColor: '#ECE6F5',

    },
    animatedHeaderContainer: {
      position: 'absolute',
      top: (Platform.OS == 'ios') ? 20 : 0,
      left: 0,
      right: 0,

    },
    headerText: {
      color: 'white',
      fontSize: 16,
      marginLeft: '4%',
      fontFamily: 'NunitoSans-Bold',
    },
    backgroundImage: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      width: null,
      height: HEADER_MAX_HEIGHT,
      resizeMode: 'stretch',
    },
    conten: {
      marginTop: '-18%',
      marginBottom: '4%',
      height: '100%'
    },
    grp:{
    flexDirection:"row", 
      marginTop: '5%',
  },
  });