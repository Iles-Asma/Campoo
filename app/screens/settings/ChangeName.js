'use strict';

import React, { useState } from 'react';

import { StyleSheet, Picker, ScrollView, TextInput, Image, ImageBackground, StatusBar, SafeAreaView, View, Text } from 'react-native';
import LabelCampoo from "../../components/LabelCampoo";
import InputModifProfil from '../../components/InputModifProfil';
import InputBioProfil from '../../components/input/InputBioProfil';
import ArrowLSvg from "../../components/ArrowLSvg";
import TopNav from "../../components/header/TopNav";
import ButtonCampoo from '../../components/ButtonCampoo';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class ChangeName extends React.Component {

    render() {

        return (
            // contenu generale

            <SafeAreaView style={styles.container}>
                {/* La navigation du haut */}
                <View style={styles.topNav}>

                    {/*Le onPress a mettre  */}
                    <TouchableOpacity >
                        <ArrowLSvg />
                    </TouchableOpacity>
                    <View style={styles.namePage}>
                        <Text style={styles.secondTitle}>Réglage</Text>
                    </View>

                </View>

                {/* <TopNav>Réglage</TopNav> */}

                {/* Contenu */}
                <View style={styles.modificationContent}>
                    {/* Le label Prénom */}
                    <LabelCampoo style={styles.nameLabel}>Prénom</LabelCampoo>

                    <InputModifProfil placeholder='Edudd77' />



                    <View style={styles.btnContainer} >
                        <ButtonCampoo> Valider </ButtonCampoo>
                    </View>


                </View>

            </SafeAreaView>




        );
    }
};


const styles = StyleSheet.create({

    container: {

        flex: 1,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        marginLeft: 15,
        marginRight: 15,

        position: 'relative',
        flexDirection: 'column',
        backgroundColor: '#fff',

        //  alignItems: 'center',
    },
    nameLabel: {
        marginBottom: 10,
    },
    modificationContent: {
        marginTop: 25,
    },
    btnContainer: {
        flex: 0,
        width: '100%',
        marginTop: 25,
        justifyContent: 'center',
        alignItems: 'center',

    }, namePage: {
        flex: 0,
        justifyContent: 'center',
        width: '100%',
        flexDirection: 'row',

    },
    secondTitle: {

        fontSize: 20,

        fontWeight: 'bold',
        color: '#4D3D64',

    },
    topNav: {
        flex: 0,

        width: '100%',
        height: 40,
        flexDirection: 'row',
        borderBottomWidth: 2,
        borderColor: 'rgba(158, 150, 150, .3)',

    },


});
