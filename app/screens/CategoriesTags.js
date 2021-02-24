'use strict';

import React from 'react';
import { StyleSheet, TouchableOpacity, StatusBar, SafeAreaView, ScrollView, Image, View, Text } from 'react-native';


export default function CategoriesTags({ navigation }) {


    return (

        <SafeAreaView style={styles.container}>
            {/* Titre de l'onglet */}
            <Text style={styles.titleText}>Choisis une catégorie</Text>

            <ScrollView showsVerticalScrollIndicator={false} >

                {/* Les differentes categories de tags */}

                <View style={styles.categorieContainer}>

                    {/* cinema */}
                    <TouchableOpacity onPress={() => navigation.navigate('MyTags')}>

                        <Image style={styles.categorieShape} source={require("../../assets/categories/cinema.png")}  ></Image>

                    </TouchableOpacity>
                    {/* jeux video */}
                    <TouchableOpacity onPress={() => navigation.navigate('ChooseTags')}>

                        <Image style={styles.categorieShape} source={require("../../assets/categories/games.png")}  ></Image>

                    </TouchableOpacity>
                    {/* sport */}
                    <TouchableOpacity onPress={() => navigation.push('ChooseTags')}>

                        <Image style={styles.categorieShape} source={require("../../assets/categories/sport.png")}  ></Image>

                    </TouchableOpacity>
                    {/* art */}
                    <TouchableOpacity onPress={() => navigation.navigate('ChooseTags')}>

                        <Image style={styles.categorieShape} source={require("../../assets/categories/art.png")}  ></Image>

                    </TouchableOpacity>


                </View>

            </ScrollView>
        </SafeAreaView>

    );


}

const styles = StyleSheet.create({

    container: {

        flex: 1,
        width: '100%',
        justifyContent: 'center',
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        position: 'relative',

        backgroundColor: '#fff',
        //   alignItems: 'center',

    },
    titleText: {
        flex: 0,
        height: 55,
        marginTop: 20,
        fontSize: 25,
        fontWeight: '500',
        color: '#4D3D64',
        justifyContent: 'center',
        alignSelf: 'center',
    },
    categorieContainer: {
        // flex:0,
        //  width:'100%',
        //   height:'auto',

        //   justifyContent: 'center',

    },
    categorieShape: {

        width: '85%',
        height: 100,
        flex: 0,
        justifyContent: 'center',
        alignSelf: 'center',
        marginBottom: 15,
        //   marginHorizontal:8,
        borderRadius: 15,

        //  borderWidth:5,
    },
});