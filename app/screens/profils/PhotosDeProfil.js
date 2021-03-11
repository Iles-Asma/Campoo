import React from 'react'
import { Text, StyleSheet, View, SafeAreaView, ScrollView } from 'react-native'
import HeaderReturn from '../../components/header/HeaderReturn';

export default function PhotosDeProfil({ navigation }) {


    return (
        <SafeAreaView style={styles.mainContainer}>
            <StatusBar style='auto' />

            <HeaderReturn onPress={() => navigation.goBack()} />


            <View style={style.titleContainer}>

                <View style={styles.titleHeader} >
                    <Text>Changer ta profil</Text>

                </View>

                <View style={styles.subTitleHeader}>
                    <Text></Text>

                </View>

            </View>

            <View style={styles.container}>


                <ScrollView styles={styles.scrollContainer} showsVerticalScrollIndicator={false}>


                </ScrollView>

            </View>





        </SafeAreaView>
    )

}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        backgroundColor: '#fff',
        //  alignItems: 'center',
    },

    titleContainer: {
        borderWidth: 1,
        borderColor: 'red',

    },

    titleHeader: {
        borderWidth: 1,
        borderColor: 'green',


    },

    subTitleHeader: {
        borderWidth: 1,
        borderColor: 'blue',

    },
    container: {
        width: '100%'

    },

    scrollContainer: {
        width: '90%',

    },







})
