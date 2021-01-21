import React from 'react';

import { ScrollView, Text, View, Image, StyleSheet, SafeAreaView,StatusBar } from 'react-native';


export default class HomeFeedCampoo extends React.Component{
   
    render() {

        return(

           < SafeAreaView style={styles.container}>


            <ScrollView  showsVerticalScrollIndicator={false}>

                <View style={styles.Post_item}>

                    <Image style={styles.Post_image}>

                    </Image>

                    
                </View>

                <View style={styles.Post_item}>

               

                       <Image style={styles.Post_image}>

                       </Image>


                    
                    
                </View>

                <View style={styles.Post_item}>
                     <Image style={styles.Post_image}>

                    </Image>
                    
                </View>


                <View style={styles.Post_item}>



                      <Image style={styles.Post_image}></Image>
                    
                </View>


                <View style={styles.Post_item}>
                <Image style={styles.Post_image}></Image>
                    
                </View>

                <View style={styles.Post_item}>
                <Image style={styles.Post_image}></Image>
                    
               </View>
             

                

            </ScrollView>
            </SafeAreaView>




        );
    }
};


const styles = StyleSheet.create ({

    container: {

        flex: 1,

        // item pour detecter la platform
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        flexDirection: 'column',
        justifyContent:'center',
        borderWidth:2,
        alignItems:'center',


    },

    Post_item:{
        width:355,
        height: 319,
        borderWidth:2,
        borderColor:'#4D3D64',
        marginTop:9,
        borderRadius:9,
        

    },
 

    Post_image:{
        width:344,
        height:146,
        borderWidth:2,
        borderColor:'#4D3D64',
        marginTop:104,
        marginBottom:69,
        alignSelf:'center',

    }






})