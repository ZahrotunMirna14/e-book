import React from 'react';
import {  SafeAreaView,  StyleSheet,  ScrollView,  View,  Text,  StatusBar,  TouchableOpacity } from 'react-native';
import { Container, Header, body, Title, Card, CardItem, Left, Content, Thumbnail, Subtitle} from 'native-base';

export default class ListContent extends React.Component {
  render() {
    return (
        <View style={styles.container}>
    	<Card style={styles.cv}  >
    		<CardItem button>
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
        alignItems: 'center'
    },
    cv: { 
        height: 100, width: 323,
    },
    gambar: {
        paddingTop: 48,
        alignItems: 'center',
        height: 80, width: 80,
        borderRadius: 10,
    },
    judul:{
        marginHorizontal: 18
    },
    caption:{
        marginLeft: 18,
        marginRight: 80
    }
})
