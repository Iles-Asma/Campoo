import React, { Component } from 'react'
import { Text, StyleSheet, View, ScrollView, SafeAreaView, StatusBar, Image, TouchableOpacity } from 'react-native'

import EventItemCampoo from '../components/EventItemCampoo'

export default class AssoEventCampoo extends Component {
    render() {
        return (

            <SafeAreaView style={styles.container}>



                <View style={styles.addEventAssos}>

                    <TouchableOpacity>
                        <Image style={styles.addEventBtn} source={require("../../assets/images/Boutton-ajout.png")} />
                    </TouchableOpacity>


                </View>
                <ScrollView>

                    <EventItemCampoo

                        title="TITRE DE L'EVENEMENT"

                        eventText="Description de l’evenement Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad "

                        date='17/05/2020'

                        hours='18h20'

                        location='2 rue ta soeur tire au flanc' />

                    <EventItemCampoo

                        title="TITRE DE L'EVENEMENT"

                        eventText="Description de l’evenement Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad "

                        date='17/05/2020'

                        hours='18h20'

                        location='2 rue ta soeur tire au flanc' />


                </ScrollView>
            </SafeAreaView>

        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //  pour detecter la platform
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        flexDirection: 'column',
        justifyContent: 'center',

        alignItems: 'center',


    },

    addEventAssos: {
        width: '100%',
        height: 60,


        justifyContent: 'center',
        alignItems: 'flex-end',


    },

    addEventBtn: {
        width: 38,
        height: 38,
        marginRight: 35,



    },





})
