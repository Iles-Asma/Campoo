import React, { Component } from 'react'
import { Text, StyleSheet, View, ScrollView, SafeAreaView, StatusBar, Image, TouchableOpacity } from 'react-native'
import AddButton from '../../assets/svg/AddButton'
import ArrowLSvg from '../components/ArrowLSvg'

import EventItemCampoo from '../components/EventItemCampoo'

export default class AssoEventCampoo extends Component {
    render() {
        return (

            <SafeAreaView style={styles.container}>




                <View style={styles.addEventAssos}>

                    <View >
                        <TouchableOpacity>
                            <ArrowLSvg />
                        </TouchableOpacity>

                    </View>

                    <View >
                        <TouchableOpacity>
                            <AddButton />
                        </TouchableOpacity>
                    </View>

                </View>


                <ScrollView style={styles.scrollContainer} showsVerticalScrollIndicator={false}>

                    <View style={styles.containerEvent}>

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





                    </View>





                </ScrollView>
            </SafeAreaView>

        )
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

    containerEvent: {
        width: '100%',


    },

    scrollContainer: {
        width: '90%',



    },

    addEventAssos: {
        width: '90%',
        height: 60,



        flex: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',

        zIndex: 3,


    },










})
