import React from 'react';
import {  SafeAreaView,  StyleSheet,  ScrollView,  View,  Text,  StatusBar,  TouchableOpacity } from 'react-native';
import { Container, Header, body, Title, Card, CardItem, Left, Content, Thumbnail, Subtitle} from 'native-base';
import List from './ListContent';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

export default class materi extends React.Component {
  static navigationOptions = { 
      headerStyle: {
      	elevation: 0,
      	backgroundColor: '#ECEFF3'
      },
      headerTitleStyle: {
    	color: '#7850EA',
    	fontFamily: 'NunitoSans-SemiBold',
    	fontSize: 16
  }
};
  render() {
    return (
      
    	<Content >
	    	<List
	    		judul="Pengertian"
	    		subtitle="Bela Negara adalah sikap dan perilaku ..."
	    		img={require('../images/iconMateri/1.png')}
	    		navigation= {() => this.props.navigation.navigate('Scr')}
	    	/>

	    	<List
	    		judul="Dasar Hukum"
	    		subtitle="Tap MPR No.VI Tahun 1973 tentang konsep..."
	    		img={require('../images/iconMateri/2.png')}
	    		navigation= {() => this.props.navigation.navigate('Daftar')}
	    	/>

	    	<List
	    		judul="Unsur"
	    		subtitle="Memiliki jiwa cinta tanah air,Rela berkorban demi ..."
	    		img={require('../images/iconMateri/3.png')}
	    	/>

	    	<List
	    		judul="Fungsi"
	    		subtitle="Mempertahankan Negara dari berbagai ancaman, ..."
	    		img={require('../images/iconMateri/4.png')}
	    	/>

	    	<List
	    		judul="Tujuan"
	    		subtitle="Mempertahankan kelangsungan hidup ..."
	    		img={require('../images/iconMateri/5.png')}
	    	/>

	    	<List
	    		judul="Manfaat"
	    		subtitle="Membentuk sikap disiplin waktu, aktivitas, dan ..."
	    		img={require('../images/iconMateri/6.png')}
	    	/>

	    	<List
	    		judul="Contoh dan Penerapan"
	    		subtitle="Mengembangkan sikap saling mengasihi, saling ..."
	    		img={require('../images/iconMateri/7.png')}
	    	/>

	    	<List
	    		judul="Bentuk Partisipasi"
	    		subtitle="Hubungan patriotisme dengan pertahanan ..."
	    		img={require('../images/iconMateri/8.png')}
	    	/>
	    </Content>
    )
  }

}
