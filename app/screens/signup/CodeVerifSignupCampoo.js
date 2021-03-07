import React from 'react';
import { StyleSheet, Image, StatusBar, SafeAreaView, View, Platform, Text } from 'react-native';
import InputCampooSignup from "../../components/input/InputCampooSignup"
import ButtonCampoo from "../../components/button/ButtonCampoo";
import LabelCampoo from '../../components/LabelCampoo';
import SecondaryButtonCampoo from '../../components/button/SecondaryButtonCampoo';
import LogoCampoo from '../../../assets/svg/LogoCampoo'

export default function CodeVerifSignupCampoo(props) {

    const [code, setCode] = useState('');

    const [errorMessage, setErrorMessage] = useState('');
    console.log(code);

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


    const onSubmit = async () => {


        const token = await _retrieveData();

        // console.log(token);

        fetch("https://campoo.fr/api/account/verification", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                "Authorization": `Bearer ${token}`

            },
            body: JSON.stringify({

                'code': code

            })
        })
            // response.json()
            .then((response) => response.json())
            .then((Message) => {

                console.log(Message);
                if (Message.Status === 'Success') {

                    props.navigation.navigate('ScreenLoginCampoo');

                } else {

                    setErrorMessage(Message.Message.code[0]);

                }
            })
            .catch((error) => {
                // console.error(error);
            });


    }



    return (


        // code de verification 

        // safeAreaview : zone de securite pour telephone a encoche 

        <SafeAreaView style={styles.container}>


            <LogoCampoo style={{ right: '5%', top: 49, marginTop: 16, position: 'absolute', }} />

            <Image style={styles.baloo} source={require("../../../assets/images/Blob-baloo-phone.png")} />

            <View style={styles.CfView}>

                <LabelCampoo style={styles.codeVerif_Label}>Code de vérification</LabelCampoo>

                <Text style={styles.codeVerif_Text}>Malgré son manque de mains, Baloo, est parvenu à t’envoyer un code de vérification par mail.</Text>

                <InputCampooSignup style={styles.codeVerif_Input} value={props.code} onChangeText={(text) => setCode(text)} errorText={errorMessage} />

                <ButtonCampoo style={styles.button} onPress={onSubmit}>Valider</ButtonCampoo>

                <SecondaryButtonCampoo style={styles.resend}  >Renvoyer un e-mail</SecondaryButtonCampoo>

                <SecondaryButtonCampoo style={styles.retour} onPress={props.navigation.goBack()}>retour</SecondaryButtonCampoo>

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