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
      
    	<Content style={styles.View}>
	    	<List
	    		style={{marginTop: 48}}
	    		judul="Pengertian"
	    		subtitle="Bela Negara adalah sikap dan perilaku warga negara ..."
	    		img={require('../images/iconMateri/1.png')}
	    		navigation= {() => this.props.navigation.navigate('Pengertian')}
	    	/>

	    	<List
	    		judul="Dasar Hukum"
	    		subtitle="Tap MPR No.VI Tahun 1973 tentang konsep Wawasan ..."
	    		img={require('../images/iconMateri/2.png')}
	    		navigation= {() => this.props.navigation.navigate('Dasarhukum')}
	    	/>

	    	<List
	    		judul="Unsur"
	    		subtitle="Memiliki jiwa cinta tanah air,Rela berkorban demi ..."
	    		img={require('../images/iconMateri/3.png')}
	    		navigation= {() => this.props.navigation.navigate('Unsur')}
	    	/>

	    	<List
	    		judul="Fungsi"
	    		subtitle="Mempertahankan Negara dari berbagai ancaman, Men ..."
	    		img={require('../images/iconMateri/4.png')}
	    		navigation= {() => this.props.navigation.navigate('Fungsi')}
	    	/>

	    	<List
	    		judul="Tujuan"
	    		subtitle="Mempertahankan kelangsungan hidup bang ..."
	    		img={require('../images/iconMateri/5.png')}
	    		navigation= {() => this.props.navigation.navigate('Tujuan')}
	    	/>

	    	<List
	    		judul="Manfaat"
	    		subtitle="Membentuk sikap disiplin waktu, aktivitas, dan penga ..."
	    		img={require('../images/iconMateri/6.png')}
	    		navigation= {() => this.props.navigation.navigate('Manfaat')}
	    	/>

	    	<List
	    		judul="Contoh dan Penerapan"
	    		subtitle="Mengembangkan sikap saling mengasihi, saling menolong ..."
	    		img={require('../images/iconMateri/7.png')}
	    		navigation= {() => this.props.navigation.navigate('Contoh')}
	    	/>

	    	<List
	    		judul="Bentuk Partisipasi"
	    		subtitle="Hubungan patriotisme dengan pertahanan ..."
	    		img={require('../images/iconMateri/8.png')}
	    		navigation= {() => this.props.navigation.navigate('Partisipasi')}
	    	/>
	    </Content>
    )
  }

}

const styles = StyleSheet.create({

})