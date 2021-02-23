'use strict';

import React from 'react';
import { StyleSheet, StatusBar, SafeAreaView, ScrollView, View, Text } from 'react-native';
import Tags from '../../components/Tags';
import TitlePage from '../../components/TitlePage';
import ButtonLarge from "../../components/button/ButtonLarge";
export default class MyTags extends React.Component {



    render() {

        return (

            <SafeAreaView style={styles.container}>
                {/* Titre de l'onglet */}
                <TitlePage>Tes tags</TitlePage>

                <View style={styles.myTagsContainer} >

                    <ScrollView style={styles.SizeOnScroll} showsVerticalScrollIndicator={false} >

                        {/* Les differents tags */}


                        <View style={styles.myTagsContent}>
                            <Tags> + Tag</Tags>
                            <Tags> + Tag</Tags>
                            <Tags> + Tag</Tags>

                            <Tags> + Tag</Tags>
                            <Tags> + Tag</Tags>
                            <Tags> + Tag</Tags>
                            <Tags> + Tag</Tags>
                            <Tags> + Tag</Tags>
                            <Tags> + Tag</Tags>
                            <Tags> + Tag</Tags>
                            <Tags> + Tag</Tags>
                            <Tags> + Tag</Tags>
                            <Tags> + Tag</Tags>
                            <Tags> + Tag</Tags>
                            <Tags> + Tag</Tags>


                        </View>






                    </ScrollView>
                </View>

                {/*Texte additionnel informatif  */}
                <View style={styles.infoModif}>
                    <Text style={styles.infoTags}>Tu peux supprimer tes tags en appuyant dessus !</Text>

                    {/* Composant btn */}
                    <View style={styles.btnModifcation}>
                        <ButtonLarge style={styles.BgColor}> Ajouter des tags </ButtonLarge>
                    </View>
                </View>
            </SafeAreaView>

        );

    }

}
// style generale
const styles = StyleSheet.create({

    container: {

        flex: 1,
        // test pour detecter la platform
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        flexDirection: 'column',
        position: 'relative',
        margin: 15,
        backgroundColor: '#fff',
        alignItems: 'center',

    },
    myTagsContainer: {
        flex: 1.6,
        height: '50%',
        borderWidth: 1,
        borderRadius: 15,
        padding: 5,
        borderColor: 'rgba(158, 150, 150, .3)',
        width: '100%'

    },
    myTagsContent: {
        flex: 1,
        width: '100%',
        marginBottom: 25,
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    infoModif: {
        flexDirection: 'column',
        flex: 2,
        width: '100%',
    },
    infoTags: {
        fontSize: 12,
        flex: 0,
        marginTop: 20,
        alignSelf: "flex-end",
        marginRight: 5,
        color: '#4D3D64'
    },
    btnModifcation: {
        flex: 0.5,


        justifyContent: 'center',
        alignSelf: 'center',
    },
    SizeOnScroll: {
        height: '7%',
    },
    BgColor: {
        backgroundColor: '#4D3D64',
    }

});