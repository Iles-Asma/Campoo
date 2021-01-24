	
'use strict';

import React from 'react';

import { StyleSheet,TextInput, Image,ImageBackground, StatusBar , SafeAreaView, View, Platform, Text } from 'react-native';
import styles from '../../../assets/profilStyles/profilUserStyle.js';


export default class UserProfil extends React.Component{
   
    render() {

        return(

           <SafeAreaView style={styles.container}>

            <View style={styles.profilIdContainer}>
                <View style={[styles.profilSettings, styles.gap]}>


      {/* <Text style={styles.text}>Inside</Text> */}
    
                 <Image source={require("../../../assets/imgProfil/Badeaubleu.png")} style={styles.profilPics}></Image>
                 <Image  source={require("../../../assets/imgProfil/reglage.png")} style={[styles.profilReglage, styles.gap]}></Image>
                 <Image source={require("../../../assets/imgProfil/pen.png")} style={[styles.profilModif, styles.gap]}></Image>
                  </View>
               
               </View>

               <View style={styles.profilInfoContainer}> 
                <Text style={[styles.Pname, styles.colorViolet ]}> Entoinee</Text>

                <Text style={[styles.nickName, styles.colorViolet]}> LeBgDu667</Text>
               
               </View>
               {/* description du profil */}
               <View style={styles.BioContainer}>
               <Image source={require("../../../assets/imgProfil/esieeIcon.png")} style={[styles.iconsBat, styles.gap]} ></Image>
               <Text style={[styles.bioBloc, styles.colorViolet]} > Nouvelle musique disponible sur toutes les platformes allez check :) Nouvelle musique disponible sur toutes les platformes allez check :( Nouvelle musique disponible sur toutes les platformes allez check :</Text>
               </View>
               <View style={styles.tagTitle}>
                   <Text style={styles.colorViolet}>Centre d'intérêts:</Text>
               </View>
             

     
             
             

                

            
            </SafeAreaView>




        );
    }
};

