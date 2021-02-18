import React from 'react'
import { Text, StyleSheet, View, ScrollView, SafeAreaView, StatusBar, Image, TouchableOpacity } from 'react-native'
import AddButton from '../../assets/svg/AddButton'
import ArrowLSvg from '../components/ArrowLSvg'

import EventItemCampoo from '../components/EventItemCampoo'

export default class AssoEventCampoo extends React.Component {
    render() {
        return (

            <SafeAreaView style={styles.container}>







                <ScrollView style={styles.scrollContainer} showsVerticalScrollIndicator={false}>

                    <View style={styles.containerEvent}>

                        <EventItemCampoo
                            image={require("../../assets/images/imagePost-Test.png")}

                            title="TITRE DE L'EVENEMENT"

                            eventText="Description de l’evenement Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad "

                            date='17/05/2020'

                            hours='18h20'

                            location='2 rue ta soeur tire au flanc' />

                        <EventItemCampoo
                            image={require("../../assets/images/imagePost-Test.png")}

                            title="TITRE DE L'EVENEMENT"

                            eventText="Description de l’evenement Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad "

                            date='17/05/2020'

                            hours='18h20'

                            location='2 rue ta soeur tire au flanc' />


                        <EventItemCampoo
                            image={require("../../assets/images/imagePost-Test.png")}

                            title="TITRE DE L'EVENEMENT"

                            eventText="Description de l’evenement Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad "

                            date='17/05/2020'

                            hours='18h20'

                            location='2 rue ta soeur tire au flanc' />


                        <EventItemCampoo
                            image={require("../../assets/images/imagePost-Test.png")}

                            title="TITRE DE L'EVENEMENT"

                            eventText="Description de l’evenement Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad "

                            date='17/05/2020'

                            hours='18h20'

                            location='2 rue ta soeur tire au flanc' />





                    </View>





                </ScrollView>
                {/* <View style={styles.addEventAssos}> */}


                <TouchableOpacity style={styles.arrowLeft}>
                    <ArrowLSvg />
                </TouchableOpacity>




                <TouchableOpacity style={styles.addButton}>
                    <AddButton couleur="red" />
                </TouchableOpacity>


                {/* </View> */}
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

    addButton: {
        position: 'absolute',
        top: 53,
        right: '3%',
        shadowColor: "#000000",
        shadowOpacity: 0.3,
        shadowRadius: 4,
        shadowOffset: {
            height: 3,
            width: 3
        },
    },

    arrowLeft: {
        position: 'absolute',
        top: 54,
        left: '3%',
        padding: 10,


    },


    containerEvent: {
        width: '100%',
        paddingTop: 20,


    },

    scrollContainer: {
        width: '90%',
        paddingTop: 30,


    },

    addEventAssos: {
        width: '90%',
        height: 60,

        flex: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',





    },











})
