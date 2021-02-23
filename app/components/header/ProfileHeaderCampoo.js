
import React from 'react'
import { Text, Image, StyleSheet, View, TouchableOpacity } from 'react-native'
import { CAMPOO } from "../../../assets/themes/ThemeCampoo";
import Dots from '../../../assets/svg/Dots';

export default class ProfileHeaderCampoo extends React.Component {
    render() {
        return (
            <View style={styles.containerInfoProfile} >


                <View style={styles.post_AssoProfile}>

                    <Image source={require("../../../assets/images/AssoProfile.png")} />

                    <Text style={styles.post_AssoName}>{this.props.children}</Text>

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
        color: CAMPOO.primary,


    },



})
