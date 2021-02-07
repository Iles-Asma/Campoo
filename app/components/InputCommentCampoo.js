import React, { Component } from 'react'
import { Text, StyleSheet, View, TextInput } from 'react-native'


export default class InputCommentCampoo extends Component {
    render() {
        return (
            <View style={styles.InputCommentContainer}>
                <TextInput style={styles.inputText}
                    underlineColorAndroid="transparent"
                    placeholder={""}
                    placeholderTextColor={"#9E9E9E"}

                ></TextInput>

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


    },


})
