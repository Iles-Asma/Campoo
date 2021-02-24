import React from 'react';

import { Text, View } from 'react-native';


export default function EventButtonCampoo(props) {

    return (

        <View style={props.style} onPress={props.onPress}>
            <Text style={props.style}>{props.children}</Text>
        </View>


    );


}

