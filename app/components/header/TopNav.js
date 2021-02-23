
'use strict';

import React, { useState } from 'react';

import { StyleSheet, SafeAreaView, View, Text } from 'react-native';

import ArrowLSvg from "../ArrowLSvg";

import { TouchableOpacity } from 'react-native-gesture-handler';

export default class topNav extends React.Component {

    render() {



        return (
            // contenu generale

            <SafeAreaView>
                {/* La navigation du haut */}
                <View style={styles.topNav}>

                    {/*Le onPress a mettre  */}
                    <TouchableOpacity onPress={this.props.onPress} >
                        <ArrowLSvg />
                    </TouchableOpacity>
                    <View style={styles.namePage}>
                        <Text style={styles.secondTitle}>{this.props.children}</Text>
                    </View>

                </View>


            </SafeAreaView>




        );
    }
};


const styles = StyleSheet.create({


    namePage: {
        flex: 0,
        justifyContent: 'center',
        width: '95%',
        flexDirection: 'row',

    },
    secondTitle: {

        fontSize: 20,

        fontWeight: 'bold',
        color: '#4D3D64',

    },
    topNav: {
        flex: 0,

        width: '100%',
        height: 40,
        flexDirection: 'row',
        borderBottomWidth: 2,
        borderColor: 'rgba(158, 150, 150, .3)',

    },


});
