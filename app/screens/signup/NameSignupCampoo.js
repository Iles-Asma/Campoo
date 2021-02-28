import React, { useState } from 'react';
import { StyleSheet, Image, StatusBar, SafeAreaView, View, Platform, Text } from 'react-native';
import InputCampooSignup from "../../components/input/InputCampooSignup"
import ButtonCampoo from "../../components/button/ButtonCampoo";
import LabelCampoo from '../../components/LabelCampoo';
import SecondaryButtonCampoo from '../../components/button/SecondaryButtonCampoo';
import LogoCampoo from '../../../assets/svg/LogoCampoo'

export default function NameSignupCampoo({ navigation }) {
    const [name, setName] = useState('');
    console.log(name);




    return (

        <SafeAreaView style={styles.container}>

            <LogoCampoo style={{ right: '5%', top: 49, marginTop: 16, position: 'absolute', }} />
            <Image style={styles.baloo} source={require("../../../assets/images/Blob-Baloo-Etudiant.png")} />

            <View style={styles.nameView}>
                <LabelCampoo style={styles.nameLabel}>Nom</LabelCampoo>
                <Text style={styles.textName}>À qui Baloo a-il affaire ?</Text>
                <InputCampooSignup style={styles.InputView} type='name' onChangeText={(text) => setName(text)} value={name} />

                <ButtonCampoo style={styles.button} onPress={() => navigation.push('PseudoSignupCampoo')}>Suivant</ButtonCampoo>
                <SecondaryButtonCampoo style={styles.retour} onPress={() => navigation.goBack()}>retour</SecondaryButtonCampoo>

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

    nameLabel: {
        marginBottom: 9,

    },



    nameView: {

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

    textName: {

        fontSize: 11,
        textAlign: 'left',
        color: '#9B84D2',

    },

    retour: {

        alignSelf: 'center',
        marginTop: 10,

    },






})
