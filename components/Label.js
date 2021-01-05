import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class Label extends Component {

	render() {
        const { title } = this.props;

		return ( 
			<View style={styles.labelContainer}>
                <Text style={styles.title}> {title} :</Text>
                <View style={styles.requiredContainer}><View style={styles.inner}><Text style={styles.requiredText}> Required </Text></View></View>
            </View> 
		);
	}
}

const styles = StyleSheet.create({
    labelContainer: {
        flexDirection: 'row',
    },
    title: {
        marginLeft: 15,
        fontSize: 16, 
        fontFamily: 'MPLUSRounded1c-regular',
    },
	requiredContainer: {
        marginLeft: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    inner:{
        backgroundColor: '#c00',
        borderWidth: 2,
        padding: 2,
        borderColor: '#c00',
        borderRadius: 6,
    },
    requiredText: {
        color: 'white',
        fontSize: 9,
        fontFamily: 'MPLUSRounded1c-bold',
    },
});