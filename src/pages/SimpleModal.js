import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, TouchableHighlight, Dimensions, Image } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

export default class SimpleModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            width: Dimensions.get('window').width,
        };
        Dimensions.addEventListener('change', (e) => {
            this.setState(e.window);
        });
    }

    closeModal = (bool, data) => {
        this.props.changeModalVisibility(bool)
        
    }
    _onPressButton() {
    alert('You tapped the button!')
  }
    render() {
        return (
            <TouchableOpacity disabled={true} style={styles.contentContainer}>
                <View style={[styles.modal, {width: this.state.width - 42}]}>
                    <View style={styles.img}>
                        <Image style={{width: 147, height: 147, marginVertical: '8%'}} source={require('../images/ImageDialog.png')}/>
                    </View>
                    <View style={styles.textView}>
                        <Text style={[styles.text, {fontSize: 16, color: '#7850EA'}]}>Latihan soal !</Text>
                        <Text style={styles.text}>Kerjakan dengan sebaik mungkin untuk mengetahui pemahaman anda dalam belajar Bela Negara</Text>
                    </View>
                    <View style={styles.buttonsView}>
                        <TouchableHighlight onPress={() => this.closeModal(false, 'Cancel')} style={styles.touchableHighlight} underlayColor={'#f1f1f1'} >
                            <Text style={[styles.text, {color: 'blue'}]}>
                                Cancel
                            </Text>
                        </TouchableHighlight>
                        <TouchableHighlight onPress={this._onPressButton} style={styles.touchableHighlight} underlayColor={'#f1f1f1'} >
                            <Text style={[styles.text, {color: 'blue'}]}>
                                Ok
                            </Text>
                        </TouchableHighlight>
                    </View>
                </View>
            </TouchableOpacity>
            
        )
    }
};

const styles = StyleSheet.create({
    contentContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    modal: {
        width:324,
        height: 430,
        paddingTop: 10,
        alignSelf: 'center',
        alignItems: 'center',
        textAlign: 'center',
        backgroundColor: "#7d7d7d",
        borderRadius: 10,
    },
    img: {
    },
    text: { 
        marginVertical: 5,
        marginHorizontal: 18,
        fontSize: 14,
        fontFamily: 'NunitoSans-Bold',
        textAlign: 'center',
    },
    touchableHighlight: {
        flex: 1,
        backgroundColor: 'white', 
        paddingVertical: 10,
        alignSelf: 'stretch',
        alignItems: 'center',
        borderRadius: 10,
    },
    textView: {
        flex: 1,
        height: '25%',
        alignItems: 'center',
    },
    buttonsView: {
        width: '100%',
        flexDirection: 'row',
    }
})