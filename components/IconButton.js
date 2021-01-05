import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableHighlight, Vibration } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 

export default class IconButton extends Component {

    handleOnPress(vibration, onPress) {
        if(vibration) {
            //Vibration.vibrate(300);
        }
        
        onPress();
    }

	render() {
        const { title, width, onPress, vibration  } = this.props;
        const styles = StyleSheet.create({
            container: {
                alignItems: 'center',
                marginTop: 15,
            },
            opacity: {
                height: 55,
                width: width,
                backgroundColor: "#fffeec",
                borderWidth: 1,
                borderColor: "#0c9",
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
                fontSize: 22, 
                color: "#0c9",
                fontFamily: 'MPLUSRounded1c-bold'
            },
        });

		return ( 
			<View style={styles.container} accessibilityRole='button'>
				<TouchableHighlight onPress={() => this.handleOnPress(vibration, onPress)} style={ styles.opacity } underlayColor="#00b386">
                    <View style={{flexDirection: 'row'}}>
                        <AntDesign name="calendar" size={35} color="#0c9" />
                        <Text style={styles.text}> { title } </Text>
                    </View>
                </TouchableHighlight>
			</View> 
		);
	}
}
