import React, { Component } from 'react'
import { Text, StyleSheet, View, ScrollView, SafeAreaView, StatusBar, Image } from 'react-native'

export default class AssoEventCampoo extends Component {
    render() {
        return (

            <SafeAreaView style={styles.container}>



                <View style={styles.addEventAssos}>
                    <Image style={styles.addEventBtn} source={require("../../assets/images/Boutton-ajout.png")} />

                </View>
                <ScrollView>


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
