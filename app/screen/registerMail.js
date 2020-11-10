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

                  
              <Text style={styles.textMail}>Pour que Crapoo vérifie que tu es un étudiant du campus !</Text>

                 <InputCampoo name="Email etudiant" style={styles.InputView}/> 
            

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
        
    },

    mailView:{

        height:250,
        width:324,
        alignSelf:'center',
     
    },

    button: {
        alignSelf:'center',
        marginTop:58,
        marginBottom:0,

    },

    crapoo :{
        width:480, 
        height:400, 
        left:-10, 
        top:-10,
    },

     textMail:{

        fontSize:11,
        textAlign:'center',
        color:'#4D3D64',
        top:55,
       
     },

     login:{
         alignSelf:'center',
         marginTop:10,

     },

    


})