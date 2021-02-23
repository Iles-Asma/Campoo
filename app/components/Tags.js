'use strict';

import React from 'react';

import { StyleSheet, TouchableOpacity, Text } from 'react-native';

export default class Tags extends React.Component {


    render() {

        return (
            // creation du composant unique tag static
            <TouchableOpacity style={styles.tagShape} >
                <Text style={styles.tagName}>{this.props.children}</Text>
            </TouchableOpacity>


        );

    }

}

const styles = StyleSheet.create({

    // La forme du tags
    tagShape: {
        height: 50,
        flex: 0,
        justifyContent: 'center',
        alignItems: 'center',

        width: 90,
        marginHorizontal: 10,

        marginBottom: 20,
        borderRadius: 50,

        backgroundColor: '#4D3D64',
        // backgroundColor:'#FFEEE9',


    },
    // Le choix de mettre un nom ou pas(donc icons)
    tagName: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white'
    }


})