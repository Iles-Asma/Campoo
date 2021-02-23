import React from 'react';
import { Text, StyleSheet, View, StatusBar, Platform, SafeAreaView, Image } from 'react-native'
import ButtonCampoo from "../../components/button/ButtonCampoo";
import LabelCampoo from '../../components/LabelCampoo';

export default class MdpOResetConfirmed extends React.Component {
    render() {
        const { navigation } = this.props;

        const pressHandler = () => {
            navigation.navigate({ ScreenLoginCampoo });
        };
        return (
            <SafeAreaView style={styles.mainContainer}>
                <Image style={styles.logoCampoo} source={require("../../../assets/images/LogoCampoo.png")} />

                <Image style={styles.baloo} source={require("../../../assets/images/blob-baloo-fête.png")} />


                <View style={styles.container}>

                    <LabelCampoo style={styles.label}>Mot de passe Confirmé</LabelCampoo>

                    <Text style={styles.text}>Ton mot de passe a été modifié, retient le bien! Tu peux maintenant te connecter à bientot!</Text>

                    <ButtonCampoo style={styles.button} onPress={pressHandler}>Connexion</ButtonCampoo>


                </View>

            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({

    mainContainer: {
        flex: 1,
        // test pour detecter la platform
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 1,
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: '#ffffff',


    },

    logoCampoo: {
        position: 'absolute',
        width: 115,
        height: 115,
        marginTop: 20,
        left: 260,
        top: 10,


    },

    baloo: {
        position: "absolute",
        width: 559,
        height: 438,
        left: 50,
        top: 440,
    },

    container: {
        flex: 0,
        alignItems: 'center',

        height: 290,
        width: 300,
        alignSelf: 'center',



    },

    text: {
        fontSize: 11,
        textAlign: 'center',
        color: '#9B84D2',

        marginBottom: 43,

    },
    label: {
        marginBottom: 9,
        textAlign: 'left',


    },




})
