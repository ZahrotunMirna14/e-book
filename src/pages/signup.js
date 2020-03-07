import React, {Component} from 'react';
import {  SafeAreaView,  StyleSheet,  ScrollView,  View, StatusBar,  TouchableOpacity, ImageBackground, BackHandler, Alert, Image, KeyboardAvoidingView, TextInput } from 'react-native';
import {Container, Header, Content, Button, Text} from 'native-base';
import Logo from '../component/Logo';
import axios from 'axios';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import PasswordInputText from 'react-native-hide-show-password-input';

export default class LoginPage extends Component {

  static navigationOptions= ({navigation}) =>({ 
       headerLeft: () => 
         <TouchableOpacity style={{marginLeft: 10}} onPress ={() => navigation.goBack()}>
           <Image
               style={{width: 25, height: 25, marginTop: 2}}
               source={require('../images/back.png')}/>
         </TouchableOpacity>
       , title: null,
      headerStyle: {
        elevation: 0,
        backgroundColor: '#ffffff'
      },
      headerTitleStyle: {
        color: '#7850EA',
        fontFamily: 'NunitoSans-SemiBold',
        fontSize: 16
      },
      
    });
	constructor(props) {
	    super(props);	 
		this.state = {
			payload: {
			  name: '',
			  email: '',
			  password: '',
			},
			hidePassword: true,
			respons: '',
			showToast: false,
		};
		this.handleInput = this.handleInput.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	  }	

	  handleInput (name, value){
		  this.setState(prevState => ({
			payload: {
				...prevState.payload,
				[name]: value,
			  },
		  }));
	  }
	  handleSubmit() {
		let payload = {
		  ...this.state.payload,
		};
		axios
      .post('http://54.162.180.82/api/register', payload)
      .then(response => {
        if (response.status === 200) { 
		 this.props.navigation.navigate('Masuk')
          return ToastAndroid.show(
            'Signup Success',
            ToastAndroid.LONG,
            ToastAndroid.TOP,
            25,
            50,
          );
		} else if (response.status === 401){ 
			return ToastAndroid.show(
				'Email/Password Salah',
				ToastAndroid.LONG,
				ToastAndroid.TOP,
				25,
				50,
			);
		}
      })
      .catch(err => console.log(err));
  }

	  managePasswordVisibility = () =>
	  {
	    this.setState({ hidePassword: !this.state.hidePassword });
	  }
 
   render(){
    return(
    	<View style={styles.container}>
    		<View style={styles.top}>
				<Logo style={styles.logo}/>
    		</View>
    		<View style={styles.bottom}>
    	<KeyboardAvoidingView behavior="padding" style={styles.conten}>
    			<View style={styles.input}>
    			<Text style={styles.text}> Nama Lengkap </Text>
						<TextInput style={styles.inputBox}
							underlineColorAndroid='#DADADA'
							placeholder="Masukan Nama"
							returnKeyType="next"
							placeholderTextColor = "#DADADA"
							selectionColor="#fff"
							keyboardType="email-address"
							onChangeText={value => {
								this.handleInput('name', value);
							  }}
							  value={this.state.payload.name}
							onSubmitEditing={()=> this.password.focus()}/>

					<Text style={styles.text}> Email </Text>
						<TextInput style={styles.inputBox}
							underlineColorAndroid='#DADADA'
							placeholder="Masukan Email"
							returnKeyType="next"
							placeholderTextColor = "#DADADA"
							selectionColor="#fff"
							keyboardType="email-address"
							onChangeText={value => {
								this.handleInput('email', value);
							  }}
							  value={this.state.payload.email}
							onSubmitEditing={()=> this.password.focus()}/>


					<View style = { styles.textBoxBtnHolder }>
						<Text style={styles.text}> Kata Sandi </Text>
							<TextInput style={styles.inputBox}
								underlineColorAndroid='#DADADA'
								placeholder="Masukan Kata Sandi"
								placeholderTextColor = "#DADADA"
								returnKeyType="go"
								onChangeText={value => {
									this.handleInput('password', value);
								  }}
								  value={this.state.payload.password}
								secureTextEntry={ this.state.hidePassword }
								ref={(input) => this.password = input}/>

				        <TouchableOpacity activeOpacity = { 0.8 } style = { styles.visibilityBtn } onPress = { this.managePasswordVisibility }>
				          <Image source = { ( this.state.hidePassword ) ? require('../images/hide.png') : require('../images/see.png') } style={styles.btnImage}/>
				        </TouchableOpacity>
				    </View>
				</View>

				<TouchableOpacity style={styles.button} onPress ={this.handleSubmit}>
					<Text style={styles.buttonText}>Daftar</Text>
				</TouchableOpacity>    	
		</KeyboardAvoidingView>	    			
    		</View>
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

	conten : {
		backgroundColor:'#ffffff',
	},

	top:{
	    height: '25%',
	    alignItems: 'center',
		justifyContent:'center',
	 },

	 bottom:{
	    height: '75%',
	    justifyContent: 'center',
	},

	logo:{
	    justifyContent: 'center',
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
