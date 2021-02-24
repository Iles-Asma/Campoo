import React from 'react';

import { View, Text, StyleSheet } from 'react-native';
import { CAMPOO } from "../../assets/themes/ThemeCampoo";
import ProfileHeaderCampoo from './header/ProfileHeaderCampoo';



export default class UserCommentCampoo extends React.Component {

    render() {

        return (

            <View style={styles.CommentItem} >

                {/* header contenant les le nom et la pp du profile */}
                <ProfileHeaderCampoo>

                    <Text style={styles.AssoName}>{this.props.name}</Text>

                </ProfileHeaderCampoo>

                <View style={styles.commentContainer}>

                    <Text style={styles.commentDescription}>{this.props.comment}</Text>

                </View>

            </View>

        );

    }

}


const styles = StyleSheet.create({

    CommentItem: {
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

    AssoName: {
        fontSize: 16.5,

    },

    commentContainer: {
        alignSelf: 'center',
        width: "100%",
        height: 'auto',
        marginBottom: 30,
    },

    commentDescription: {
        width: '100%',

    },

    commentImage: {
        width: 24,
        height: 24,

    },


})
