'use strict';

import React from 'react';
import { StyleSheet,StatusBar,TouchableOpacity, SafeAreaView,ScrollView, View, Text } from 'react-native';

import ButtonSettings from '../../components/ButtonSettings';
import ButtonCampoo from '../../components/ButtonCampoo';
import ButtonLarge  from "../../components/ButtonLarge";

export default class SettingPage extends React.Component {

 NamePace(){
return 

 }
    render() {
        

        return (

            <SafeAreaView style={styles.container}>
    
 <View style={styles.settingsContent}>          
 <ScrollView style={styles.SizeOnScroll} showsVerticalScrollIndicator={false} >
                         
{/* Les differents tags */}

<View style={styles.settingsTitle}>
    <Text > Compte </Text>
</View>
        <TouchableOpacity>
            <ButtonSettings> Prénom</ButtonSettings>
        </TouchableOpacity>   

        <TouchableOpacity>
            <ButtonSettings> Mot de passe</ButtonSettings>
        </TouchableOpacity> 

                <TouchableOpacity>
            <ButtonSettings> Devenir un compte associatif</ButtonSettings>
        </TouchableOpacity> 

<View style={styles.settingsTitle}>
    <Text > Contactez-nous </Text>
</View>

        <TouchableOpacity>
            <ButtonSettings> Aide et assistance</ButtonSettings>
        </TouchableOpacity> 

<View style={styles.settingsTitle}>
    <Text > Communauté </Text>
</View>

        <TouchableOpacity>
            <ButtonSettings> Régles de la Communauté</ButtonSettings>
        </TouchableOpacity> 

        <View style={styles.settingsTitle}>
    <Text > Mentions légales </Text>
</View>

        <TouchableOpacity>
            <ButtonSettings> Politique de Confidentailité</ButtonSettings>
        </TouchableOpacity> 

        <TouchableOpacity>
            <ButtonSettings> Conditions générales d’utilisation</ButtonSettings>
        </TouchableOpacity> 

<View style={styles.GeneraleBtnContainer}>

<ButtonCampoo>Déconnexion</ButtonCampoo>
<ButtonLarge style={styles.leaveBtn}>Supprimer mon compte</ButtonLarge>


</View>

            
            </ScrollView>

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
         position:'relative',
         margin:15,
         backgroundColor:'#fff',
        //   alignItems: 'center',
         
     },
     settingsContent:{
         marginTop:40,

     },
     settingsTitle:{
        flex:1,
        height:50,
        width:'100%',
        borderBottomWidth:1,
        justifyContent:'center',
        borderColor:'rgba(158, 150, 150, .3)',
     },
     FakePlaceholder:{
         flex:1,
         width:'100%',
         justifyContent:'flex-end'
     },
     GeneraleBtnContainer:{
         flex:2,
         width:'100%',
         marginTop:50,
         justifyContent:"center",
         alignItems:'center',
         color:'#fff',
     },
     leaveBtn:{
         zIndex:200,
         marginTop:15,
         borderRadius:15, 
         backgroundColor:'#EB7653',
         
        
     }
     
});