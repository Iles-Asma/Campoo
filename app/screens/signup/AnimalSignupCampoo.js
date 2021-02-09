import React from 'react';
import { StyleSheet, Image, StatusBar, SafeAreaView, View, Platform, Text } from 'react-native';
import ButtonCampoo from "../../components/ButtonCampoo";
import LabelCampoo from '../../components/LabelCampoo';
import SecondaryButtonCampoo from '../../components/SecondaryButtonCampoo';

export default class AnimalSignupCampoo extends React.Component {

    render() {
        const { navigation } = this.props;

        const pressHandler = () => {
            navigation.push('CVerifSignupCampoo');
        }



        return (

            <SafeAreaView style={styles.container}>

                <Image style={styles.logoCampoo} source={require("../../../assets/images/LogoCampoo.png")} />
                <Image style={styles.baloo} source={require("../../../assets/images/Component-1.png")} />

                <View style={styles.spiritualView}>

                    <LabelCampoo style={styles.spiritLabel}>Animal Spirituel</LabelCampoo>
                    <Text style={styles.textSpiritual}>Baloo te propose de sélectionner, parmi tout un tas d’animaux, celui auquel tu t’associes le plus !</Text>

                    <View style={styles.Pdpview} >

                        <Image source={require("../../../assets/images/PDP.png")} />

                    </View>

                    <ButtonCampoo style={styles.button} onPress={pressHandler}>Suivant</ButtonCampoo>

                    <SecondaryButtonCampoo style={styles.retour1} >Passer</SecondaryButtonCampoo>

                    <SecondaryButtonCampoo style={styles.retour2} onPress={() => navigation.goBack()}>retour</SecondaryButtonCampoo>

                </View>

            </SafeAreaView>

        );
    }


}


const styles = StyleSheet.create({

    container: {

        flex: 1,
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

    spiritLabel: {
        marginBottom: 9,

    },

    Pdpview: {


        position: 'absolute',
        width: 115,
        height: 115,
        top: 69,
        alignItems: 'center',
        alignSelf: 'center',
        marginBottom: 30,

    },

    spiritualView: {

        top: 138,
        height: 290,
        width: 300,
        alignSelf: 'center',


    },

    button: {
        alignSelf: 'center',
        marginTop: 157,

    },

    baloo: {
        position: "absolute",
        width: 559,
        height: 438,
        left: 50,
        top: 440,
    },

    textSpiritual: {

        fontSize: 11,
        textAlign: 'left',
        color: '#9B84D2',

    },

    retour1: {

        alignSelf: 'center',
        marginTop: 10,

    },
    retour2: {

        alignSelf: 'center',
        marginTop: 3,

    },






})