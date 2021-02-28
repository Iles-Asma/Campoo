import React from 'react';
import { Text, StyleSheet, View, TextInput } from 'react-native';

export default class InputCampoo extends React.Component {

    render() {



        return (

            <View style={[styles.inputView, this.props.style]}>

                <Text style={styles.textMail}>{this.props.description}</Text>

                <TextInput style={styles.textInput} autoCapitalize="none" keyboardType={this.props.keyboardType} type={this.props.type} secureTextEntry={this.props.secure} maxLength={40} onChangeText={this.props.onChangeText} />

            </View>

        );

    }

}

const styles = StyleSheet.create({

    inputView: {
        width: 300,

    },

    textInput: {
        paddingHorizontal: 10,
        height: 30,
        borderColor: '#4D3D64',
        borderWidth: 1,
        width: "100%",
        borderRadius: 10,

    },

    textMail: {

        marginBottom: 10,
        fontSize: 11,
        textAlign: 'left',
        color: '#9B84D2',
        //borderWidth:1,

    },



});