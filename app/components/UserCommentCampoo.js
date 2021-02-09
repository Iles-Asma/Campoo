import React from 'react';

import { View, Image, Text, StyleSheet } from 'react-native';
import { CAMPOO } from "../../assets/themes/ThemeCampoo";

import ProfileHeaderCampoo from '../components/ProfileHeaderCampoo';



export default class UserCommentCampoo extends React.Component {

    render() {

        return (



            <View style={styles.user_CommentItem} >


                {/* <View>



                    <View style={styles.comment_AssoProfile}>

                        <Image style={styles.commentImage} source={require("../../assets/images/AssoProfile.png")} />

                        <Text style={styles.post_AssoName} >Lapin Associe</Text>

                    </View>
                </View> */}

                <ProfileHeaderCampoo name='lapin associe' />






                <View style={styles.user_commentContainer}>

                    <Text style={styles.user_commentDescription}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

                    </Text>


                </View>




            </View>






        );

    }








}


const styles = StyleSheet.create({

    user_CommentItem: {
        flex: 1,
        width: 330,
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

        width: 284,
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
