import React from 'react';
import {  SafeAreaView,  StyleSheet,  ScrollView,  View,  Text,  StatusBar, TouchableOpacity} from 'react-native';
import { Container, Header, body, Title, Card, CardItem, Left, Right, Content, Thumbnail, Subtitle, Button} from 'native-base';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

export default class ListMenu extends React.Component {
  render() {
    return (
        <View style={styles.container}>
        	<Card style={styles.cv}  >
        		<CardItem style={styles.cav}>
        			<Left>
        				<View style={styles.cnt}>
    	    				<Text style={styles.judul}>{this.props.judul}</Text>
                             <TouchableOpacity onPress = {this.props.navigation} style={styles.btn}>  
                                <Text style={styles.caption}>Masuk</Text>
                             </TouchableOpacity>
        				</View>
        			</Left>
        			<Right>
	        			<Thumbnail
	        				source={this.props.img}
	                        style={styles.gambar} />
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
        marginTop: 20,
    },

    cav:{
        elevation: 0,
        borderRadius: 10,
        shadowRadius: 10,
        shadowOpacity: 0,
        shadowColor: 'transparent',
        position: 'absolute'
    },

    cnt:{
        marginTop: 10,
        marginBottom: 10
    },

    gambar: {
    	width: '100%',
    	height: '110%',
        marginTop: 15,
        marginRight: -17,
        borderRadius: 10,
    },

    judul:{
        fontSize: 18,
        color: '#3a3a3a',
        marginTop: -3,
        marginBottom: 3,
        fontFamily: 'NunitoSans-Bold',
        marginRight: -50,
    },
    caption:{
        marginLeft: 28,
        fontFamily: 'NunitoSans-Bold',
        fontSize: 14,
        color: '#ffffff'
    },
    btn:{
        marginTop: 13,
        paddingVertical: 5,
        borderRadius: 10,
        width: 100,
        height: 33,
        backgroundColor:'#7850EA',
        fontSize: 10
    }
})