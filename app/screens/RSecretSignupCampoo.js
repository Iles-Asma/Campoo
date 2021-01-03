import React from 'react';
import { StyleSheet, Image, StatusBar, SafeAreaView, View, Platform, Text } from 'react-native';
import InputCampooSignup from "../components/InputCampooSignup"
import ButtonCampoo from "../components/ButtonCampoo";
import LabelCampoo from '../components/LabelCampoo';
import SecondaryButtonCampoo from '../components/SecondaryButtonCampoo';

export default class RSecretSignupCampoo extends React.Component {

    render() {

        const { navigation } = this.props;

        const pressHandler = () => {
            navigation.push('AnimalSignupCampoo');

        }

        //! Mettre un picker

        return (



            <SafeAreaView style={styles.container}>


                <Image style={styles.logoCampoo} source={require("../../assets/images/LogoCampoo.png")} />
                <Image style={styles.baloo} source={require("../../assets/images/Baloo-Blob-Thinkin.png")} />

                <View style={styles.RsView}>
                    <LabelCampoo style={styles.RsLabel}>Réponse secrète</LabelCampoo>
                    <Text style={styles.textRs}>Ah tu as donc choisi cette question ? Très bien, Baloo aimerait bien en connaître la réponse...</Text>
                    <InputCampooSignup style={styles.InputView} />

                    <ButtonCampoo style={styles.button} onPress={pressHandler}>Suivant</ButtonCampoo>
                    <SecondaryButtonCampoo style={styles.retour}>retour</SecondaryButtonCampoo>

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

    RsLabel: {
        marginBottom: 9,

    },



    RsView: {

        top: 138,
        height: 290,
        width: 300,
        alignSelf: 'center',


    },


    button: {
        marginTop: 57,
        alignSelf: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 1,
        shadowRadius: 7,
        elevation: 20,

    },

    baloo: {
        position: "absolute",
        width: 559,
        height: 438,
        left: 50,
        top: 440,
    },

    textRs: {

        fontSize: 12,
        textAlign: 'left',
        color: '#9B84D2',

    },

    retour: {

        alignSelf: 'center',
        marginTop: 10,

    },






})