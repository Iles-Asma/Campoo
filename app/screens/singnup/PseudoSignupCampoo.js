import React from 'react';
import { StyleSheet, Image, StatusBar, SafeAreaView, View, Platform, Text } from 'react-native';
import InputCampooSignup from "../../components/InputCampooSignup"
import ButtonCampoo from "../../components/ButtonCampoo";
import LabelCampoo from '../../components/LabelCampoo';
import SecondaryButtonCampoo from '../../components/SecondaryButtonCampoo';

export default class PseudoSignupCampoo extends React.Component {

    render() {
        const { navigation } = this.props;

        const pressHandler = () => {
            navigation.push('MdpSignupCampoo');
        }


        return (

            <SafeAreaView style={styles.container}>


                <Image style={styles.logoCampoo} source={require("../../assets/images/logoCampoo.png")} />
                <Image style={styles.baloo} source={require("../../assets/images/blob-baloo-fête.png")} />

                <View style={styles.pseudoView}>
                    <LabelCampoo style={styles.pseudoLabel}>Pseudonyme</LabelCampoo>
                    <Text style={styles.textPseudo}>C’est ainsi que Baloo te ferais valoir auprès des autres utilisateurs.</Text>
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

    pseudoLabel: {
        marginBottom: 9,

    },



    pseudoView: {

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

    textPseudo: {

        fontSize: 11,
        textAlign: 'left',
        color: '#9B84D2',

    },

    retour: {

        alignSelf: 'center',
        marginTop: 10,

    },






})