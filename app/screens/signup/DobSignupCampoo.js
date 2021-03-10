import React, { useState } from 'react';
import { StyleSheet, Image, StatusBar, SafeAreaView, View, Platform, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import ButtonCampoo from "../../components/button/ButtonCampoo";
import LabelCampoo from '../../components/LabelCampoo';
import SecondaryButtonCampoo from '../../components/button/SecondaryButtonCampoo';
import LogoCampoo from '../../../assets/svg/LogoCampoo'
import PickerDate from '../../components/PickerDate';


export default function DobSignupCampoo(props) {
    const [birthday, setBirthday] = useState('');

    const [errorMessage, setErrorMessage] = useState('');
    console.log(birthday);

    const _retrieveData = async () => {
        try {
            const value = await AsyncStorage.getItem('token');
            if (value !== null) {
                // We have data!!
                return value;
            }
        } catch (error) {

            // Error retrieving data
        }
    };


    const onSubmit = async () => {

        const token = await _retrieveData();
        // console.log(token);



        fetch("https://campoo.fr/api/account/birthday", {
            method: 'PATCH',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                "Authorization": `Bearer ${token}`

            },
            body: JSON.stringify({

                'birthday': birthday

            })
        })
            // response.json()
            .then((response) => response.json())
            .then((Message) => {

                console.log(Message);
                if (Message.Status === 'Success') {

                    props.navigation.navigate('MdpSignupCampoo');

                } else {

                    setErrorMessage(Message.Message.birthday[0]);

                }
            })
            .catch((error) => {
                // console.error(error);
            });


    }



    //! Mettre un picker



    return (

        <SafeAreaView style={styles.container}>

            {/* () => navigation.navigate('BatSignupCampoo') */}

            <LogoCampoo style={{ right: '5%', top: 49, marginTop: 16, position: 'absolute', }} />
            <Image style={styles.baloo} source={require("../../../assets/images/blob-baloo-fête.png")} />

            <View style={styles.dobView}>
                <LabelCampoo style={styles.dobLabel}>Date de Naissance</LabelCampoo>
                <Text style={styles.textDob}>Quand est-ce que Baloo doit te célébrer ?</Text>

                <PickerDate
                    date={props.date}
                    style={styles.InputView}
                    errorText={errorMessage}
                    value={props.birthday}
                    onDateChange={(birthday) => { setBirthday(birthday) }}

                />

                <ButtonCampoo style={styles.button} onPress={onSubmit}>Suivant</ButtonCampoo>
                <SecondaryButtonCampoo style={styles.retour} onPress={() => props.navigation.goBack()}>retour</SecondaryButtonCampoo>

            </View>

        </SafeAreaView>

    );



}


const styles = StyleSheet.create({

    container: {

        flex: 1,

        // test pour detecter la platform
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        flexDirection: 'column',
        backgroundColor: '#ffffff',


    },

    logoCampoo: {
        position: 'absolute',
        width: 115,
        height: 115,
        marginTop: 20,
        left: 260


    },

    InputView: {

        alignSelf: 'center',

    },

    dobLabel: {
        marginBottom: 9,

    },



    dobView: {

        top: 138,
        height: 290,
        width: 300,
        alignSelf: 'center',


    },

    button: {
        marginTop: 57,
        alignSelf: 'center',

    },

    baloo: {
        position: "absolute",
        width: 559,
        height: 438,
        left: 50,
        top: 440,
    },

    textDob: {

        fontSize: 11,
        textAlign: 'left',
        color: '#9B84D2',

    },

    retour: {

        alignSelf: 'center',
        marginTop: 10,

    },






})