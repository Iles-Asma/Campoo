import React, { useState } from 'react';
import { StyleSheet, Image, StatusBar, SafeAreaView, View, Platform, Text, } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import InputCampooSignup from "../../components/input/InputCampooSignup"
import ButtonCampoo from "../../components/button/ButtonCampoo";
import LabelCampoo from '../../components/LabelCampoo';
import SecondaryButtonCampoo from '../../components/button/SecondaryButtonCampoo';
import LogoCampoo from '../../../assets/svg/LogoCampoo'


export default function MailSignupCampoo(props) {

    const [email, setEmail] = useState('');
    const [errorMessage, setErrorMessage] = useState('');


    // fonction qui fait une requete  en post et qui renvoie une reponse d'erreur  au onPress
    const tokenStore = async (Message) => {

        try {
            await AsyncStorage.setItem('token', Message.Data.token.original.access_token);
        } catch (error) {
            console.log('AsyncStorage error: ' + error.message);
        }



    }


    const onSubmit = () => {


        fetch("https://campoo.fr/api/account", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',


            },
            body: JSON.stringify({

                'email': email

            })
        })
            .then((response) => response.json())
            .then((Message) => {
                if (Message.Status === 'Success') {

                    tokenStore(Message);

                    props.navigation.navigate('NameSignupCampoo');

                } else {

                    setErrorMessage(Message.Message.email[0]);

                }
            })
            .catch((error) => {
                console.error(error);
            });


    }



    return (

        <SafeAreaView style={styles.container}>

            <LogoCampoo style={{ right: '5%', top: 49, marginTop: 16, position: 'absolute', }} />
            <Image style={styles.baloo} source={require("../../../assets/images/Blob-Baloo-Etudiant.png")} />

            <View style={styles.mailView}>
                <LabelCampoo style={styles.mailLabel}>Email étudiant</LabelCampoo>

                <Text style={styles.textMail}>Pour que Baloo vérifie que tu es bien un étudiant du campus !</Text>

                <InputCampooSignup type='email' style={styles.InputView} keyboardType='email-address' onChangeText={(text) => setEmail(text)} value={props.email} errorText={errorMessage} />


                <ButtonCampoo style={styles.button} onPress={onSubmit} >Suivant</ButtonCampoo>

                <SecondaryButtonCampoo style={styles.retour} onPress={() => props.navigation.goBack()} >retour</SecondaryButtonCampoo>

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

    mailLabel: {
        marginBottom: 9,

    },



    mailView: {

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

    textMail: {

        fontSize: 11,
        textAlign: 'left',
        color: '#9B84D2',

    },

    retour: {

        alignSelf: 'center',
        marginTop: 10,

    },

})