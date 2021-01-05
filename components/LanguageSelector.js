import React, { Component } from 'react';
import { View, TouchableOpacity, Image, StyleSheet, TouchableWithoutFeedback, Vibration } from 'react-native';
import { language } from '../language/language';

export default class LanguageSelector extends Component {
	state = {
        value: 'japanese',
	};

	handleOnPress(vibration, value, handleLanguageChange) {
        if(vibration) {
            //Vibration.vibrate(300);
        }
        this.setState({
			value: value,
        });
		handleLanguageChange(value);
    }

	render() {
        const { value } = this.state;
        const { handleLanguageChange, vibration } = this.props;

		return ( 
        <View>
			<View style={styles.groupContainer} >
                <TouchableWithoutFeedback onPress={() => this.handleOnPress(vibration, 'japanese', handleLanguageChange)}>
					<Image style={value==='japanese'?styles.imageSelected:styles.image} source={require('../assets/flag/japan-flag.png')} />
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={() => this.handleOnPress(vibration, 'english', handleLanguageChange)}>
					<Image style={value==='english'?styles.imageSelected:styles.image} source={require('../assets/flag/united-kingdom-flag.png')} />
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={() => this.handleOnPress(vibration, 'french', handleLanguageChange)}>
					<Image style={value==='french'?styles.imageSelected:styles.image} source={require('../assets/flag/france-flag.png')} />
                </TouchableWithoutFeedback>
            </View>
            <View style={styles.groupContainer} >
                <TouchableWithoutFeedback onPress={() => this.handleOnPress(vibration, 'spanish', handleLanguageChange)}>
                    <Image style={value==='spanish'?styles.imageSelected:styles.image} source={require('../assets/flag/spain-flag.png')} />
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={() => this.handleOnPress(vibration, 'german', handleLanguageChange)}>
                    <Image style={value==='german'?styles.imageSelected:styles.image} source={require('../assets/flag/germany-flag.png')} />
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={() => this.handleOnPress(vibration, 'chinese', handleLanguageChange)}>
                    <Image style={value==='chinese'?styles.imageSelected:styles.image} source={require('../assets/flag/china-flag.png')} />
                </TouchableWithoutFeedback>
            </View>
        </View>
		);
	}
}

const styles = StyleSheet.create({
    groupContainer: {
        flexDirection: 'row',
        alignContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
    },
    image: {
        height: 60,
        width: 95,
        margin: 5,
        borderWidth: 1,
        borderColor: 'grey',
    },
    imageSelected: {
        height: 70,
        width: 105,
        margin: 5,
        borderWidth: 3,
        borderColor: '#0c9',
    },
});