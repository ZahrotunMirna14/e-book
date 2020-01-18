import React, { Component } from 'react';
import {
	StyleSheet,
	Text,
	View,
	TextInput,
	TouchableOpacity 
}from 'react-native';
import Logo from '../component/Logo';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

export default class LoginPage extends Component {
	render(){
		return(
			<View style={styles.container}>
				<Logo/>
				<Text style={styles.text}> Email </Text>
					<TextInput style={styles.inputBox}
						underlineColorAndroid='#DADADA'
						placeholder="Masukan Email"
						returnKeyType="next"
						placeholderTextColor = "#DADADA"
						selectionColor="#fff"
						keyboardType="email-address"
						onSubmitEditing={()=> this.password.focus()}/>

				<Text style={styles.text}> Kata Sandi </Text>
					<TextInput style={styles.inputBox}
						underlineColorAndroid='#DADADA'
						placeholder="Masukan Kata Sandi"
						secureTextEntry={true}
						returnKeyType="go"
						placeholderTextColor = "#DADADA"
						ref={(input) => this.password = input}/>

				<TouchableOpacity style={styles.button} onPress ={() => this.props.navigation.navigate('Menu')}>
					<Text style={styles.buttonText}>Masuk</Text>
				</TouchableOpacity>
			</View>
		)
	}
}


const styles = StyleSheet.create({
	container : {
		backgroundColor:'#ffffff',
		flexGrow: 1,
		justifyContent:'center',
	},

	text:{
		fontWeight: 'bold',
		marginHorizontal: 18,
		fontSize:16,
		color: '#7d7d7d',
	},

	inputBox: {
		width:324,
    	marginHorizontal: 18,
		fontSize:16,
		color:'#000',
		marginBottom: 24,
	},

	button: {
	    width: 324, 
	    height: 48,
		backgroundColor:'#F9942F',
		borderRadius: 10,
		marginVertical: 48,
		paddingVertical: 10,
		textAlign:'center',
    	marginHorizontal: 18,
    	
	},

	buttonText: {
		fontSize:16,
		fontWeight:'500',
		color:'#ffffff',
		textAlign:'center'
	},
});