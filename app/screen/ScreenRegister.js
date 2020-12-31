import React from 'react';

import{StyleSheet, Image, StatusBar, SafeAreaView, View, Platform, Text, Button} from 'react-native';

import InputCampoo from  "../components/InputCampoo";
import ButtonCampoo from "../components/ButtonCampoo"; 
import SecondaryButtonCampoo from '../components/SecondaryButtonCampoo';





export default class ScreenRegister extends React.Component {

    render(){


        return (

            <SafeAreaView style={styles.container}>
     
               <Image style={styles.logoCampoo} source={require("../../assets/images/LogoCampoo.png")}/>
               <Image style={styles.baloo} source={this.props.url}/> 

              <View style={styles.mailView}>
                
                  <InputCampoo name={this.props.name} style={styles.InputView} description={this.props.description}  info={this.props.info}/> 
            
                  <ButtonCampoo style={styles.button}>Suivant</ButtonCampoo>

                  <SecondaryButtonCampoo  style={styles.Retour}>retour</SecondaryButtonCampoo>
            
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

        //alignContent:'flex-start',
       textAlign:'center',
       //borderWidth:1,
       
    },

    mailView:{

        height:290,
        width:300,
       top:118,
     
    },

    button: {

        alignSelf:'center',
        marginBottom:10,
        marginTop:82,
        // Drop Shadow 
        shadowColor: "#000",
        shadowOffset: {
           width:5,
           height: 15,
        },
        shadowOpacity: 0.1,
        shadowRadius:7,
        elevation: 14,
       

    },

   baloo:{

        position:'absolute',
        width:559, 
        height:438, 
        left:38, 
        top:440,

    },

     Retour:{

         alignSelf:'center',

     },

    


})