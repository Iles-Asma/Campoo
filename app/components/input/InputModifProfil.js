'use strict';

import React from 'react';

import { StyleSheet, TextInput } from 'react-native';

export default class InputModifProfil extends React.Component {

    render() {

        return (
            // creation du composant unique input Profil static
            <TextInput style={[styles.inputStyle]} placeholder={this.props.placeholder} maxLength={30}
            />
        );

    }

}

const styles = StyleSheet.create({
    // La forme generale des inputs
    inputStyle: {
        height: 40,
        borderWidth: 2,
        borderRadius: 10,
        paddingLeft: 15,
        fontSize: 17,
        color: '#4D3D64',
        borderColor: '#4D3D64',
    },


})