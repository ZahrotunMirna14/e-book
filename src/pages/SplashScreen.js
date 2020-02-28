import React from 'react';
import { View, Text, Image } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

class SplashScreen extends React.Component {
  render() {
    return (
      <View style={styles.viewStyles}>
        <View style={styles.body}>
          <Image style={{width: 300, height: 300,}} resizeMode="contain"
            source={require('../images/img.png')}/>
        </View>
        <View style={{height:'8%',  alignItems: 'center'}}>
          <Text style={styles.textStyles}>
            Powered by SMK Telkom Purwokerto
          </Text>
        </View>
      </View>
    );
  }
}

const styles = {
  viewStyles: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    height: '100%'
  },
  textStyles: {
    color: '#3A3A3A',
    fontSize: 14,
    fontFamily: 'NunitoSans-Regular',
  },
  body: {
    height:'92%', 
    alignItems: 'center',
    justifyContent: 'center',
  }
}

export default SplashScreen;