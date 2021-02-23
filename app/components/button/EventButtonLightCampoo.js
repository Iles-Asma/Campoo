import React from 'react';

import { Text, StyleSheet, TouchableOpacity, View, TouchableNativeFeedback } from 'react-native';

export default class EventButtonCampoo extends React.Component {

    render() {


        return (



            <TouchableNativeFeedback onPress={this.props.onPress}>
                <View style={styles.touchableEvent}>
                    <Text style={styles.EventText}>{this.props.children}</Text>
                </View>
            </TouchableNativeFeedback>

        );

    }

}


const styles = StyleSheet.create({
    EventText: {

        textAlign: 'center',
        alignSelf: 'center',
        marginTop: 5,
        fontSize: 16,
        color: '#4D3D64',

    },
    touchableEvent: {
        color: '#4D3D64',
        borderRadius: 5,
        width: 170,
        height: 50,
        backgroundColor: '#DCD5E7',
        //  alignSelf:'center',

    },




});