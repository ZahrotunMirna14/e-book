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
import {Container, Header, Left, Body, Right, Title, Content, Button} from 'native-base';
	
export default class LoginPage extends Component {
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
			// <Container>
		 //        <Header noShadow style={{backgroundColor: '#fff'}}>
		 //          <Left>
		 //            <Image
		 //              source={require('../images/back.png')}
		 //              onPress={()=>this.props.navigation.navigate('menuLog')}
		 //            />
		 //          </Left>	
		 //         </Header>	
			<KeyboardAvoidingView behavior="padding" style={styles.container}>
				<Logo style={styles.logo}/>

				<View style={styles.input}>
					<Text style={styles.text}> Email </Text>
						<TextInput style={styles.inputBox}
							underlineColorAndroid='#DADADA'
							placeholder="Masukan Email"
							returnKeyType="next"
							placeholderTextColor = "#DADADA"
							selectionColor="#fff"
							keyboardType="email-address"
							onSubmitEditing={()=> this.password.focus()}/>

					<View style = { styles.textBoxBtnHolder }>
						<Text style={styles.text}> Kata Sandi </Text>
							<TextInput style={styles.inputBox}
								underlineColorAndroid='#DADADA'
								placeholder="Masukan Kata Sandi"
								placeholderTextColor = "#DADADA"
								returnKeyType="go"
								secureTextEntry={ this.state.hidePassword }
								value={this.state.password}
		                    	onChangeText={ (password) => this.setState({ password }) }
								ref={(input) => this.password = input}/>

				        <TouchableOpacity activeOpacity = { 0.8 } style = { styles.visibilityBtn } onPress = { this.managePasswordVisibility }>
				          <Image source = { ( this.state.hidePassword ) ? require('../images/hide.png') : require('../images/see.png') } style={styles.btnImage}/>
				        </TouchableOpacity>
				    </View>
				</View>

				<TouchableOpacity style={styles.button} onPress ={() => this.props.navigation.navigate('Menu')}>
					<Text style={styles.buttonText}>Masuk</Text>
				</TouchableOpacity>
			</KeyboardAvoidingView>
		//	</Container>
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