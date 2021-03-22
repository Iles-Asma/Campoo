import React from 'react'
import { FlatList, Text, View, SafeAreaView, ScrollView, StyleSheet, Image } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import HeaderReturn from '../../components/header/HeaderReturn';

export default function PhotosDeProfil({ navigation }) {


    // fetching des images depuis la bdd

    const Item = ({ item, onPress, style }) => (
        <TouchableOpacity onPress={onPress} style={[styles.item, style]}>
            <Text style={styles.title}>{item.title}</Text>
        </TouchableOpacity>
    );

    return (
        <SafeAreaView style={styles.mainContainer}>
            <StatusBar style='auto' />

            <HeaderReturn onPress={() => navigation.goBack()} />


            <View style={styles.titleContainer}>

                <View style={styles.titleHeader} >
                    <Text>Changer ta profil</Text>

                </View>

                <View style={styles.subTitleHeader}>
                    <Text>Selectionne une illustration parmi celles- ci-dessous !</Text>

                </View>

            </View>



            {/* =======================================SEPARATION HEADER==============================================*/}

            <View style={styles.container}>


                <ScrollView styles={styles.scrollContainer} showsVerticalScrollIndicator={false}>

                    {/* ====================CHARGER LES IMAGES  ICI==================== */}

                    <View style={styles.pdpContainer}>

                    </View>

                    <View style={styles.pdpContainer}>

                    </View>

                    <View style={styles.pdpContainer}>

                    </View>
                    <View style={styles.pdpContainer}>

                    </View>
                    <View style={styles.pdpContainer}>

                    </View>
                    <View style={styles.pdpContainer}>

                    </View>
                    <View style={styles.pdpContainer}>

                    </View>
                    <View style={styles.pdpContainer}>

                    </View>
                    <View style={styles.pdpContainer}>

                    </View>
                    <View style={styles.pdpContainer}>

                    </View>
                    <View style={styles.pdpContainer}>

                    </View>



                </ScrollView>

            </View>





        </SafeAreaView>
    )

}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        paddingTop: Platform.OS === "ios" ? StatusBar.currentHeight : 40,
        flexDirection: 'column',
        alignItems: 'center',
        flexDirection: 'column',
        backgroundColor: '#fff',
        borderWidth: 2,
        borderColor: 'green',
        //  alignItems: 'center',
    },

    titleContainer: {
        borderWidth: 1,
        borderColor: 'yellow',
        width: '90%',
        height: 87,

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
        flex: 1,
        flexDirection: 'row',
        padding: 10,


        width: '100%',
        borderWidth: 3,
        borderColor: 'red',
        height: 'auto',

    },

    scrollContainer: {
        flex: 1,
        flexDirection: 'row',

        borderWidth: 3,
        borderColor: 'green',
        width: '30%',
        height: 100,

    },
    pdpContainer: {
        height: 100,
        width: 100,
        borderWidth: 2,

    }







})
