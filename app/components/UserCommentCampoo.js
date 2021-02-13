import React from 'react';

import { View, Image, Text, StyleSheet } from 'react-native';
import { CAMPOO } from "../../assets/themes/ThemeCampoo";

import ProfileHeaderCampoo from '../components/ProfileHeaderCampoo';



export default class UserCommentCampoo extends React.Component {

    render() {

        return (



            <View style={styles.user_CommentItem} >

                <ProfileHeaderCampoo>

                    <Text style={styles.post_AssoName}>{this.props.name}</Text>

                </ProfileHeaderCampoo>

                <View style={styles.user_commentContainer}>

                    <Text style={styles.user_commentDescription}>{this.props.comment}</Text>


                </View>




            </View>






        );

    }








}


const styles = StyleSheet.create({

    user_CommentItem: {
        flex: 1,
        width: "90%",
        height: 'auto',
        borderWidth: 1,
        padding: 10,



        borderColor: CAMPOO.primary,
        marginTop: 9,
        alignSelf: "flex-end",
        borderRadius: 5,

    },


    post_AssoName: {
        // marginLeft: 9.5,
        fontSize: 16.5,


    },

    user_commentContainer: {

        alignSelf: 'center',

        width: "100%",
        height: 'auto',
        marginBottom: 30,




    },

    user_commentDescription: {
        width: '100%',



    },


    commentImage: {

        width: 24,
        height: 24,


    },










})
