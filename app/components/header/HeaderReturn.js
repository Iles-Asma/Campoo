import React from 'react'
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native'
import { CAMPOO } from '../../../assets/themes/ThemeCampoo';
import ArrowLSvg from '../ArrowLSvg';
export default class HeaderReturn extends React.Component {
    render() {
        return (

            <View style={styles.headerReturn}>

                <TouchableOpacity onPress={this.props.onPress} >
                    <ArrowLSvg />
                </TouchableOpacity>

                <Text style={styles.titleHeader}>{this.props.headerTitle}</Text>

            </View>

        )
    }
}

const styles = StyleSheet.create({
    headerReturn: {
        flex: 0,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        paddingHorizontal: '5%',
        alignItems: 'center',
        width: '100%',
        height: 50,


    },

    titleHeader: {
        fontSize: 25,
        color: CAMPOO.primary,
        fontWeight: 'bold',

    },
})
