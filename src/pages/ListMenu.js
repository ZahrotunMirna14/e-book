import React from 'react';
import {  SafeAreaView,  StyleSheet,  ScrollView,  View,  Text,  StatusBar,  TouchableOpacity, Button } from 'react-native';
import { Container, Header, body, Title, Card, CardItem, Left, Right, Content, Thumbnail, Subtitle} from 'native-base';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

export default class ListMenu extends React.Component {
  render() {
    return (
        <View style={styles.container}>
        	<Card style={styles.cv}  >
        		<CardItem button onPress = {this.props.navigation} 
                style={styles.cav}>
        			<Left>
        				<View>
    	    				<Text style={styles.judul}>{this.props.judul}</Text>
        				</View>
        			</Left>
        			<Right>
	        			<Thumbnail
	        				source={this.props.img}
	                        style={styles.gambar}/>
                    </Right>
        		</CardItem>
        	</Card>
        </View>
    )
  }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ECEFF3',
    },

    cv: { 
        width: 324,
        height: 116, 
        elevation: 0,
        borderRadius: 10,
        shadowRadius: 10,
        marginTop: 20
    },

    cav:{
        elevation: 0,
        borderRadius: 10,
        shadowRadius: 10,
        shadowOpacity: 0,
        shadowColor: 'transparent',
        position: 'absolute'
    },

    gambar: {
    	width: 100,
    	height: 90,
    	borderRadius: 5,
    	right: -17,
    	bottom: -13,
    },

    judul:{
        fontSize: 18,
        color: '#3a3a3a',
        bottom: 10,
        fontFamily: 'NunitoSans-Bold',
        marginRight: 0,
    },
    caption:{
        marginLeft: 18,
        marginRight: 80,
        fontSize: 14,
        marginTop: 4,
        color: '#7d7d7d'
    }
})