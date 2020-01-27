import React, { Component } from 'react';
import {
	StyleSheet,
	Text,
	View,
	TextInput,
	TouchableOpacity,
	KeyboardAvoidingView, Image
}from 'react-native';
import Logo from '../component/Logo';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import PasswordInputText from 'react-native-hide-show-password-input';
	
export default class sc extends Component {
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
    constructor() {
	    super();	 
	    this.state = { hidePassword: true }
	  }	

	  managePasswordVisibility = () =>
	  {
	    this.setState({ hidePassword: !this.state.hidePassword });
	  }
 
	render(){
		return(
		<View style={styles.container}>
        	<Text style={styles.text}>ini screen materi</Text>
        </View>
		)
	}
}


const styles = StyleSheet.create({
	container : {
		backgroundColor:'#ffffff',
		flex: 1,
		justifyContent:'center',
	},

	logo:{
		marginBottom: 56,
	},

	input:{
		marginTop: 120,
	},

	text:{

		marginHorizontal: 18,
		fontSize:14,
		color: '#7d7d7d',
		marginTop: 24,
    	fontFamily: 'NunitoSans-Bold',
	},

	inputBox: {
		width:324,
    	marginHorizontal: 18,
		fontSize:14,
		color:'#000',
		fontFamily: 'NunitoSans-Regular',
	},

	button: {
	    width: 324, 
	    height: 48,
		backgroundColor:'#7850EA',
		borderRadius: 10,
		marginTop: 48,
		marginBottom: 20,
		paddingVertical: 12,
		textAlign:'center',
    	marginHorizontal: 18,
    	
	},

	buttonText: {
		fontSize:14,
		fontWeight:'500',
		color:'#ffffff',
		textAlign:'center',
    	fontFamily: 'NunitoSans-SemiBold',
	},

	btnImage:{
	    resizeMode: 'contain',
	    height: '100%',
	    width: '100%'
  	},

  	textBoxBtnHolder:{
    	position: 'relative',
	    alignSelf: 'stretch',
	    justifyContent: 'center',
    	fontFamily: 'NunitoSans-Bold',
 	},

 	visibilityBtn:  {
	    position: 'absolute',
	    right: 18,
	    height: 30,
	    width: 30,
	    padding: 5,
	    bottom: 10
  	},
});