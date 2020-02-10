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
        "option3" : "Belajar dengan giat supaya mendapatan prestasi baikBelajar dengan giat supaya mendapatan prestasi baik",
        "option4" : "Menciptakan suasana rukun, damai, dan harmonis dalam keluarga.",
        "option5" : "Mengamalkan nilai-nilai yang terkandung dalam Pancasila sebagai ideologi dan dasar negara"
      },
      "question" : "Yang merupakan contoh sikap penerapan dilingkungan sekolah adalah … "
    },
    "question2" : {
      "correctoption" : "option4",
      "options" : {
          "option1" : "Bela Negara",
          "option2" : "Upaya negara",
          "option3" : "Pembangunan negara",
          "option4" : "Upaya bela negara",
          "option5" : "Hubungan internasional"
        },
      "question" : "Sikap dan perilaku warga negara yang dijiwai oleh kecintaannya kepada NKRI yang berdasarkan Pancasila dan UUD 1945 dalam menjalin kelangsungan hidup bangsa dan negara yang seutuhnya merupakan pengertian dari …"
    },
    "question3" : {
      "correctoption" : "option1",
      "options" : {
          "option1" : "Single root DOM node",
          "option2" : "Double root DOM node",
          "option3" : "Multiple root DOM node",
          "option4" : "None of the above"
        },
      "question" : "Application built with just React usually have ____"
    },
    "question4" : {
      "correctoption" : "option2",
      "options" : {
          "option1" : "mutable",
          "option2" : "immutable",
          "option3" : "variable",
          "option4" : "none of the above"
        },
      "question" : "React elements are ____"
    },
    "question5" : {
      "correctoption" : "option3",
      "options" : {
          "option1" : "functions",
          "option2" : "array",
          "option3" : "components",
          "option4" : "json data"
        },
      "question" : "React allows to split UI into independent and reusable pieses of ____"
    }
  }
}
}

export default class quiz extends Component {
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
    }else{      
      this.props.quizFinish(this.score*100/5)
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
      <ScrollView style={{backgroundColor: '#ffffff',paddingTop: 10}}>
	      <View style={styles.container}> 
	      <View style={{ flex: 1,flexDirection: 'column', justifyContent: "space-between", alignItems: 'center',}}>
	      <View>
	        <Text style={styles.soal}>
	          {this.state.question}
	        </Text>
	      </View>
	        <TouchableOpacity style={styles.jawaban}>
		        <Text style={styles.soal}> tes
		        </Text>
	        </TouchableOpacity>
	        <TouchableOpacity style={styles.jawaban}>
	        	<Text style={styles.soal}> tes
		        </Text>
	        </TouchableOpacity>
	        <TouchableOpacity style={styles.jawaban}>
	        	<Text style={styles.soal}> tes
		        </Text>
	        </TouchableOpacity>
	        <TouchableOpacity style={styles.jawaban}>
	        	<Text style={styles.soal}> tes
		        </Text>
	        </TouchableOpacity>
	        <TouchableOpacity style={styles.jawaban}>
	        	<Text style={styles.soal}> tes
		        </Text>
	        </TouchableOpacity>

	     <View style={{flexDirection:"row"}}>
	      <TouchableOpacity 
	        onPress={() => this.prev()} >
	          <View style={{paddingTop: 5,paddingBottom: 5, paddingRight: 20, paddingLeft: 20, borderRadius:10, backgroundColor:"grey"}}>
	            <Text>Sebelumnya</Text>
	          </View>
	      </TouchableOpacity>
	        <View style={{margin:15}}/>
	 
	      <TouchableOpacity 
	        onPress={() => this.next()} >
	          <View style={{paddingTop: 5,paddingBottom: 5, paddingRight: 20, paddingLeft: 20, borderRadius:10, backgroundColor:"green"}}>
	            <Text>Selanjutnya</Text>
	          </View>
	      </TouchableOpacity>
	 
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
  soal: {
    fontSize: 20,
    margin: 15,
    color: "#000000"
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  jawaban:{
  	borderRadius: 10,
  	marginTop: 15,
    width: 324, 
    backgroundColor:'#7850EA',
  }
});