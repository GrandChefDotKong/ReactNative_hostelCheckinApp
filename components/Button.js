import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableHighlight, Vibration } from 'react-native';

export default class Button extends Component {

    handleOnPress(vibration, onPress) {
        if(vibration) {
            //Vibration.vibrate(300);
        }
        
        onPress();
    }

	render() {
        const { title, width, onPress, vibration, disabled  } = this.props;
        const styles = StyleSheet.create({
            container: {
                alignItems: 'center',
                margin:20,
            },
            opacity: {
                height: 55,
                width: width,
                backgroundColor: "#0c9",
                alignItems:'center',
                justifyContent:'center',
                shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 3,
                },
                shadowOpacity: 0.29,
                shadowRadius: 4.65,
                elevation: 7,
            },
            text: {
                fontSize: 20, 
                color: 'white',
                fontFamily: 'MPLUSRounded1c-bold'
            },
            disabled: {
                height:55,
                width: width,
                backgroundColor: "#ccc",
                alignItems:'center',
                justifyContent:'center',
                shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 3,
                },
                shadowOpacity: 0.29,
                shadowRadius: 4.65,
                elevation: 7,
        
            },
            disabledText: {
                fontSize: 20, 
                color: 'grey',
                fontFamily: 'MPLUSRounded1c-bold'
            },
        });

		return ( 
			<View style={styles.container} accessibilityRole='button'>
				{!disabled && <TouchableHighlight onPress={() => this.handleOnPress(vibration, onPress)} style={ styles.opacity } underlayColor="#00b386">
                    <Text style={styles.text}> { title } </Text>
                </TouchableHighlight>}
                {disabled && <TouchableHighlight style={ styles.disabled } underlayColor="#ccc">
                    <Text style={styles.disabledText}> { title } </Text>
                </TouchableHighlight>}
			</View> 
		);
	}
}

