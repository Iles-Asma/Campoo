import React from 'react'
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native'
import ArrowLSvg from '../components/ArrowLSvg';
import SendButton from '../../assets/svg/SendButton'


export default class HeaderAddPost extends React.Component {
    render() {
        return (

            <View style={styles.headerAddPost}>

                <TouchableOpacity >
                    <ArrowLSvg />
                </TouchableOpacity>

                <TouchableOpacity>
                    <SendButton />
                </TouchableOpacity>

            </View>

        )
    }
}

const styles = StyleSheet.create({
    headerAddPost: {

        flex: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: '5%',
        alignItems: 'center',
        width: '100%',
        height: 50,

    },
})
