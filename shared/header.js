import React from 'react'
import { Image, View, Text } from 'react-native';
import { globalStyles } from '../styles/global';

export default function Header() {
    return (
        <View style={globalStyles.header}>
            <Image
                source={require('../assets/icon.png')}
                style={globalStyles.headerImage}
            /> 
            <View style={globalStyles.headerTitle}>
                <Text style={globalStyles.headerText}>Edo Tokyo Hostel</Text>
            </View>
        </View>
    );
}

