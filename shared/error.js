import React, { useState } from 'react'
import { View, Text, Modal } from 'react-native';
import { globalStyles } from '../styles/global';
import { Entypo, FontAwesome, AntDesign } from '@expo/vector-icons'; 
import Button from '../components/Button'

export default function Error(props) {

    const {type, visible, modalChangeVisible} = props

    return (
        <Modal
            animationType="slide"
            presentationStyle="pageSheet"
            transparent={false}
            visible={visible}
            >
            <View style={globalStyles.modalView}>
                <AntDesign style={{alignSelf: 'center'}} name="warning" size={100} color='#e50012' />
                <Text style={globalStyles.ruleTitle}>
                    !! {type} ERROR !!
                </Text>
                <Text style={globalStyles.modalErrorText}>
                    Please try again.{'\n\t'}If the problem persist, please contact the support.{'\n'}
                    もう一度やり直してください。{'\n\t'}問題が解決しない場合は、サポートに連絡くしてださい。
                </Text>
                <View style={{ alignSelf: 'center', width: 400, borderColor: "black", borderWidth: 1, }}>
                    <View style={{ marginTop: 20,backgroundColor: "#0c9", borderRadius:90, borderColor: "#0c9", borderWidth: 1, width: 100, height: 100, alignContent: 'center', justifyContent: 'center', alignSelf: 'center', alignItems: 'center' }}>
                    <Entypo name="mail" size={60} color="white" /></View>
                    <Text style={globalStyles.modalErrorText}>welcome@edo-tokyo-hostel.com</Text>
                </View>
                <View style={{ alignSelf: 'center', width: 400, borderColor: "black", borderWidth: 1, }}>
                    <View style={{ marginTop: 20, backgroundColor: "#0c9", borderRadius:90, borderColor: "#0c9", borderWidth: 1, width: 100, height: 100, alignContent: 'center', justifyContent: 'center', alignSelf: 'center', alignItems: 'center' }}>
                    <FontAwesome name="phone" size={60} color="white" /></View>
                    <Text style={globalStyles.modalErrorText}>070-6487-4374 (14:00-20:00){'\n\t'}※We will respond by email{'\n\t'}outside of the hours.</Text>
                </View>
                <Button
                    vibration={true}
                    width={650}
                    disabled={false}
                    onPress={()=> {modalChangeVisible(false)}}
                    title='OK'
                />
            </View>
        </Modal>
    );
}
