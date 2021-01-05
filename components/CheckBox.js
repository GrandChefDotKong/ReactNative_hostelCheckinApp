import React, { Component } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, TouchableWithoutFeedback, Vibration } from 'react-native';

export default class checkBox extends Component {
	state = {
		checked: false,
	};

	handleOnPress(vibration, handleBoxChange) {
        if(vibration) {
            //Vibration.vibrate(300);
        }
        this.state.checked ? this.setState({checked: false}): this.setState({checked: true});
		handleBoxChange(!this.state.checked);
		
    }

	render() {
        const { checked } = this.state;
        const { checkBoxText, handleBoxChange, vibration } = this.props;

		return ( 
            <TouchableWithoutFeedback onPress={() => this.handleOnPress(vibration, handleBoxChange)}>
				<View accessibilityRole='checkbox' style={styles.container}>
					<Text style={styles.checkBoxText}>{checkBoxText}</Text>
					<View style={styles.checkBoxSquare}>
                        {checked && <View style={styles.selectedRb} />}
					</View>
				</View>
            </TouchableWithoutFeedback>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		alignSelf: 'center',
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		marginHorizontal: 70,
		marginTop: 15,
		alignSelf: 'center',
	},
    checkBoxText: {
		color: '#000',
		fontSize: 15,
		marginVertical: 10,
		marginHorizontal: 20,
		alignSelf: 'stretch',
	},
	checkBoxSquare: {
		height: 22,
		width: 22,
		borderRadius: 0,
		borderWidth: 1,
		borderColor: '#0c9',
		alignItems: 'center',
		justifyContent :'center',
		backgroundColor: 'white',
		alignSelf: 'center',
		marginHorizontal: 20,
	},
	selectedRb: {
		width: 14,
		height: 14,
		borderRadius: 0,
		backgroundColor: '#0c9',
    },
});