import React from 'react'
import { SafeAreaView, StyleSheet, Image, View, StatusBar, Text, Platform } from 'react-native';

import HeaderReturn from '../components/header/HeaderReturn';




export default class EventDetailCampoo extends React.Component {

    render() {

        return (



            <SafeAreaView style={styles.container}>

                <HeaderReturn />


                <View>

                    {/* FAIRE COMPOSANT IMAGECONTAINER */}
                    <View style={styles.image_Container}>

                        <Image style={styles.post_Image} source={require("../../assets/images/imagePost-Test.png")} />
                        <Text style={styles.TitleEvent1} >BDE ALDBAOI</Text>



                    </View>



                    <View style={styles.eventDetail} >
                        <Text style={styles.TitleEvent} >TITRE DE L'EVENEMENT</Text>

                        <Text style={styles.textDetail} >

                            Description de l’evenement Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Possibilité

                            d’avoir plus de texte, des images descriptiveDescription de l’evenement Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Possibilité d’avoir plus de texte, des images descriptiveDescription

                            de l’evenement Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Possibilité d’avoir plus de texte, des images descriptive



                   </Text>

                        {/*   */}

                    </View>

                    <View style={styles.Meta_like}>
                        <View>
                            <Text style={styles.DataHeure} >05/09 - 17h20</Text>

                            <Text style={styles.DataHeure} >Lieu- Adresse</Text>

                        </View>


                        <View>

                            <Image style={styles.like_Button} source={require("../../assets/images/Bouton-like.png")} />


                        </View>


                    </View>


                </View>




            </SafeAreaView>







        );




    }




};

const styles = StyleSheet.create({

    container: {
        flex: 1,
        // pour detecter la platform 
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        flexDirection: 'column',
        borderWidth: 2,
        alignItems: 'center',
    },

    image_Container: {
        width: 344,
        alignSelf: 'center',
        height: "auto",
        marginTop: 14,
        marginBottom: 23,




    },

    post_Image: {
        height: 200,
        borderRadius: 6,


    },

    textDetail: {

        fontSize: 11,


    },

    eventDetail: {
        width: 340,
        marginBottom: 160,



    },

    TitleEvent: {
        fontSize: 25,



    },

    TitleEvent1: {
        fontSize: 16,
        textAlign: 'center',

    },

    DataHeure: {
        marginTop: 1,
        fontSize: 20,


    },

    like_Button: {
        width: 36,
        height: 36,
        marginTop: 10,


    },

    Meta_like: {
        height: 41,
        width: 323,
        flex: 1,
        flexDirection: 'row',
        justifyContent: "space-between",




    }









})
