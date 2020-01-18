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
	 <Image source={require('../images/icon.png')}/>

	</View>
	)
  }
}



const styles = StyleSheet.create({
	container : {
		marginVertical: 100,
		alignItems:'center',
	},

});