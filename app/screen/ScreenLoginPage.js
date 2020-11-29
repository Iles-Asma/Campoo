
import React from "react";
import {  View, StyleSheet ,SafeAreaView ,StatusBar , Platform, Image } from "react-native";
import ButtonCampoo from "../components/ButtonCampoo";
import InputCampoo from "../components/InputCampoo";
import SecondaryButtonCampoo from "../components/SecondaryButtonCampoo";

export default class ScreenLoginPage extends React.Component {
    render(){
       return(

          <SafeAreaView style={styles.container} >  

             <Image style={{width:218.83, height:219.17, left:-80.42, top :10, }} source={require("../../assets/images/baloostudent.png")}/>
             <Image style={{width:518.23, height:529.49, left:135,  top :40,  }} source={require("../../assets/images/ponpondroite.png")}/>
             <Image style={{width:100, height:100, left:275, top:-780,  }} source={require("../../assets/images/logoCampoo.png")}/>
           
            <View style={styles.loginview}>    

               <InputCampoo name="Pseudo" style={styles.Inputview1}/>

               <InputCampoo name="Mot de passe" secure={true} style={styles.Inputview1}/>

           
               <ButtonCampoo style={styles.button}>Connexion</ButtonCampoo>

               <View style={styles.buttonContainer}>
                 
                  <SecondaryButtonCampoo style={styles.secondaryButton}>Mot de passe oublié</SecondaryButtonCampoo>
                 
                  <SecondaryButtonCampoo style={styles.secondaryButton}>S'incrire</SecondaryButtonCampoo>

               </View>

            </View>

          </SafeAreaView>
             
       );
    }
}

const styles = StyleSheet.create({

   container : {
      flex : 1,
      paddingTop : Platform.OS === "android" ? StatusBar.currentHeight: 0,
      flexDirection: 'column',
   },
  loginview: {
       alignSelf:'center',
       top:-700,
       width : 300,
       height: 270,  
     
   },
   Inputview1:{
       marginBottom:20
   },
   connexionText:{

      textAlign :'center',
      marginVertical:15,
      fontSize:16,
      color:'white',

   },
   register:{ 
      alignSelf:'center',
      marginVertical:-20,
      color:'#62BBC5',
      fontSize:15,

   },
   button:{ 
      marginTop:30,
      alignSelf :'center'
    },

    buttonContainer: {
      borderColor:'red',
    },
    secondaryButton: {
      alignSelf:'center',
      marginTop:10
    }

});