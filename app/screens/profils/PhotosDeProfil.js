import React from 'react'
import { Text, StyleSheet, View, SafeAreaView, ScrollView } from 'react-native'
import HeaderReturn from '../../components/header/HeaderReturn';

export default function PhotosDeProfil({ navigation }) {


    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style='auto' />

            <HeaderReturn onPress={() => navigation.goBack()} />





            <View style={style.title}>

            </View>

            <ScrollView>

            </ScrollView>

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
