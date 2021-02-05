import React from 'react';
import { StyleSheet, Image, StatusBar, SafeAreaView, View, Platform, Text } from 'react-native';
import InputCampooSignup from "../../components/InputCampooSignup"
import ButtonCampoo from "../../components/ButtonCampoo";
import LabelCampoo from '../../components/LabelCampoo';
import SecondaryButtonCampoo from '../../components/SecondaryButtonCampoo';

export default class CVerifSignupCampoo extends React.Component {

    render() {
        const { navigation } = this.props;

        const pressHandler = () => {
            navigation.goBack();
        }

        return (


           // code de verification 

           // safeAreaview : zone de securite pour telephone a encoche 

            <SafeAreaView style={styles.container}>

              
                <Image style={styles.logoCampoo} source={require("../../../assets/images/LogoCampoo.png")}/>

                <Image style={styles.baloo} source={require("../../../assets/images/Blob-baloo-phone.png")} />

                <View style={styles.CfView}>

                    <LabelCampoo style={styles.codeVerif_Label}>Code de vérification</LabelCampoo>

                    <Text style={styles.codeVerif_Text}>Malgré son manque de mains, Baloo, est parvenu à t’envoyer un code de vérification par mail.</Text>

                    <InputCampooSignup style={styles.codeVerif_Input}/>

                    <ButtonCampoo style={styles.button}>Valider</ButtonCampoo>
                    
                    <SecondaryButtonCampoo style={styles.resend}>Renvoyer un e-mail</SecondaryButtonCampoo>

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

    codeVerif_Input: {

        alignSelf: 'center',

    },

    codeVerif_Label: {
        marginBottom: 9,

    },



    CfView: {

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

    codeVerif_Text: {

        fontSize: 12,
        textAlign: 'left',
        color: '#9B84D2',

    },

    retour: {

        alignSelf: 'center',
        marginTop: 10,

    },

    resend: {
        alignSelf: 'center',
        marginTop: 10,


    }






})