import React from 'react';

import{StyleSheet, Image, StatusBar, SafeAreaView, View, Text} from 'react-native';

import InputCampoo from  "../components/InputCampoo";
import ButtonCampoo from "../components/ButtonCampoo"; 
import SecondaryButtonCampoo from '../components/SecondaryButtonCampoo';





export default class RegisterMail extends React.Component {

    render(){


        return (

            <SafeAreaView style={styles.container}> 
    
              

              <View>
                 <Image style={styles.logo} source={require("../../assets/images/logoCampoo.png")}/>
                 
              </View>


              <View style={styles.mailView}>

                 <InputCampoo name="Email etudiant" style={styles.InputView}/> 

                 <Text style={styles.textMail}>Pour que Crapoo vérifie que tu es un étudiant du campus !</Text>

                  <ButtonCampoo style={styles.button}>Suivant</ButtonCampoo>


                  <SecondaryButtonCampoo  style={styles.login}>Se connecter</SecondaryButtonCampoo>

              </View>




              <View>
                 <Image style={styles.crapoo} source={require("../../assets/images/CrapooEtud.png")}/>
              </View>

            </SafeAreaView>


        );
    }


}


const styles  = StyleSheet.create({


   container:{
    flex : 1,
    paddingTop : Platform.OS === "android" ? StatusBar.currentHeight: 0,
    flexDirection: 'column',  
 
    },

    logo:{
        width:100, 
        height:100, 
        left:275,

    },

    InputView:{
        alignSelf:'center',
        top:30,

    },

    mailView:{
    
        height:209,
        width:324,
        alignSelf:'center',

    },

    button: {
        alignSelf:'center',
        top:60,

    },

   

    crapoo :{
        width:580, 
        height:500, 
        left:-34, 
        top:-40,

    },


     textMail:{

        fontSize:11,
        textAlign:'center',
        top:44,
        color:'#4D3D64',

     },

    


     login:{
         alignSelf:'center',
         top:65,

     },

     



    










})