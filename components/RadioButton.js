import React, { Component } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, TouchableWithoutFeedback, Vibration } from 'react-native';

export default class RadioButton extends Component {
	state = {
        value: '',
	};

	handleOnPress(vibration, value, handleRadioChange) {
        if(vibration) {
            //Vibration.vibrate(300);
        }
        this.setState({
			value: value,
		});
		handleRadioChange(value);
		
    }

	render() {
        const { value } = this.state;
        const { radioOptions, handleRadioChange, vibration } = this.props;

		return ( 
			<View style={styles.groupContainer} accessibilityRole='radiogroup'>
				{ radioOptions.map(res => {
					return (
                        <TouchableWithoutFeedback key={res.key} onPress={() => this.handleOnPress(vibration, res.key, handleRadioChange)}>
						<View accessibilityRole='radio' style={styles.container}>
							<Text style={styles.radioText}>{res.text}</Text>
							<View style={styles.radioCircle}>
                                {value === res.key && <View style={styles.selectedRb} />}
							</View>
						</View>
                        </TouchableWithoutFeedback>
					);
				})}
			</View> 
		);
	}
}

const styles = StyleSheet.create({
    groupContainer: {
		flexDirection: 'row',
		marginLeft: 15,
		marginTop: 15,
	},
	container: {
        alignItems: 'center',
        flexDirection: 'row',
        paddingRight: 70,
	},
    radioText: {
		fontSize: 15,
        marginRight: 25,
        color: '#000',
    },
	radioCircle: {
		height: 22,
		width: 22,
		borderRadius: 100,
		borderWidth: 1,
		borderColor: '#0c9',
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: 'white',
	},
	selectedRb: {
		width: 14,
		height: 14,
		borderRadius: 50,
		backgroundColor: '#0c9',
    },
    result: {
        marginTop: 20,
        color: 'white',
        fontWeight: '600',
        backgroundColor: '#0c9',
    },
});