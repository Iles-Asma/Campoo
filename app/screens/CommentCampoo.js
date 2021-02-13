import React from 'react'
import { StyleSheet, StatusBar, ScrollView, SafeAreaView, Platform, View, } from 'react-native';
import PostCampoo from '../components/PostCampoo';
import UserCommentCampoo from '../components/UserCommentCampoo';
import InputCommentCampoo from '../components/InputCommentCampoo';
import HeaderReturn from '../components/HeaderReturn';





export default class CommentCampoo extends React.Component {

    render() {

        return (

            <SafeAreaView style={styles.container}>

                <HeaderReturn />






                <ScrollView style={styles.scrollContainer} showsVerticalScrollIndicator={false}>

                    <PostCampoo name='Lapin Associe'
                    />


                    <UserCommentCampoo
                        name='Lapin Associe'
                        comment="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." />
                    <UserCommentCampoo
                        comment="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." />


                    <UserCommentCampoo
                        comment="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." />


                    <UserCommentCampoo
                        comment="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." />

                    <UserCommentCampoo
                        comment="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." />

                    <UserCommentCampoo
                        comment="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." />




                </ScrollView>



                <InputCommentCampoo />


            </SafeAreaView>




        );


    }



};


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
        paddingTop: 20,

    },



});


