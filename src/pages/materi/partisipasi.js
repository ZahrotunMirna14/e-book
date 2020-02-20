import React, { Component } from 'react';
import {
	StyleSheet,
	Text,
	View,
	TextInput,
	TouchableOpacity,
	KeyboardAvoidingView, Image, ScrollView
}from 'react-native';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Unorderedlist from 'react-native-unordered-list';

export default class partisipasi extends Component {
  static navigationOptions = ({navigation}) =>({ 
       headerLeft: () => 
         <TouchableOpacity style={{marginLeft: 10}} onPress ={() => navigation.goBack()}>
           <Image
               style={{width: 25, height: 25, marginTop: 2}}
               source={require('../../images/back.png')}/>
         </TouchableOpacity>
       ,
  	  title: 'Bentuk Partisipasi',
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
			<ScrollView style={styles.sView}>
			<View style={styles.container}>
			
				<Image style={styles.img} source={require('../../images/materi/partisipasi.png')} />
				<View style={styles.content}>
					<Text style={styles.text}>Hubungan patriotisme dengan pertahanan dan keamanan nasional 
						dapat digambarkan bahwa semangat dan jiwa patriot merupakan modal yang sangat berharga 
						bagi pertahanan dan keamanan nasional. Dalam sistem pertahanan dan keamanan nasional, 
						sangat dibutuhkan sikap loyal atau setia pada bangsa dan negara pada diri seseorang.</Text>

					<Text style={styles.text}>Setiap warga negara berhak dan wajib ikut serta dalam upaya 
						pembelaan negara (Pasal 27 Ayat 3 UUD 1945) dan tiap-tiap warga negara berhak dan wajib 
						ikut serta dalam usaha pertahanan dan keamanan negara (Pasal 30 Ayat 1). 
						Adapun undang-undang yang mengatur pertahanan dan keamanan negara adalah Undang-Undang Nomor 3 Tahun 2002.</Text>

					<Text style={styles.textC}>Bentuk partisipasi warga negara dalam usaha bela negara, dapat dilakukan melalui:</Text>


					<View style={styles.ul}>
						<Unorderedlist ><Text style={styles.tul}>Militer sukarela (milsuk);</Text></Unorderedlist>
					</View>

					<View style={styles.ul}>
						<Unorderedlist ><Text style={styles.tul}>Wajib militer (wamil);</Text></Unorderedlist>
					</View>

					<View style={styles.ul}>
						<Unorderedlist ><Text style={styles.tul}>Organisasi Pertahanan Wilayah (OPW), seperti pertahanan sipil (hansip), perlawanan rakyat (wanra), dan keamanan rakyat (kamra);</Text></Unorderedlist>
					</View>

					<View style={styles.ul}>
						<Unorderedlist ><Text style={styles.tul}>Berprestasi di setiap bidang, baik sosial, pendidikan, budaya, ekonomi, dan teknologi</Text></Unorderedlist>
					</View>
				</View>
			</View>
			</ScrollView>
		)
	}
}


const styles = StyleSheet.create({
	container : {
		backgroundColor:'#ffffff',
		flex: 1,
		alignItems: 'center',
	},
	img:{
		width: 324,
		height: 151,
		marginTop: 20,
	},
	content:{
		marginLeft: 18,
		marginRight: 18,
	},
	text:{
		marginTop: 24,
		fontFamily: 'NunitoSans-Regular',
		fontSize: 16
	},
	textC:{
		marginTop: 16,
		marginBottom: 16,
		fontFamily: 'NunitoSans-Bold',
		fontSize: 16
	},
	ul:{
		marginBottom: 16,
	},
	tul:{
		fontFamily: 'NunitoSans-Regular',
		fontSize: 16
	},
	texta:{
		marginTop: 16,
		marginBottom: 20,
		fontFamily: 'NunitoSans-Regular',
		fontSize: 16
	}
});