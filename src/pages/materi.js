import React from 'react';
import {  SafeAreaView,  StyleSheet,  ScrollView,  View,  Text,  StatusBar,  TouchableOpacity } from 'react-native';
import { Container, Header, body, Title, Card, CardItem, Left, Content, Thumbnail, Subtitle} from 'native-base';
import List from './ListContent';

export default class materi extends React.Component {
  render() {
    return (
    	<Content>
	    	<List
	    		judul="Pengertian"
	    		subtitle="Bela Negara adalah sikap dan perilaku warga negara ..."
	    		img={require('../images/iconMateri/1.png')}
	    	/>

	    	<List
	    		judul="Dasar Hukum"
	    		subtitle="Tap MPR No.VI Tahun 1973 tentang konsep Wawasan ..."
	    		img={require('../images/iconMateri/2.png')}
	    	/>

	    	<List
	    		judul="Unsur"
	    		subtitle="Memiliki jiwa cinta tanah air,Rela berkorban demi ..."
	    		img={require('../images/iconMateri/3.png')}
	    	/>

	    	<List
	    		judul="Fungsi"
	    		subtitle="Mempertahankan Negara dari berbagai ancaman, Men ..."
	    		img={require('../images/iconMateri/4.png')}
	    	/>

	    	<List
	    		judul="Tujuan"
	    		subtitle="Mempertahankan kelangsungan hidup bang ..."
	    		img={require('../images/iconMateri/5.png')}
	    	/>

	    	<List
	    		judul="Manfaat"
	    		subtitle="Membentuk sikap disiplin waktu, aktivitas, dan penga ..."
	    		img={require('../images/iconMateri/6.png')}
	    	/>

	    	<List
	    		judul="Contoh dan Penerapan"
	    		subtitle="Mengembangkan sikap saling mengasihi, saling menolong ..."
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
