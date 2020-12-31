import React from "react";
import {  View, StyleSheet ,SafeAreaView ,StatusBar , Platform, Image} from "react-native";
import ButtonCampoo from "../components/ButtonCampoo";
import InputCampoo from "../components/InputCampoo";
import SecondaryButtonCampoo from "../components/SecondaryButtonCampoo";
import LabelCampoo from "../components/LabelCampoo";
import InputCampooSignup from  "../components/InputCampooSignup";

export default class ScreenLoginPage extends React.Component {

   //    <StatusBar style="dark" />
    render(){

       return(
          
          <SafeAreaView style={styles.container} >  
             
            <Image style={{width:115, height:115, left:260, top:0, marginTop:16,position:'absolute', }} source={require("../../assets/images/LogoCampoo.png")}/>
            <Image style={{width:271.64, height:271.64, left:-102.73, top:49.27, position:'absolute' }} source={require("../../assets/images/Baloo-accueil.png")}/>
            <Image style={{width:519.75, height:394.37, left:86, top:576,  position:'absolute' }} source={require("../../assets/images/BAloo-violet.png")}/>
             
            <View style={styles.loginview}>    
                  
                  <View style={styles.pseudo}>

                     <LabelCampoo style={styles.labelPseudo}>Pseudo</LabelCampoo>
                     <InputCampooSignup name="Pseudo" style={styles.InputPseudo}/>

                  </View>

                  <View>

                         <LabelCampoo style={styles.labelMotDePasse}>Mot de passe</LabelCampoo>
                     
                        <InputCampooSignup name="Mot de passe" secure={true} style={styles.InputMotDePasse}/>
                   
                         <ButtonCampoo style={styles.button}>Connexion</ButtonCampoo>
                  </View>

               <View>
                 
                  <SecondaryButtonCampoo style={styles.secondaryButton1}>Mot de passe oublié</SecondaryButtonCampoo>
                 
                  <SecondaryButtonCampoo style={styles.secondaryButton2}>S'incrire</SecondaryButtonCampoo>

               </View>

            </View>

          </SafeAreaView>
             
       );
    }
}

const styles = StyleSheet.create({

   container : {
      
      flex : 1,
      paddingTop : Platform.OS === "android" ? StatusBar.currentHeight: 1,
      flexDirection: 'column',
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:'#F0F0F3',
     
   },

   pseudo:{
      height:80,
      marginBottom:20,
   },

   labelPseudo:{

      marginBottom:-18,
      marginLeft:27,

   },
   labelMotDePasse:{
 
      marginBottom:-18,
      marginLeft:27,

   },
 
  loginview: {
   
     top:20,
     width : 300,
     height: 364,  
     
   },
   InputPseudo:{

      marginTop:0,
      paddingTop:0,
      paddingBottom:0,
     
  },


   InputMotDePasse:{
 
       marginBottom:57,
       
   },
 
   connexionText:{

      textAlign :'center',
      marginVertical:15,
      fontSize:16,
      color:'white',

   },

   button:{ 

      marginTop:57,
      alignSelf :'center',
      shadowColor: "#000",
      shadowOffset: {
         width:5,
         height: 15,
      },
      shadowOpacity: 0.1,
      shadowRadius:7,
      elevation: 14,
     
    },

    secondaryButton1:  {

       alignSelf:'center',
       marginTop:10,
   
     },

    secondaryButton2: {

      alignSelf:'center',
      marginTop:10,
 
    }

});