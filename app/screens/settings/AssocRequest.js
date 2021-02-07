'use strict';

import React, { useState } from 'react';

import { StyleSheet, Picker, ScrollView, TextInput, Image, ImageBackground, StatusBar, SafeAreaView, View, Text } from 'react-native';
import Tags from '../../components/Tags';
import PickerBatiments from "../../components/PickerBatiments";
import InputCampoo from "../../components/InputCampoo";
import LabelCampoo from "../../components/LabelCampoo";
import InputModifProfil from '../../components/InputModifProfil';
import InputBioProfil from '../../components/InputBioProfil';
import ArrowLSvg from "../../components/ArrowLSvg";
import ButtonLarge from '../../components/ButtonLarge';
import { TouchableOpacity } from 'react-native-gesture-handler';
import ButtonCampoo from '../../components/ButtonCampoo';
import TextInputAssos from '../../components/TextInputAssos';

export default class AssocRequest extends React.Component {

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

                {/* Contenaire des information a modifier */}
                <ScrollView showsVerticalScrollIndicator={false} >

                    <View style={styles.modificationContent}>

                        <LabelCampoo style={styles.nameLabel}>Prends en photo le justificatif
d’association !</LabelCampoo>

                        <InputBioProfil placeholder='Decris toi :)' />

                        <Text style={styles.infoInput}>Pour plus d'iformations sur les documents à transmettre visite notre FAQ</Text>

                        {/* Nom de l'asso */}
                        <LabelCampoo style={styles.nameLabel}>Quel est le nom de l’asso ??</LabelCampoo>


                        <InputModifProfil placeholder='ex: BDE Staps' />

                        {/* Nom sur campoo ou changement en adresse mail */}
                        <LabelCampoo style={styles.nameLabel}>Nom sur Campoo </LabelCampoo>


                        <InputModifProfil placeholder='ex: BDE Staps UGE' />

                        {/* Bio */}
                        <LabelCampoo style={styles.nameLabel}>Biographie</LabelCampoo>

                        <InputBioProfil placeholder='Decris ton association en quelques mots' />


                        {/* Input Option */}
                        <LabelCampoo style={styles.nameLabel}>Bâtiment Universitaire :</LabelCampoo>

                        <PickerBatiments />

                        {/* Validation */}
                        <View style={styles.btnContainer} >
                            <ButtonCampoo> Valide </ButtonCampoo>
                        </View>


                    </View>
                </ScrollView>
            </SafeAreaView>




        );
    }
};


const styles = StyleSheet.create({

    container: {

        flex: 1,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        marginLeft: 20,
        marginRight: 20,

        position: 'relative',
        flexDirection: 'column',
        backgroundColor: '#fff',
        //  alignItems: 'center',
    },
    colorViolet: {
        color: '#4D3D64',
    },
    profilModificationContainer: {
        flex: 0,
        height: '25%',
        width: '100%',
        // flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',

    },
    profilPics: {
        width: 130,
        height: 130,
        borderRadius: 130 / 2,
    },
    modificationContent: {
        flex: 1,
        justifyContent: 'flex-start',
        width: '100%',
    },
    nameLabel: {

        fontSize: 30,
        marginTop: 20,
        marginBottom: 5,
        fontWeight: 'bold',
    },

    infoInput: {
        fontSize: 12,
        flex: 0,
        marginTop: 10,
        alignSelf: "flex-end",
        marginRight: 5,
        color: '#4D3D64'
    },
    btnContainer: {
        flex: 2,
        width: '100%',
        marginVertical: 20,
        justifyContent: 'center',
        alignItems: 'center',

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
