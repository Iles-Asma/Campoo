import React from 'react';

import { View, Image, Text, StyleSheet } from 'react-native';
import { CAMPOO } from "../../assets/themes/ThemeCampoo";

import ProfileHeaderCampoo from '../components/ProfileHeaderCampoo';



export default class UserCommentCampoo extends React.Component {

    render() {

        return (



            <View style={styles.user_CommentItem} >

                <ProfileHeaderCampoo name='lapin associe' />

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



        borderColor: CAMPOO.primary,
        marginTop: 9,
        alignSelf: "flex-end",
        borderRadius: 5,

    },

    comment_AssoProfile: {
        marginTop: 11,
        marginBottom: 14,
        flex: 1,
        flexDirection: 'row',
        alignItems: "center",
        marginLeft: 10.5,


    },
    post_AssoName: {
        marginLeft: 9.5,
        fontSize: 16.5,


    },

    user_commentContainer: {

        alignSelf: 'center',

        width: "90%",
        height: 'auto',
        marginBottom: 30,




    },

    user_commentDescription: {



    },


    commentImage: {

        width: 32,
        height: 32,


    },










})
