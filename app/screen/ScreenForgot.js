import React from 'react';

import{StyleSheet, Image, StatusBar, SafeAreaView, View,Platform, Text, Button} from 'react-native';

import InputCampoo from  "../components/InputCampoo";
import ButtonCampoo from "../components/ButtonCampoo"; 
import SecondaryButtonCampoo from '../components/SecondaryButtonCampoo';

export default class ScreenForgot extends React.Component {

    render(){

        return (

            <SafeAreaView style={styles.container}>
      
                   <Image style={styles.logoCampoo} source={require("../../assets/images/LogoCampoo.png")}/> 
                   <Image style={styles.baloo} source={this.props.url}/>
                
              <View style={styles.forgotView}>

                 <InputCampoo name={this.props.name} style={styles.InputView} description={this.props.description}/> 
            
                  <ButtonCampoo style={styles.button}>Suivant</ButtonCampoo>

                  <SecondaryButtonCampoo  style={styles.retour}>Retour</SecondaryButtonCampoo>

              </View>

            </SafeAreaView>

        );
    }


}


const styles  = StyleSheet.create({

   container:{

    flex : 1,
    paddingTop : Platform.OS === "android" ? StatusBar.currentHeight: 0,
    justifyContent:'flex-start',
    alignItems:'center', 
    backgroundColor:'#F0F0F3',
 
    },

    logoCampoo:{

        position:'absolute',
        width:115, 
        height:115, 
        marginTop:20,
        left:260
     
    },

    InputView:{

        alignSelf:'center',
        
    },

    forgotView:{

        height:290,
        width:300,
        top:118,
     
    },

    button: {

        alignSelf:'center',
        marginTop:82,
        marginBottom:10,

    },

    baloo :{
        position:"absolute",
        width:559, 
        height:438, 
        left:38, 
        top:440,
    },


     retour:{
         alignSelf:'center',
         marginTop:10,

     },

    


})