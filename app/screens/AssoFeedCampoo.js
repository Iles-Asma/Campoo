import React, { Component } from 'react'
import { Text, StyleSheet, View, ScrollView, SafeAreaView, StatusBar, TouchableOpacity } from 'react-native'
import PostCampoo from '../components/PostCampoo';
import AddButton from '../../assets/svg/AddButton'

export default class AssoFeedCampoo extends Component {
    render() {
        return (
            <SafeAreaView style={styles.container}>


                <ScrollView style={styles.scrollContainer} showsVerticalScrollIndicator={false}>

                    <View style={styles.containerAssoFeed}>

                        <PostCampoo
                            AssoName="Lapin Associe"
                            description="La description du post" />
                        <PostCampoo />
                        <PostCampoo />
                        <PostCampoo />

                    </View>



                </ScrollView>
                <TouchableOpacity style={styles.addButton}>
                    <AddButton />
                </TouchableOpacity>




            </SafeAreaView>
        )
    };
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



    scrollContainer: {
        width: '90%',
        paddingTop: 30,

    },

    assoAddpost: {
        width: '90%',
        height: 60,
        justifyContent: 'flex-end',
        alignItems: 'center',
        flexDirection: 'row',


    },

    addButton: {
        position: 'absolute',
        top: 40,
        right: 20,
        shadowColor: "#000000",
        shadowOpacity: 0.8,
        shadowRadius: 3,
        shadowOffset: {
            height: 1,
            width: 0
        },
    },


    containerAssoFeed: {
        width: '100%',

    },



})

