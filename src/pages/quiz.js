import React, { Component } from 'react';
import {
	AppRegistry,
	StyleSheet,
	Text,
	View,
	TextInput,
	TouchableOpacity,
	Button,
  Dimensions,
  ScrollView,
  Image,
}from 'react-native';
import { createAppContainer } from 'react-navigation';
import Animbutton from './animbutton'
import Icon from 'react-native-vector-icons/Ionicons';
import { createStackNavigator } from 'react-navigation-stack';

const { width, height } = Dimensions.get('window')
let arrnew = []
const jsonData = {"quiz" : {
  "quiz1" : {
    "question1" : {
      "correctoption" : "option3",
      "options" : {
        "option1" : "Membayar pajak tepat pada waktunya",
        "option2" : "Menciptakan suasana rukun, damai, dan tentram dalam masyarakat",
        "option3" : "Belajar dengan giat supaya mendapatan prestasi baik",
        "option4" : "Menciptakan suasana rukun, damai, dan harmonis dalam keluarga.",
        "option5" : "Mengamalkan nilai-nilai yang terkandung dalam Pancasila sebagai ideologi dan dasar negara"
        
      },
      "question" : "1. Yang merupakan contoh sikap penerapan dilingkungan sekolah adalah … "
    },
    "question2" : {
      "correctoption" : "option1",
      "options" : {
          "option1" : "Bela Negara",
          "option2" : "Upaya negara",
          "option3" : "Pembangunan negara",
          "option4" : "Upaya bela negara",
          "option5" : "Hubungan internasional"
        },
      "question" : "2. Sikap dan perilaku warga negara yang dijiwai oleh kecintaannya kepada NKRI yang berdasarkan Pancasila dan UUD 1945 dalam menjalin kelangsungan hidup bangsa dan negara yang seutuhnya merupakan pengertian dari …"
    },
    "question3" : {
      "correctoption" : "option3",
      "options" : {
          "option1" : "Mengharumkan nama sekolah",
          "option2" : "Menang dalam lomba debat",
          "option3" : "Mempertahankan Negara dari berbagai ancaman",
          "option4" : "Menjadi pahlawan kemerdekaan",
          "option5" : "Menjadi diri yang dikenal masyarakat"
        },
      "question" : "3. Dibawah ini yg merupakan fungsi bela negara adalah …"
    },
    "question4" : {
      "correctoption" : "option4",
      "options" : {
          "option1" : "1,2,3",
          "option2" : "2,3,5",
          "option3" : "1,2",
          "option4" : "1,3,4",
          "option5" : "3,4,5",
        },
      "question" : "4. Perhatikan (1) Membentuk sikap disiplin waktu,aktivitas, dan pengaturan kegiatan lain; (2) Menanamkan rasa kecintaan pada kekasih; (3) Melatih jiwa leadership dalam memimpin diri sendiri maupun kelompok. (4) Patriotisme; (5) Membuat mental lemah. Yang merupakan manfaat dari bela negara …"
      	},
    "question5" : {
      "correctoption" : "option2",
      "options" : {
          "option1" : "Purnomo Yusgiantoro",
          "option2" : "Darji Darmodiharjo",
          "option3" : "Sunarso",
          "option4" : "John locke",
          "option5" : "Chaidir Basrie"
        },
      "question" : "5. Dilandaskan doktrin keamanan nasional guna berusaha menciptakan sistem pertahanan keamanan nasional yang mampu menyukseskan dan mengamankan perjuangan nasional pada umumnya. Siapa yang berpendapat mengenai pengertian bela negara diatas?"
    },
    "question6" : {
      "correctoption" : "option5",
      "options" : {
          "option1" : "Purnomo Yusgiantoro",
          "option2" : "Darji Darmodiharjo",
          "option3" : "Sunarso",
          "option4" : "John locke",
          "option5" : "Chaidir Basrie"
        },
      "question" : "6. Sikap dan tekad serta tidakan suatu warga negara yang bersifat teratur, menyeluruh, terpadu, dan berlanjut, yang mana dilandaskan oleh kecintaan kepada tanah air. Siapa yang berpendapat mengenai pengertian bela negara diatas?"
    },
    "question7" : {
      "correctoption" : "option3",
      "options" : {
          "option1" : "Pantun dan Bela negara",
          "option2" : "Puisi dan Bela negeri",
          "option3" : "Lagu dan Mars Bela negara",
          "option4" : "Lagu dan Bela negari",
          "option5" : "Syair dan Mars Bela negara"
        },
      "question" : "7. Untuk mewujudkan kesadaran dan menyatukan konsep pembelaan negara di tengah masyarakat, salah satunya dilakukan melalui penciptaan .... berjudul .... "
    },
    "question8" : {
      "correctoption" : "option2",
      "options" : {
          "option1" : "Membayar pajak tepat pada waktunya",
          "option2" : "Menciptakan suasana rukun, damai, dan tentram dalam masyarakat",
          "option3" : "Belajar dengan giat supaya mendapatan prestasi baik",
          "option4" : "Menciptakan suasana rukun, damai, dan harmonis dalam keluarga.",
          "option5" : "Mengamalkan nilai-nilai yang terkandung dalam Pancasila sebagai ideologi dan dasar negara"
        },
      "question" : "8. Yang merupakan contoh sikap penerapan di lingkungan masyarakat adalah ..."
    },
    "question9" : {
      "correctoption" : "option5",
      "options" : {
          "option1" : "3,4,5",
          "option2" : "1,2",
          "option3" : "1,3,4",
          "option4" : "2,3,5",
          "option5" : "2.4"
        },
      "question" : "9. Perhatikan (1) Selalu aktif dalam kegiatan sosial; (2) Mematuhi peraturan hukum yang berlaku; (3) Meningkatkan imtaq dan iptek; (4) Mengamalkan nilai-nilai yang terkandung dalam Pancasila sebagai ideologi dan dasar negara; (5) Mendukung program GDN, GNOTA, dan wajib belajar 9 tahun. Manakah yang termasuk contoh sikap penerapan di lingkungan masyarakat?"
    },
    "question10" : {
      "correctoption" : "option3",
      "options" : {
          "option1" : "Konsep Wawasan Nusantara dan Keamanan Nasional.",
          "option2" : "Ketentuan Pokok Hankam Negara RI. Diubah oleh Undang-Undang Nomor 1 Tahun 1988.",
          "option3" : "Pemisahan TNI dengan POLRI.",
          "option4" : "Tentang Pertahanan Negara.",
          "option5" : "Pokok-Pokok Perlawanan Rakyat."
        },
      "question" : "10. Undang-Undang No.20 tahun 1982 merupakan salah satu dasar hukum bela negara mengenai ..."
    }
  }
}
}

export default class Quiz extends Component {
constructor(props){
    super(props);
    this.qno = 0
    this.score = 0
    
 
    const jdata = jsonData.quiz.quiz1
    arrnew = Object.keys(jdata).map( function(k) { return jdata[k] });
    this.state = {
      question : arrnew[this.qno].question,
      options : arrnew[this.qno].options,
      correctoption : arrnew[this.qno].correctoption,
      countCheck : 0
    }
 
  }  
  prev(){
    if(this.qno > 0){
      this.qno--
      this.setState({ question: arrnew[this.qno].question, options: arrnew[this.qno].options, correctoption : arrnew[this.qno].correctoption})
    }
  }
  next(){
    if(this.qno < arrnew.length-1){
      this.qno++
 
      this.setState({ countCheck: 0, question: arrnew[this.qno].question, options: arrnew[this.qno].options, correctoption : arrnew[this.qno].correctoption})
    } else {      

      this.props.quizFinish(this.score*100/10)
     }
  }
  _answer(status,ans){ 

    if(status == true){
        const count = this.state.countCheck + 1
        this.setState({ countCheck: count })
        if(ans == this.state.correctoption ){
          this.score += 1
        }
      }else{
        const count = this.state.countCheck - 1
        this.setState({ countCheck: count })
        if(this.state.countCheck < 1 || ans == this.state.correctoption){
        this.score -= 1
       }
      }
  }

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
  render() {
    let _this = this
    const currentOptions = this.state.options
    const options = Object.keys(currentOptions).map( function(k) {
      return (  
      	<View key={k} style={{margin:10}}>
        <Animbutton countCheck={_this.state.countCheck} onColor={'#7850EA'}  _onPress={(status) => _this._answer(status,k)} text={currentOptions[k]} />
      	</View> 
      )
    });
    return (
      <ScrollView style={{backgroundColor: '#ffffff'}}>
	      <View style={styles.container}> 
	      <View style={{ flex: 1,flexDirection: 'column', justifyContent: "space-between", alignItems: 'center',}}>
	      <View style={styles.qsoal}>
	        <Text style={styles.soal}>
	          {this.state.question}
	        </Text>
	      <View style={styles.jwb}>
	        { options }
	      </View>
	     <View style={styles.buttongrp}>
	      <TouchableOpacity onPress={() => this.prev()}>
	          <View style={styles.prv}>
	            <Text style={styles.tx}>Sebelumnya</Text>
	          </View>
	      </TouchableOpacity>

	      <TouchableOpacity onPress={() => this.next()} style={styles.button}>
	          <View style={styles.nxt}>
	            <Text style={styles.txn}>Selanjutnya</Text>
	          </View>
	      </TouchableOpacity>
	 
	        </View>
	        </View>
	      </View>
	      </View>
      </ScrollView>
    );
  }
}
 
const styles = StyleSheet.create({
 
  oval: {
	  width: width * 90/100,
	  borderRadius: 20,
	  backgroundColor: 'green'
	  },
  container: {
    flex: 1,
    alignItems: 'center'
  },
  qsoal:{
  	marginHorizontal: 5
  },
  soal: {
    fontSize: 20,
    margin: 18,
    color: "#000000",
    fontFamily: 'NunitoSans-SemiBold',
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  jwb:{
     marginHorizontal: 8,
   },
  jawaban:{
  	borderRadius: 10,

    width: 324, 
    backgroundColor:'#7850EA',
  },
  nxt:{
  	width: 156,
  	height: 48,
  	paddingTop: 5,
  	paddingBottom: 5, 
  	paddingRight: 20, 
  	paddingLeft: 20, 
  	borderRadius:10, 
  	backgroundColor:"#7850EA",
  },
  prv:{
  	width: 156,
  	height: 48,
  	paddingTop: 5,
  	paddingBottom: 5, 
  	paddingRight: 20, 
  	paddingLeft: 20, 
  	borderRadius:10, 
  	backgroundColor:"#DADADA",
  },
  tx:{
  	textAlign: 'center',
  	paddingTop: 7,
  	paddingBottom: 7, 
  	color: '#7d7d7d',
    fontFamily: 'NunitoSans-SemiBold',
  },
  txn:{
  	textAlign: 'center',
  	paddingTop: 7,
  	paddingBottom: 7, 
  	color: '#ffffff',
    fontFamily: 'NunitoSans-SemiBold',
  },
  buttongrp:{
  	flexDirection:"row", 
  	justifyContent: 'center',
  	marginTop: 24,
  	marginBottom: 20, 
  },
  button:{
  	marginLeft: 7
  }
});

