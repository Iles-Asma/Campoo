import React from 'react';

import { Text, View, TouchableOpacity } from 'react-native';


export default class EventButtonCampoo extends React.Component {

    render() {

        return (



            <View style={this.props.style} onPress={this.props.onPress}>
                <Text style={this.props.style}>{this.props.children}</Text>
            </View>




        );

    }

}


// const styles = StyleSheet.create({
//     EventText: {
//         fontSize: 16,
//         color: 'white',

//     },
//     touchableEvent: {
//         flex: 0,
//         justifyContent: 'center',
//         alignItems: 'center',
//         color: "white",
//         borderRadius: 5,
//         // width: 170,
//         // height: 50,
//         // backgroundColor: '#4D3D64',
//         //  alignSelf:'center',

//     },











// });