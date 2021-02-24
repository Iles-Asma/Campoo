'use strict';

import React from 'react';
import { StyleSheet, TextInput } from 'react-native';

export default class InputBioProfil extends React.Component {


    render() {

        return (
            // creation du composant unique bio static
            <TextInput style={styles.inputStyleBio} multiline
                numberOfLines={3} placeholder={this.props.placeholder} maxLength={150} />
        );

    }

}

const styles = StyleSheet.create({
    // La forme generale de la bio
    inputStyleBio: {
        height: 200,
        width: '100%',
        borderWidth: 3,
        marginTop: 10,
        borderRadius: 10,
        paddingTop: 15,
        padding: 15,
        fontSize: 17,
        color: '#4D3D64',
        borderColor: '#4D3D64',
        textAlignVertical: 'top',
    },


})