import React from 'react';

import{StyleSheet, Image, StatusBar, SafeAreaView, View, Text, Button} from 'react-native';

import InputCampoo from  "../components/InputCampoo";
import ButtonCampoo from "../components/ButtonCampoo"; 
import SecondaryButtonCampoo from '../components/SecondaryButtonCampoo';





export default class ScreenRegister extends React.Component {

    render(){


        return (

            <SafeAreaView style={styles.container}>

              <View>
                 <Image style={styles.logo} source={require("../../assets/images/logoCampoo.png")}/>
                 
              </View>

              <View style={styles.mailView}>

                  
              

                 <InputCampoo name={this.props.name} style={styles.InputView} description={this.props.description}/> 
            

                  <ButtonCampoo style={styles.button}>Suivant</ButtonCampoo>


                  <SecondaryButtonCampoo  style={styles.retour}></SecondaryButtonCampoo>

            
              </View>

              <View>
                 <Image style={styles.crapoo} source={this.props.url}/>
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
        width:460, 
        height:400, 
        left:75.27, 
        top:20,
    },


     retour:{
         alignSelf:'center',
         marginTop:10,

     },

    


})