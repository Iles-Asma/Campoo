'use strict';

import React, { useState } from 'react';

import { StyleSheet, StatusBar, SafeAreaView, View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { CAMPOO } from '../../../assets/themes/ThemeCampoo';
import ArrowLSvg from "../../components/ArrowLSvg";
import ExtraLargeBtn from '../../components/button/ExtraLargeBtn';

export default function DeleteAccount({ navigation }) {

    return (
        // contenu generale

        <SafeAreaView style={styles.container}>
            {/* La navigation du haut */}
            <View style={styles.topNav}>

                {/*Le onPress a mettre  */}
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <ArrowLSvg />
                </TouchableOpacity>
                <View style={styles.namePage}>
                    <Text style={styles.secondTitle}>Réglage</Text>
                </View>

            </View>

            {/* <TopNav>Réglage</TopNav> */}

            {/* Contenu */}
            <View style={styles.deleteContent}>
                <Text style={styles.warningText}>Êtes vous sûre de vouloir supprimer votre compte ? Pas de retour en arrière possible !</Text>

                <View style={styles.btnContainer} >
                    <ExtraLargeBtn>Non je ne veux pas supprimer mon compte !</ExtraLargeBtn>
                </View>
                <TouchableOpacity>
                    <Text style={styles.deleteText}>oui je suis sûr, supprimez mon compte </Text>

                </TouchableOpacity>
            </View>

        </SafeAreaView>


    );
};


const styles = StyleSheet.create({

    container: {

        flex: 1,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        flexDirection: 'column',
        backgroundColor: '#fff',

        //  
    },

    deleteContent: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: '2%',
    },
    btnContainer: {
        flex: 0,
        width: '100%',
        marginTop: 25,
        justifyContent: 'center',
        alignItems: 'center',

    },
    deleteText: {
        marginTop: 30,
        textDecorationLine: 'underline',

        color: "#EB7653",
    },
    warningText: {
        fontSize: 36,
        fontWeight: '200',
        textAlign: 'center',

    },

    namePage: {
        flex: 0,
        justifyContent: 'center',
        width: '100%',
        flexDirection: 'row',

    },
    secondTitle: {

        fontSize: 20,

        fontWeight: 'bold',
        color: CAMPOO.primary,

    },
    topNav: {
        flex: 0,
        marginTop: '4%',
        width: '100%',
        height: 40,
        justifyContent: 'center',
        flexDirection: 'row',
        borderBottomWidth: 2,
        borderColor: 'rgba(158, 150, 150, .3)',
        paddingHorizontal: '5%',

    },


});
