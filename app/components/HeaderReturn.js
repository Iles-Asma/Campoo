import React from 'react'
import { StyleSheet, View, TouchableOpacity } from 'react-native'
import ArrowLSvg from '../components/ArrowLSvg';



export default class HeaderReturn extends React.Component {
    render() {
        return (

            <View style={styles.headerReturn}>

                <TouchableOpacity >
                    <ArrowLSvg />
                </TouchableOpacity>


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
})
