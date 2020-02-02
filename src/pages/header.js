import React, { Component } from 'react';
import {
	StyleSheet,
	Text,
	View,
	TextInput,
	TouchableOpacity, Image
}from 'react-native';

const Left = ({ onPress }) => (
  <TouchableHighlight onPress={onPress}>
    <Image
      source={require('../images/back.png')}
    />
  </TouchableHighlight>
  );

export default header;