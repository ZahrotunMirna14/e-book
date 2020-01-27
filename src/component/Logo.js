import React, { Component } from 'react';
import {
 StyleSheet,
 Text,
 View,
 Image
} from 'react-native';

export default class Logo extends Component<{}> {
 render(){
  return(
	<View style={styles.container}>
	 <Image style={styles.img}
	 source={require('../images/iconb.png')}/>

	</View>
	)
  }
}



const styles = StyleSheet.create({
	container : {
		marginTop: 48,
		alignItems:'center',
	},
	img :{

		width: 82,
		height: 82,

	}

});