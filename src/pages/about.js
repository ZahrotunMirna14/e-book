import React from 'react';
import {  SafeAreaView,  StyleSheet,  ScrollView,  View,  Text,  StatusBar,  TouchableOpacity, Image, Animated, Linking  } from 'react-native';
import { Container, Header, body, Title, Card, CardItem, Left, Content, Thumbnail, Subtitle} from 'native-base';
import List from './ListMember';
import Logo from '../component/Logo';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

export default class materi extends React.Component {
	static navigationOptions= ({navigation}) =>({ 
       headerLeft: () => 
         <TouchableOpacity style={{marginLeft: 10}} onPress ={() => navigation.goBack()}>
           <Image
               style={{width: 25, height: 25, marginTop: 2}}
               source={require('../images/back.png')}/>
         </TouchableOpacity>
       ,
  	  title: 'Tentang Kami',
      headerStyle: {
		elevation: 0,
        backgroundColor: '#ffffff',
      },
      headerTitleStyle: {
        color: '#7850EA',
        fontFamily: 'NunitoSans-SemiBold',
        fontSize: 16
      },
      
    });

    render(){
    	return (
    	  <View style={styles.container}>
    	  <ScrollView style={{flex: 1}}>
    		<View style={styles.top}>
    			<Logo style={styles.logo}/>
    		</View>

    		<View style={styles.center}>
    			<Text style={styles.title}>Aplikasi Bela Negara</Text>
    			<Text style={styles.subtitle}>Bela Negara adalah aplikasi belajar yang menyediakan materi lengkap mengenai bela negara. 
	    			Berbagai fitur disediakan mulai dari materi, latihan soal, dan kuis menarik. 
	    			Konten belajar yang tersedia untuk jenjang SMK yang telah disetujui oleh guru. 
	    		</Text>
    		</View>

	    	<Content style={styles.conten}>
		        <List
		          style={{marginTop: 48}}
		          judul="Zahrotun Mirna Nisa"
				  subtitle="Front End Developer"
				  link={() => Linking.openURL('https://github.com/ZahrotunMirna14')}
		          img={require('../images/about/nisa.jpg')}
		        />

		        <List
		          judul="Zaidan Ahmad Huda"
				  subtitle="Back End Developer"
				  link={() => Linking.openURL('https://www.instagram.com/zidanhuda_/')}
		          img={require('../images/iconMateri/dasar.png')}
		        />

		        <List
		          judul="Siti Dahlia"
				  subtitle="UI UX Designer"
				  link={() => Linking.openURL('https://dribbble.com/Sitidahlia')}
		          img={require('../images/about/siti.jpg')}
		        />

		        <List
		          judul="Salsabila Cahya Alifa"
		          subtitle="UI UX Designer"
				  link={() => Linking.openURL('https://www.instagram.com/sabil.ca/')}
		          img={require('../images/about/sabil.jpeg')}
		        />

		        <List
		          judul="Windiana Dinda Sekaryus"
		          subtitle="Content Writer & Illustrator"
				  link={() => Linking.openURL('https://dribbble.com/windianads')}
		          img={require('../images/about/dindaa.jpg')}
		        />

		        <List
		          judul="Rr. Yashinta Pangesti G."
		          subtitle="Content Writer & Illustrator"
				  link={() => Linking.openURL('https://dribbble.com/ShintaGyanrini')}
		          img={require('../images/about/shintaa.jpg')}
		        />
	      	</Content> 
	      </ScrollView>
	      </View>
    	)
  	}
}

const styles = StyleSheet.create(
  {
    container: {
		flex: 1,
        backgroundColor: '#ffffff',
	    height: 1000,
    },

    top: {
    	marginVertical: '5%',
    	alignItems: 'center'
    },

    center: {
		marginVertical: '5%',
    	alignItems: 'center'
     },

    conten: {
    	marginVertical: '5%',
	   	height: '100%'
    },

    title: {
	    fontFamily: 'NunitoSans-Bold',
	    fontSize: 16,

    },

    subtitle:{
	    marginHorizontal: 18,
	    fontSize: 14,
	    fontFamily: 'NunitoSans-Regular',
	    textAlign: 'center'
	  },
  });