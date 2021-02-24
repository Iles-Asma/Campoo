'use strict';

import React from 'react';

import { StyleSheet, TouchableOpacity, Text } from 'react-native';

export default class Categorie extends React.Component {

    render() {
        return (
            // creation du composant unique tag static
            <TouchableOpacity style={[styles.categorieShape]} onPress={this.props.onPress}>
                <Text style={styles.tagName}>{this.props.value}</Text>
            </TouchableOpacity>


        );

    }
}

const styles = StyleSheet.create({

    // La forme du tags
    categorieShape: {
        height: 130,
        flex: 0,
        justifyContent: 'center',
        alignItems: 'center',
        width: 365,
        marginHorizontal: 10,
        marginBottom: 20,
        borderRadius: 40,
        borderWidth: 5,
        borderColor: '#4D3D64',


    },
    // Le choix de mettre un nom ou pas(donc icons)
    tagName: {
        fontSize: 20,
        fontWeight: 'bold',
    }


})

