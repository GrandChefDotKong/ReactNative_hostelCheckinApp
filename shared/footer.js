import React from 'react'
import { View, Text } from 'react-native';
import { globalStyles } from '../styles/global';

export default function Footer() {
    return (
        <View style={globalStyles.footer}>
            <Text style={globalStyles.footerText}>© 2015 Edo Tokyo HOSTEL</Text>
        </View>
    );
}