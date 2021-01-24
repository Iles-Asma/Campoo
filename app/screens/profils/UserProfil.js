
import React from 'react';

import { StyleSheet, Image,ImageBackground, StatusBar , SafeAreaView, View, Platform, Text } from 'react-native';
//  import ReglageIcon from 'assets/images/reglage.svg';
//  const image = { uri: "../assets/imgProfil/Badeaubleu.png" };
export default class UserProfil extends React.Component{
   
    render() {

        return(

           <SafeAreaView style={styles.container}>

                <Image source={require("assets/images/PDP.png")} />
                <View style={styles.profilIdContainer}>
                <View style={[styles.profilSettings, styles.gap]}>


      {/* <Text style={styles.text}>Inside</Text> */}
    
                 <View style={styles.profilPics}></View>
                 <View style={[styles.profilReglage, styles.gap]}></View>
                 <View style={[styles.profilModif, styles.gap]}></View>
                 
                  </View>
               
               </View>

               <View style={styles.profil}> 
                <Text> kvjhvh</Text>

               </View>
             

                

            
            </SafeAreaView>




        );
    }
};


const styles = StyleSheet.create({

    container: {
 
       flex: 1,
        position:'relative',
       flexDirection: 'column',
        backgroundColor:'red',
         alignItems: 'center',
        // justifyContent: 'center',
 
 
    },
    // gap:{
    //     marginRight: 10,
    // },
    profilIdContainer:{
        flex:0,
        height:'30%', 
        width:'100%',
        // flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'white',

    },
    profil:{
        flex:0.1,
        height:'5%',
        // flex:10,
        
        width:'100%',
        // flexDirection: 'row',
        // alignItems: 'center',
        // justifyContent: 'center',
        backgroundColor:'black',

    },
    profilSettings:{
        flex:1,
        width:'100%',
        
        position:'relative',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',

    },

    profilPics:{
       
        
        width: 130,
        height: 130,
        borderRadius: 130 / 2,
        backgroundColor:'black',
    },
    profilReglage:{
        width: 30,
        height: 30,
        position:'absolute',
        right:75,
        borderRadius: 30 / 2,
        backgroundColor:'black',

    },
    profilModif:{
        width: 30,
        height: 30,
        position:'absolute',
        right:30,
        borderRadius: 30 / 2,
        backgroundColor:'black',
    },
 

 
 });