'use strict';

import React from 'react';

import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import ArrowRSvg from "../ArrowRSvg";
// import ButtonLarge  from "../../components/ButtonLarge";

export default class ButtonSettings extends React.Component {


    render() {

        return (
            // creation du composant unique bio static

            <View style={styles.btnSettings}>

                <Text style={styles.TxtSettings}> {this.props.children} </Text>



                <ArrowRSvg style={styles.ArrowRight} />

            </View>






        );

    }

}

const styles = StyleSheet.create({
    // La forme generale de la bio
    btnSettings: {
        flex: 1,
        flexDirection: 'row',
        height: 50,
        width: '100%',
        borderBottomWidth: 1,
        justifyContent: 'space-between',
        marginTop: 1,
        padding: 10,
        alignItems: 'center',


        borderColor: 'rgba(158, 150, 150, .3)',
    },
    TxtSettings: {
        flex: 0,
        fontWeight: '200',
        // justifyContent:'flex-start',
        fontSize: 20,
    },
    ArrowRight: {
        flex: 1,

        justifyContent: 'flex-end',

    }


})