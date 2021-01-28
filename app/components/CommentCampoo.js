import React from "react";

import {Text,View, Image,  } from "react-native";

export default class CommentCampoo extends React.compoment{

    render(){

        return (



            <View style={styles.comment_Container}>

                <View>

                    <Image style={styles.user_Profile }       />
                    <Text>  

                    </Text>


                </View>

                <Text style={styles.comment_Text}>

                </Text>

            </View>



        ); 




    }



}

const styles = StyleSheet.create({

    comment_Container:{
        width:330,
        height:"auto",




    },

    comment_Text:{


        

    }










})