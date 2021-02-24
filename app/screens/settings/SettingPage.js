'use strict';

import React from 'react';
import { StyleSheet, StatusBar, TouchableOpacity, SafeAreaView, ScrollView, View, Text } from 'react-native';
import TopNav from "../../components/header/TopNav";
import ButtonSettings from '../../components/button/ButtonSettings';
import ButtonCampoo from '../../components/button/ButtonCampoo';
import ArrowLSvg from '../../components/ArrowLSvg';


export default function SettingPage({ navigation }) {


    // render() {


    return (

        <SafeAreaView style={styles.container}>


            <TopNav onPress={() => navigation.goBack()} >Réglage</TopNav>
            <View style={styles.settingsContent}>
                <ScrollView style={styles.SizeOnScroll} showsVerticalScrollIndicator={false} >

                    {/* Les differentes rubrique */}
                    {/* Titre */}
                    <View style={styles.settingsTitle}>
                        <Text > Compte </Text>
                    </View>

                    {/* Rubrique */}
                    <TouchableOpacity>
                        <ButtonSettings> Prénom</ButtonSettings>
                    </TouchableOpacity>
                    {/* Rubrique */}
                    <TouchableOpacity>
                        <ButtonSettings> Mot de passe</ButtonSettings>
                    </TouchableOpacity>
                    {/* Rubrique */}
                    <TouchableOpacity>
                        <ButtonSettings> Devenir un compte associatif</ButtonSettings>
                    </TouchableOpacity>

                    {/* Titre de la rubrique */}
                    <View style={styles.settingsTitle}>
                        <Text > Contactez-nous </Text>
                    </View>
                    {/* Rubrique */}
                    <TouchableOpacity>
                        <ButtonSettings> Aide et assistance</ButtonSettings>
                    </TouchableOpacity>

                    {/* Titre... */}
                    <View style={styles.settingsTitle}>
                        <Text > Communauté </Text>
                    </View>
                    {/* Rubrique */}
                    <TouchableOpacity>
                        <ButtonSettings> Régles de la Communauté</ButtonSettings>
                    </TouchableOpacity>
                    {/* Titre */}
                    <View style={styles.settingsTitle}>
                        <Text > Mentions légales </Text>
                    </View>
                    {/* Rubrique */}
                    <TouchableOpacity>
                        <ButtonSettings> Politique de Confidentailité</ButtonSettings>
                    </TouchableOpacity>
                    {/* Rubrique */}
                    <TouchableOpacity>
                        <ButtonSettings> Conditions générales d’utilisation</ButtonSettings>
                    </TouchableOpacity>
                    {/* Titre */}
                    <View style={styles.GeneraleBtnContainer}>
                        {/* Btn deconnexion */}
                        <ButtonCampoo><Text style={styles.logOut}  >Déconnexion</Text></ButtonCampoo>

                        {/* BTN Suppression */}
                        <TouchableOpacity ><Text style={styles.leaveBtn}>Supprimer mon compte</Text></TouchableOpacity>


                    </View>


                </ScrollView>

            </View>

        </SafeAreaView>

    );

    // }

}
// style generale
const styles = StyleSheet.create({

    container: {

        flex: 1,
        // test pour detecter la platform
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        flexDirection: 'column',
        position: 'relative',
        justifyContent: 'center',



        backgroundColor: '#fff',
        alignItems: 'center',

    },
    settingsContent: {
        flex: 1,
        marginTop: 10,

        justifyContent: 'center',
        paddingHorizontal: '5%',



    },
    settingsTitle: {
        flex: 1,
        height: 50,
        width: '100%',
        borderBottomWidth: 1,
        justifyContent: 'center',
        borderColor: 'rgba(158, 150, 150, .3)',

    },
    FakePlaceholder: {
        flex: 1,
        width: '100%',
        justifyContent: 'flex-end'
    },
    GeneraleBtnContainer: {
        flex: 1,
        width: '100%',
        marginTop: 50,
        justifyContent: "center",
        alignItems: 'center',
        color: '#fff',
    },
    logOut: {
        fontWeight: 'bold',
    },
    leaveBtn: {

        zIndex: 200,
        marginTop: 15,
        borderRadius: 15,
        color: '#EB7653',


    }

});