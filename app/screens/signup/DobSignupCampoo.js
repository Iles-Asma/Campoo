import React from 'react';
import { StyleSheet, Image, StatusBar, SafeAreaView, View, Platform, Text } from 'react-native';
import InputCampooSignup from "../../components/InputCampooSignup"
import ButtonCampoo from "../../components/ButtonCampoo";
import LabelCampoo from '../../components/LabelCampoo';
import SecondaryButtonCampoo from '../../components/SecondaryButtonCampoo';

export default class DobSignupCampoo extends React.Component {

    //! Mettre un picker

    render() {
        const { navigation } = this.props;

        const pressHandler = () => {
            navigation.push('PseudoSignupCampoo');
        }


        return (

            <SafeAreaView style={styles.container}>



                <Image style={styles.logoCampoo} source={require("../../../assets/images/LogoCampoo.png")} />
                <Image style={styles.baloo} source={require("../../../assets/images/blob-baloo-fête.png")} />

                <View style={styles.dobView}>
                    <LabelCampoo style={styles.dobLabel}>Date de Naissance</LabelCampoo>
                    <Text style={styles.textDob}>Quand est-ce que Baloo doit te célébrer ?</Text>
                    <InputCampooSignup style={styles.InputView} />
                    <ButtonCampoo style={styles.button} onPress={pressHandler}>Suivant</ButtonCampoo>
                    <SecondaryButtonCampoo style={styles.retour} onPress={() =>  navigation.goBack() }>retour</SecondaryButtonCampoo>

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