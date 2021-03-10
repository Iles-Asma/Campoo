import React from 'react'
import { Text, StyleSheet, View, SafeAreaView } from 'react-native'
import HeaderReturn from '../../components/header/HeaderReturn';

export default function (props) {


    return (
        <SafeAreaView style={styles.container}>



            <View style={style}>

            </View>

        </SafeAreaView>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        backgroundColor: '#fff',
        //  alignItems: 'center',
    },






})
