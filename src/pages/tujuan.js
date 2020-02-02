import React, { Component } from 'react';
import {
	StyleSheet,
	Text,
	View,
	TextInput,
	TouchableOpacity,
	KeyboardAvoidingView, Image, ScrollView,
}from 'react-native';
import Logo from '../component/Logo';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Unorderedlist from 'react-native-unordered-list';

export default class unsur extends Component {
  static navigationOptions = { 
      headerStyle: {
      	elevation: 0,
      	backgroundColor: '#ffffff'
      },
      headerTitleStyle: {
    	color: '#7850EA',
    	fontFamily: 'NunitoSans-SemiBold',
    	fontSize: 16
  }
    };
	render(){
		return(
			<ScrollView style={{backgroundColor: '#ffffff'}}>
			<View style={styles.container}>
				<Image style={styles.img} source={require('../images/materi/tujuan.png')} />
					<Unorderedlist><Text style={styles.text}>Mempertahankan kelangsungan hidup bangsa dan negara</Text></Unorderedlist>
					<Unorderedlist><Text style={styles.text}>Melestarikan budaya</Text></Unorderedlist>
					<Unorderedlist><Text style={styles.text}>Menjalankan nilai-nilai pancasila dan UUD 1945</Text></Unorderedlist>
					<Unorderedlist><Text style={styles.text}>Berbuat yang terbaik bagi bangsa dan negara.</Text></Unorderedlist>
					<Unorderedlist><Text style={styles.text}>Menjaga identitas dan integritas bangsa atau negara</Text></Unorderedlist>

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