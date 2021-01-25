'use strict';

import React from 'react';

import { StyleSheet,TextInput, Image,ImageBackground, StatusBar , SafeAreaView, View, Text } from 'react-native';
import UserTags from '../../components/UserTags';
// L'importation du style
import styles from '../../../assets/profilStyles/profilUserStyle.js';
 

export default class UserProfil extends React.Component{
   
    render() {   
 
        return(

           <SafeAreaView style={styles.container}>
{/* Contenaire  */}
            <View style={styles.profilIdContainer}>
              
                <View style={[styles.profilSettings, styles.gap]}>


  
    {/* Profil de l'image */}
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
               <Text style={[styles.bioBloc, styles.colorViolet]} > Nouvelle musique disponible sur toutes les platformes allez check  Nouvelle musique disponible sur toutes les platformes allez check Nouvelle musique disponible sur toutes les platformes allez check</Text>
               </View>

               <View style={styles.tagTitle}>
                   <Text style={[styles.colorViolet]}>Centre d'intérêts:</Text>
               </View>
{/* les 6 tags figurants sur le profil utilisateur */}
    <View style={styles.tagsContainer}>
        <View style={styles.tagsContent}>
             <UserTags/>
             <UserTags/>
             <UserTags/>      
        </View>

        <View style={styles.tagsContent}>
             <UserTags/>
             <UserTags/>
             <UserTags/>      
        </View>
        
     </View>
            </SafeAreaView>




        );
    }
};

