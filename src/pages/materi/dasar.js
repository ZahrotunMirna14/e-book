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

export default class dasar extends Component {
  static navigationOptions= ({navigation}) =>({ 
       headerLeft: () => 
         <TouchableOpacity style={{marginLeft: 10}} onPress ={() => navigation.goBack()}>
           <Image
               style={{width: 25, height: 25, marginTop: 2}}
               source={require('../../images/back.png')}/>
         </TouchableOpacity>
       ,
  	  title: 'Dasar Hukum',
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
				<Image style={styles.img} source={require('../../images/materi/dasar.png')} />
				<View style={styles.content}>
					<Unorderedlist><Text style={styles.text}>Pasal 27 ayat (3) UUD 194.</Text></Unorderedlist>
					<Unorderedlist><Text style={styles.text}>Tap MPR No.VI Tahun 1973 tentang konsep Wawasan Nusantara dan Keamanan Nasional.</Text></Unorderedlist>
					<Unorderedlist><Text style={styles.text}>Undang-Undang No.29 tahun 1954 tentang Pokok-Pokok Perlawanan Rakyat.</Text></Unorderedlist>
					<Unorderedlist><Text style={styles.text}>Undang-Undang No.20 tahun 1982 tentang Ketentuan Pokok Hankam Negara RI. Diubah oleh Undang-Undang Nomor 1 Tahun 1988.</Text></Unorderedlist>
					<Unorderedlist><Text style={styles.text}>Tap MPR No.VI Tahun 2000 tentang Pemisahan TNI dengan POLRI.</Text></Unorderedlist>
					<Unorderedlist><Text style={styles.text}>Tap MPR No.VII Tahun 2000 tentang Peranan TNI dan POLRI.</Text></Unorderedlist>
					<Unorderedlist><Text style={styles.text}>Amandemen UUD ’45 Pasal 30 ayat 1-5 dan pasal 27 ayat 3.</Text></Unorderedlist>
					<Unorderedlist><Text style={styles.text}>Undang-Undang No.3 tahun 2002 tentang Pertahanan Negara.</Text></Unorderedlist>
					<Unorderedlist><Text style={styles.text}>Undang-Undang No.56 tahun 1999 tentang Rakyat Terlatih</Text></Unorderedlist>
				</View>

				<Text style={styles.text}>Untuk mewujudkan kesadaran dan menyatukan konsep pembelaan 
					negara di tengah masyarakat, salah satunya dilakukan melalui penciptaan lagu Mars Bela Negara. 
					Mars ini digubah oleh salah seorang musisi Indonesia yang memiliki nasionalisme, yaitu Dharma Oratmangun.
					Selain itu, dalam upaya menjaga kesadaran bela negara, dibuatlah sebuah momen untuk memperingatinya. 
					Hari yang sudah ditetapkan sebagai hari Bela Negara dipilih tanggal 19 Desember.
				</Text>

				<Text style={styles.texta}>Penetapan ini dimulai tahun 2006 oleh Presiden Susilo Bambang Yudhoyono, 
					yang dituangkan melalui Keputusan Presiden Republik Indonesia No. 28 Tahun 2006.
				</Text>

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