import React from 'react';
import { ScrollView, StyleSheet, SafeAreaView, StatusBar, Platform, View } from 'react-native';
import PostCampoo from "../components/PostCampoo";



export default class HomeFeedCampoo extends React.Component {

    render() {

        return (

            <SafeAreaView style={styles.container}>
                <ScrollView style={styles.scrollContainer} showsVerticalScrollIndicator={false}>

                    <View style={styles.containerFeed}>





                        <PostCampoo
                            AssoName="Lapin Associe"
                            description="La description du post" />
                        <PostCampoo />
                        <PostCampoo />
                        <PostCampoo />





                    </View>



                </ScrollView>
            </SafeAreaView>

        );
    }
};


const styles = StyleSheet.create({

    container: {
        flex: 1,
        //  pour detecter la platform
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 1,
        flexDirection: 'column',
        justifyContent: 'center',

        alignItems: 'center',


    },

    scrollContainer: {
        width: '90%',

    },

    containerFeed: {
        width: '100%',



    },



})