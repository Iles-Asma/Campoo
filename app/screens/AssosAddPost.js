import React, { Component } from 'react'
import { Text, StyleSheet, View, SafeAreaView, StatusBar, Platform, TouchableOpacity } from 'react-native'
import LabelCampoo from '../components/LabelCampoo';
import TextInputAssos from '../components/TextInputAssos';
import ArrowLSvg from '../components/ArrowLSvg'
import SendButton from '../../assets/svg/SendButton'


export default class AssosAddPost extends Component {
    render() {
        return (
            <SafeAreaView style={styles.container}>


                {/* header du screen */}
                <View style={styles.headerAddPost}>

                    <TouchableOpacity style={styles.arrowLeft}>
                        <ArrowLSvg />
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <SendButton />
                    </TouchableOpacity>

                </View>

                {/* titre de la zone de texte */}

                <LabelCampoo style={styles.labelInput} >Que souhaitez-vous dire ?</LabelCampoo>

                {/* zone d'ecriture de texte */}

                <TextInputAssos limitCaracter="limit de xxx caracter" />

            </SafeAreaView>

        );
    }
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        //  pour detecter la platform
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 1,
        flexDirection: 'column',
        justifyContent: 'center',

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
    arrowLeft: {
        // padding: 10,

    },







})
