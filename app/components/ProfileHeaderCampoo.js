
import React, { Component } from 'react'
import { Text, Image, StyleSheet, View, TouchableOpacity } from 'react-native'
import { CAMPOO } from "../../assets/themes/ThemeCampoo";
import Dots from '../../assets/svg/Dots';

export default class ProfileHeaderCampoo extends Component {
    render() {
        return (
            <View style={styles.containerInfoProfile} >


                <View style={styles.post_AssoProfile}>

                    <Image source={require("../../assets/images/AssoProfile.png")} />

                    <Text style={styles.post_AssoName}>{this.props.name}</Text>

                </View>


                <TouchableOpacity>
                    <Dots />
                </TouchableOpacity>






            </View>
        )
    }
}

const styles = StyleSheet.create({
    containerInfoProfile: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        paddingHorizontal: 15,


    },

    post_Item: {
        flex: 1,
        width: 355,
        height: '100%',
        borderWidth: 1,
        borderColor: CAMPOO.primary,
        marginTop: 9,
        borderRadius: 9,


    },

    post_AssoProfile: {
        marginTop: 11,
        marginBottom: 14,
        flex: 1,
        flexDirection: 'row',
        alignItems: "center",
        //marginLeft: 10.5,

    },

    post_AssoName: {
        marginLeft: 9.5,
        fontSize: 16.5,


    },



})
