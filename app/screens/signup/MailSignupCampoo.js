import React, { useState, useEffect } from 'react';
import { StyleSheet, Image, StatusBar, SafeAreaView, View, Platform, Text, Alert } from 'react-native';
import InputCampooSignup from "../../components/input/InputCampooSignup"
import ButtonCampoo from "../../components/button/ButtonCampoo";
import LabelCampoo from '../../components/LabelCampoo';
import SecondaryButtonCampoo from '../../components/button/SecondaryButtonCampoo';
import LogoCampoo from '../../../assets/svg/LogoCampoo'

const apiCampoo = "https://campoo.fr/api/account";





export default function MailSignupCampoo(props, { navigation }) {

    const [data, setData] = useState('');
    console.log();



    // async function insertNewFoodToServer(params) {
    //     try {
    //         let response = await fetch(apiCampoo, {
    //             method: 'POST',
    //             headers: {
    //                 'Accept': 'application/json',
    //                 'Content-Type': 'application/x-www-form-urlencoded',
    //             },
    //             body: JSON.stringify(params)
    //         });
    //         let responseJson = await response.json();
    //         return responseJson.email;
    //     } catch (error) {
    //         console.error(`error : ${error}`);
    //     }
    // }


    const submit = () => {



        fetch("https://campoo.fr/api/account ", {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({


                'email': data


            })
        })
            .then((response) => response.text())
            .then((Message) => {
                alert(Message);
            })
            .catch((error) => {
                console.error(error);
            });

    };












    return (

        <SafeAreaView style={styles.container}>

            <LogoCampoo style={{ right: '5%', top: 49, marginTop: 16, position: 'absolute', }} />
            <Image style={styles.baloo} source={require("../../../assets/images/Blob-Baloo-Etudiant.png")} />

            <View style={styles.mailView}>
                <LabelCampoo style={styles.mailLabel}>Email étudiant</LabelCampoo>

                <Text style={styles.textMail}>Pour que Baloo vérifie que tu es bien un étudiant du campus !</Text>

                <InputCampooSignup type='email' style={styles.InputView} keyboardType='email-address' onChangeText={(data) => setData(data)} value={props.data} />

                <ButtonCampoo style={styles.button}



                    onPress={
                        submit


                        // () => {


                        // let params = {
                        //     email: props.data
                        // }



                        // insertNewFoodToServer(params)

                        //     .then((data) => {
                        //         if (data === 'Haut les pattes imposteur ! Baloo a détecté que tu utilises une adresse mail déjà enregistrée.') {
                        //             alert(data);
                        //         } else {
                        //             console.log('error4')
                        //         }
                        //     });



                        // }
                    }


                >Suivant</ButtonCampoo>

                <SecondaryButtonCampoo style={styles.retour} onPress={() => navigation.goBack()} >retour</SecondaryButtonCampoo>

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