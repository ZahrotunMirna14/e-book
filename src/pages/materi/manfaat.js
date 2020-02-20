import React, { Component } from 'react';
import {
	StyleSheet,
	Text,
	View,
	TextInput,
	TouchableOpacity,
	KeyboardAvoidingView, Image, ScrollView,
}from 'react-native';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Unorderedlist from 'react-native-unordered-list';

export default class manfaat extends Component {
  static navigationOptions = ({navigation}) =>({ 
       headerLeft: () => 
         <TouchableOpacity style={{marginLeft: 10}} onPress ={() => navigation.goBack()}>
           <Image
               style={{width: 25, height: 25, marginTop: 2}}
               source={require('../../images/back.png')}/>
         </TouchableOpacity>
       ,
  	  title: 'Manfaat Bela Negara',
      headerStyle: {
      	elevation: 0,
      	backgroundColor: '#ffffff'
      },
      headerTitleStyle: {
    	color: '#7850EA',
    	fontFamily: 'NunitoSans-SemiBold',
    	fontSize: 16
  }
    });
	render(){
		return(
			<ScrollView style={{backgroundColor: '#ffffff'}}>
			<View style={styles.container}>
				<Image style={styles.img} source={require('../../images/materi/manfaat.png')} />
					<Unorderedlist><Text style={styles.text}>Membentuk sikap disiplin waktu,aktivitas,dan pengaturan kegiatan lain.
					</Text></Unorderedlist>
					<Unorderedlist><Text style={styles.text}>Membentuk jiwa kebersamaan dan solidaritas antar sesama rekan seperjuangan.
					</Text></Unorderedlist>
					<Unorderedlist><Text style={styles.text}>Membentuk mental dan fisik yang tangguh.
					</Text></Unorderedlist>
					<Unorderedlist><Text style={styles.text}>Menanamkan rasa kecintaan pada Bangsa dan Patriotisme sesuai dengan kemampuan diri.
					</Text></Unorderedlist>
					<Unorderedlist><Text style={styles.text}>Melatih jiwa leadership dalam memimpin diri sendiri maupun kelompok.
					</Text></Unorderedlist>
					<Unorderedlist><Text style={styles.text}>Berbakti pada orang tua, bangsa, agama.
					</Text></Unorderedlist>
					<Unorderedlist><Text style={styles.text}>Membentuk Iman dan Taqwa pada Agama yang dianut oleh individu.
					</Text></Unorderedlist>
					<Unorderedlist><Text style={styles.text}>Melatih kecepatan, ketangkasan, ketepatan individu dalam melaksanakan kegiatan.
					</Text></Unorderedlist>
					<Unorderedlist><Text style={styles.text}>Menghilangkan sikap negatif seperti malas, apatis, boros, egois, tidak disiplin, .
					</Text></Unorderedlist>
					<Unorderedlist><Text style={styles.text}>Membentuk perilaku jujur, tegas, adil, tepat, dan kepedulian antar sesama.
					</Text></Unorderedlist>

			</View>
			</ScrollView>
		)
	}
}


const styles = StyleSheet.create({
	container : {
		backgroundColor:'#ffffff',
		flex: 1,
		marginLeft: 18,
		marginRight: 18,
	},
	img:{
		width: 324,
		height: 151,
		marginTop: 20,
		marginBottom: 24
	},
	content:{
		marginLeft: 10,
		marginRight: 10,
	},
	text:{
		fontFamily: 'NunitoSans-Regular',
		fontSize: 16,
		marginBottom: 16
	},
	textC:{
		marginTop: 24,
		fontFamily: 'NunitoSans-Bold',
		fontSize: 16
	},
	ul:{
		marginTop: 14,
	},
	tul:{
		fontFamily: 'NunitoSans-Bold',
		fontSize: 16
	},
	texta:{
		marginBottom: 20,
		fontFamily: 'NunitoSans-Regular',
		fontSize: 16
	}
});