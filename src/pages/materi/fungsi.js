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

export default class unsur extends Component {
  static navigationOptions= ({navigation}) =>({ 
       headerLeft: () => 
         <TouchableOpacity style={{marginLeft: 10}} onPress ={() => navigation.goBack()}>
           <Image
               style={{width: 25, height: 25, marginTop: 2}}
               source={require('../../images/back.png')}/>
         </TouchableOpacity>
       ,
  	  title: 'Fungsi Bela Negara',
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
				<Image style={styles.img} source={require('../../images/materi/fungsi.png')} />
					<Unorderedlist><Text style={styles.text}>Mempertahankan Negara dari berbagai ancaman</Text></Unorderedlist>
					<Unorderedlist><Text style={styles.text}>Menjaga keutuhan wilayah negara</Text></Unorderedlist>
					<Unorderedlist><Text style={styles.text}>Merupakan kewajiban setiap warga negara</Text></Unorderedlist>
					<Unorderedlist><Text style={styles.text}>Merupakan panggilan sejarah</Text></Unorderedlist>
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