import React from 'react';
import { StyleSheet, Image, StatusBar, SafeAreaView, View, Platform, Text } from 'react-native';
import InputCampooSignup from "../components/InputCampooSignup"
import ButtonCampoo from "../components/ButtonCampoo";
import LabelCampoo from '../components/LabelCampoo';
import SecondaryButtonCampoo from '../components/SecondaryButtonCampoo';

export default class QSecretSignupCampoo extends React.Component {

    render() {

        const { navigation } = this.props;

        const pressHandler = () => {
            navigation.push('RSecretSignupCampoo');

        }


        //! Mettre un picker

        return (

            <SafeAreaView style={styles.container}>


                <Image style={styles.logoCampoo} source={require("../../assets/images/LogoCampoo.png")} />
                <Image style={styles.baloo} source={require("../../assets/images/Baloo-Blob-Thinkin.png")} />

                <View style={styles.QsView}>
                    <LabelCampoo style={styles.QsLabel}>Question secrète</LabelCampoo>
                    <Text style={styles.textQs}>Baloo a une mémoire d’éléphant mais il se peut que toi non !</Text>

                    <InputCampooSignup style={styles.InputView} />
                    <Text style={styles.textQsInfo}>La réponse te permettra de réinitialiser ton mot de passe</Text>

                    <ButtonCampoo style={styles.button} onPress={pressHandler}>Suivant</ButtonCampoo>
                    <SecondaryButtonCampoo style={styles.retour} onPress={ () => navigation.goBack() }>retour</SecondaryButtonCampoo>

                </View>

            </SafeAreaView>

        );
    }


}


const styles = StyleSheet.create({

    container: {

        flex: 1,

        // test pour detecter la platform
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        flexDirection: 'column',


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

    QsLabel: {
        marginBottom: 9,

    },



    QsView: {

        top: 138,
        height: 290,
        width: 300,
        alignSelf: 'center',


    },

    textQsInfo: {
        marginTop: 21,
        textAlign: 'center',
        fontSize: 12,
        color: '#EB7653',


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

    textQs: {

        fontSize: 12,
        textAlign: 'left',
        color: '#9B84D2',

    },

    retour: {

        alignSelf: 'center',
        marginTop: 10,

    },






})