import React, { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { StyleSheet, StatusBar, SafeAreaView, View, Text } from 'react-native';
import LabelCampoo from "../../components/LabelCampoo";
import InputModifProfil from '../../components/input/InputModifProfil';
import ArrowLSvg from "../../components/ArrowLSvg";
import ButtonCampoo from '../../components/button/ButtonCampoo';

export default function ChangeName(props) {
    const [name, setName] = useState('');

    const [errorMessage, setErrorMessage] = useState('');

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



    // fonction qui fait une requete  en post et qui renvoie une reponse d'erreur  au onPress
    const onSubmit = async () => {

        const token = await _retrieveData();
        // console.log(token);



        fetch("https://campoo.fr/api/account/name", {
            method: 'PATCH',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                "Authorization": `Bearer ${token}`

            },
            body: JSON.stringify({

                'name': name

            })
        })
            // response.json()
            .then((response) => response.json())
            .then((Message) => {

                console.log(Message);
                if (Message.Status === 'Success') {


                    props.navigation.navigate('SettingPage');



                } else {

                    setErrorMessage(Message.Message.name[0]);

                }
            })
            .catch((error) => {
                // console.error(error);
            });


    }



    return (
        // contenu generale

        <SafeAreaView style={styles.container}>
            {/* La navigation du haut */}
            <View style={styles.topNav}>

                {/*Le onPress a mettre  */}
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <ArrowLSvg />
                </TouchableOpacity>
                <View style={styles.namePage}>
                    <Text style={styles.secondTitle}>Réglage</Text>
                </View>

            </View>

            {/* <TopNav>Réglage</TopNav> */}

            {/* Contenu */}
            <View style={styles.modificationContent}>
                {/* Le label Prénom */}
                <LabelCampoo style={styles.nameLabel}>Prénom</LabelCampoo>

                <InputModifProfil placeholder='Edudd77' type='name' onChangeText={(text) => setName(text)} value={props.name} errorText={errorMessage} />



                <View style={styles.btnContainer} >
                    <ButtonCampoo onPress={onSubmit}> Valider </ButtonCampoo>
                </View>


            </View>

        </SafeAreaView>




    );

};


const styles = StyleSheet.create({

    container: {


        flex: 1,
        paddingTop: Platform.OS === "ios" ? StatusBar.currentHeight : 40,



        position: 'relative',
        flexDirection: 'column',
        backgroundColor: '#fff',

        //  alignItems: 'center',
    },
    nameLabel: {
        marginBottom: 10,
    },
    modificationContent: {
        marginTop: 25,
        paddingHorizontal: '5%',
    },
    btnContainer: {
        flex: 0,
        width: '100%',
        marginTop: 25,
        justifyContent: 'center',
        alignItems: 'center',

    }, namePage: {
        flex: 0,
        justifyContent: 'center',
        width: '100%',
        flexDirection: 'row',

    },
    secondTitle: {

        fontSize: 20,

        fontWeight: 'bold',
        color: '#4D3D64',

    },
    topNav: {
        flex: 0,

        width: '100%',
        height: 40,
        marginTop: '5%',

        paddingHorizontal: '6%',
        justifyContent: 'center',
        flexDirection: 'row',
        borderBottomWidth: 2,
        borderColor: 'rgba(158, 150, 150, .3)',

    },


});
