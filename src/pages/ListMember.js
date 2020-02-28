import React from 'react';
import {  SafeAreaView,  StyleSheet,  ScrollView,  View,  Text,  StatusBar,  TouchableOpacity, Button } from 'react-native';
import { Container, Header, body, Title, Card, CardItem, Left, Content, Thumbnail, Subtitle} from 'native-base';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

export default class ListMember extends React.Component {
  render() {
    return (
        <View style={styles.container}>
        	<Card style={styles.cv}  >
        		<CardItem button onPress = {this.props.link} 
                style={styles.cav}>
        			<Left>
        				<Thumbnail
        				source={this.props.img}
                        style={styles.gambar}/>
        				<View>
    	    				<Text style={styles.judul}>{this.props.judul}</Text>
    	    				<Text style={styles.caption}>{this.props.subtitle} </Text>
        				</View>
        			</Left>
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
        
    },

    cv: { 
        marginBottom: 12,
        width: 324,
        height: 80, 
        elevation: 0,
        borderRadius: 10,
        shadowRadius: 10,
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
        paddingTop: 48,
        alignItems: 'center',
        height: 55, width: 55,
        borderRadius: 10,
    },

    judul:{

        marginHorizontal: 18,
        fontSize: 16,
        color: '#3a3a3a',
        fontFamily: 'NunitoSans-Bold',
    },
    caption:{
        marginLeft: 18,
        marginRight: 80,
        fontSize: 14,
        marginTop: 4,
        color: '#7d7d7d',
        fontFamily: 'NunitoSans-Regular',
    }
})
