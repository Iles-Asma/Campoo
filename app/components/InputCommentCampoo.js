import React, { Component } from 'react'
import { Text, StyleSheet, View, TextInput, Image } from 'react-native'
import { CAMPOO } from '../../assets/themes/ThemeCampoo'


export default class InputCommentCampoo extends Component {
    render() {
        return (
            <View style={styles.InputCommentContainer}>
                <TextInput style={styles.inputText}
                    underlineColorAndroid="transparent"
                    placeholder={""}
                    placeholderTextColor={"#9E9E9E"}
                    maxLength={150}

                />

                <View>

                    <Image style={styles.arrowSend} source={require("../../assets/images/arrow-send.png")} />


                </View>



            </View>
        )
    }
}

const styles = StyleSheet.create({
    InputCommentContainer: {
        width: '100%',
        height: 57,
        borderWidth: 1,
        top: 50,

    },


    inputText: {
        width: 300,
        height: 37,
        margin: 10,
        borderWidth: 2,
        borderRadius: 10,
        borderColor: CAMPOO.primary,
        padding: 10,




    },


})
