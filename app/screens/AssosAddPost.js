import React from 'react'
import { StyleSheet, SafeAreaView, StatusBar, Platform, TouchableOpacity } from 'react-native'
import LabelCampoo from '../components/LabelCampoo';
import TextInputAssos from '../components/input/TextInputAssos';
import HeaderAddPost from '../components/header/HeaderAddPost'


export default function AssosAddPost({ navigation }) {

    return (
        <SafeAreaView style={styles.container}>


            {/* header du screen */}
            <HeaderAddPost />

            {/* titre de la zone de texte */}

            <LabelCampoo style={styles.labelInput} >Que souhaitez-vous dire ?</LabelCampoo>

            {/* zone d'ecriture de texte */}

            <TextInputAssos limitCaracter="limit de xxx caracter" />

        </SafeAreaView>

    );

}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        //  pour detecter la platform
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 1,
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: '#ffffff',

        alignItems: 'center',


    },

    headerAddPost: {

        flex: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: '5%',
        alignItems: 'center',
        width: '100%',
        height: 50,

    },
    labelInput: {
        fontSize: 30,
        color: 'red',
        fontWeight: 'bold',

    },








})
