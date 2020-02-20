import React, { Component } from 'react';
import {
	StyleSheet,
	Text,
	View,
	TextInput,
	TouchableOpacity,
	KeyboardAvoidingView, Image, ScrollView
}from 'react-native';
import Video from '../../component/video';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Unorderedlist from 'react-native-unordered-list';

export default class contoh extends Component {
  static navigationOptions = ({navigation}) =>({ 
       headerLeft: () => 
         <TouchableOpacity style={{marginLeft: 10}} onPress ={() => navigation.goBack()}>
           <Image
               style={{width: 25, height: 25, marginTop: 2}}
               source={require('../../images/back.png')}/>
         </TouchableOpacity>
       ,
  	  title: 'Contoh Penerapan',
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
		<View style={{flex: 1}}>
				<Video/>
			<ScrollView style={{backgroundColor: '#ffffff'}}>
			<View style={styles.container}>

				<View style={styles.content}>				
					<Text style={styles.textC}>Penarapan Bela Negara di Lingkungan Keluarga</Text>

						<View style={styles.ul}>
							<Unorderedlist ><Text style={styles.tul}>Mengembangkan sikap saling mengasihi, saling menolong, saling menghormati dan menghargai antar anggota keluarga</Text></Unorderedlist>
						</View>

						<View style={styles.ul}>
							<Unorderedlist ><Text style={styles.tul}>Menciptakan suasana rukun, damai, dan harmonis dalam keluarga</Text></Unorderedlist>
						</View>

						<View style={styles.ul}>
							<Unorderedlist ><Text style={styles.tul}>Menjaga kebersihan dan kesehatan keluarga</Text></Unorderedlist>
						</View>

						<View style={styles.ul}>
							<Unorderedlist ><Text style={styles.tul}>Menjaga nama baik keluarga dengan perilaku yang terpuji atau mulia</Text></Unorderedlist>
						</View>

						<View style={styles.ul}>
							<Unorderedlist ><Text style={styles.tul}>Saling mengingatkan sesama anggota keluaraga untuk selalu patuh pada hukum yang berlaku</Text></Unorderedlist>
						</View>

					<Text style={styles.textC}>Penarapan Bela Negara di Lingkungan Sekolah</Text>

						<View style={styles.ul}>
							<Unorderedlist ><Text style={styles.tul}>Meningkatkan imtaq dan iptek</Text></Unorderedlist>
						</View>

						<View style={styles.ul}>
							<Unorderedlist ><Text style={styles.tul}>Membudayakan GDN (Gerakan Disiplin Nasional) di sekolah meliputi : budaya tertib, budaya bersih, dan budaya kerja/belajar</Text></Unorderedlist>
						</View>

						<View style={styles.ul}>
							<Unorderedlist ><Text style={styles.tul}>Mengembangkan kepedulian sosial di sekolah, misalnya dengan keihklasan mengumplkan dana sosial, infak, zakat, shodaqoh, untuk menolong warga sekolah yang membutuhkan</Text></Unorderedlist>
						</View>

						<View style={styles.ul}>
							<Unorderedlist ><Text style={styles.tul}>Kesadaran untuk menaati tata tertib sekolah</Text></Unorderedlist>
						</View>

						<View style={styles.ul}>
							<Unorderedlist ><Text style={styles.tul}>Belajar dengan giat supaya mendapatan prestasi baik</Text></Unorderedlist>
						</View>

					<Text style={styles.textC}>Penarapan Bela Negara di Lingkungan Masyarakat</Text>

						<View style={styles.ul}>
							<Unorderedlist ><Text style={styles.tul}>Mengembangkan sikap tenggang rasa dan tolong membantu antar warga negara masyarakat</Text></Unorderedlist>
						</View>

						<View style={styles.ul}>
							<Unorderedlist ><Text style={styles.tul}>Bersama-sama menciptakan lingkungan yang bersih dan sehat</Text></Unorderedlist>
						</View>

						<View style={styles.ul}>
							<Unorderedlist ><Text style={styles.tul}>Selalu aktif dalam kegiatan sosial seperti kerja bakti, dll.</Text></Unorderedlist>
						</View>

						<View style={styles.ul}>
							<Unorderedlist ><Text style={styles.tul}>Menghargai adanya perbedaan dan memperkuat persamaan yang ada</Text></Unorderedlist>
						</View>

						<View style={styles.ul}>
							<Unorderedlist ><Text style={styles.tul}>Meningkatan kegiatan gotong royong dan semangan persatuan dan kesatuan</Text></Unorderedlist>
						</View>

					<Text style={styles.textC}>Penarapan Bela Negara di Lingkungan Negara</Text>

						<View style={styles.ul}>
							<Unorderedlist ><Text style={styles.tul}>Mematuhi peraturan hukum yang berlaku</Text></Unorderedlist>
						</View>

						<View style={styles.ul}>
							<Unorderedlist ><Text style={styles.tul}>Mengamalkan nilai-nila yang terkandung dalam Pancasila sebagai ideologi dan dasar negara</Text></Unorderedlist>
						</View>

						<View style={styles.ul}>
							<Unorderedlist ><Text style={styles.tul}>Membayar pajak tepat pada waktunya</Text></Unorderedlist>
						</View>

						<View style={styles.ul}>
							<Unorderedlist ><Text style={styles.tul}>Bersikap selektif pada masuknya budaya asing ke Indonesia dan lain sebagainya</Text></Unorderedlist>
						</View>

						<View style={styles.ul}>
							<Unorderedlist ><Text style={styles.tul}>Selalu kritis pada kebijakan pemerintah</Text></Unorderedlist>
						</View>
				</View>
			</View>
			</ScrollView>
			</View>
		)
	}
}


const styles = StyleSheet.create({
	container : {
		backgroundColor:'#ffffff',
		flex: 1,
		alignItems: 'center',
	},
	video:{
		width: 324,
		height: 151,
		marginTop: 20,
		marginBottom: 12
	},
	content:{
		marginLeft: 18,
		marginRight: 18,
	},
	textC:{
		marginTop: 12,
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