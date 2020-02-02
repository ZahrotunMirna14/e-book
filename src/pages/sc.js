import React, { Component } from 'react';
import {
	StyleSheet,
	Text,
	View,
	TextInput,
	TouchableOpacity,
	KeyboardAvoidingView, Image, ScrollView
}from 'react-native';
import Logo from '../component/Logo';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Unorderedlist from 'react-native-unordered-list';

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
	render(){
		return(
			<ScrollView style={styles.sView}>
			<View style={styles.container}>
			
				<Image style={styles.img} source={require('../images/materi/pengertian.png')} />
				<View style={styles.content}>
					<Text style={styles.text}>Bela Negara adalah sikap dan perilaku warga negara yang dijiwai 
						oleh kecintaannya kepada Negara Kesatuan Republik Indonesia yang berdasarkan Pancasila dan 
						Undang-Undang Dasar 1945 dalam menjalin kelangsungan hidup bangsa dan negara yang seutuhnya.</Text>

					<Text style={styles.textC}>PENGERTIAN BELA NEGARA MENURUT PARA AHLI	</Text>

					<View style={styles.ul}>
						<Unorderedlist ><Text style={styles.tul}>Menurut Darji Darmodiharjo (1991)</Text></Unorderedlist>
					</View>
					<Text style={styles.texta}>Definisi bela negara dilandaskan doktrin keamanan nasional 
						guna berusaha menciptakan sistem pertahanan keamanan nasional yang mampu menyukseskan dan 
						mengamankan perjuangan nasional pada umumnya.
					</Text>

					<View style={styles.ul}>
						<Unorderedlist ><Text style={styles.tul}>Menurut Sunarso (2008)</Text></Unorderedlist>
					</View>
					<Text style={styles.texta}>Menurut Sunarso, bela negara mengandung empat hal esensial yang 
						harus dibela yaitu (1) kemerdekaan dan kedaulatan negara, (2) kesatuan dan persatuan bangsa, (3) 
						keutuhan wilayah dan yuridiksi nasional, dan (4) nilai-nilai Pancasila dan UUD 1945.
					</Text>

					<View style={styles.ul}>
						<Unorderedlist ><Text style={styles.tul}>Menurut Purnomo Yusgiantoro (2010)</Text></Unorderedlist>
					</View>
					<Text style={styles.texta}>Pengertian bela negara menurut Purnomo Yusgiantoro merupakan 
						sikap perilaku warga negara yang dijiwai oleh kecintaan kepada Negara Kesatuan Republik 
						Indonesia berdasarkan Pancasila dan UU Dasar 1945 untuk menjamin kelangsungan hidup bangsa 
						dan negara, sehingga untuk menumbuhkan sikap bela negara bisa melalui suatu bentuk pelatihan 
						yang berkala dan terus menerus. Hal tersebut agar pelatihan dalam penumbuhan sikap bela negara 
						bisa berhasil secara maksimal.
					</Text>

					<View style={styles.ul}>
						<Unorderedlist ><Text style={styles.tul}>Chaidir Basrie</Text></Unorderedlist>
					</View>
					<Text style={styles.texta}>Makna bela negara menurut Chaidir Basrie yaitu sikap dan tekad 
						serta tidakan suatu warga negara yang bersifat teratur, menyeluruh, terpadu, dan berlanjut, 
						yangmana dilandaskan oleh kecintaan kepada tanah air dan kesadaran dalam berbangsa bernegara 
						Indonesia serta kesaktian dan keyakinan terhadap Pancasila yang merupakan ideologi Negara Indonesia.
					</Text>
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
		marginTop: 16,
		marginBottom: 20,
		fontFamily: 'NunitoSans-Regular',
		fontSize: 16
	}
});