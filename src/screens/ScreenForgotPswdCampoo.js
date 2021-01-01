import React from 'react';
import{StyleSheet, Image, StatusBar, SafeAreaView, View,Platform, Text, Button} from 'react-native';
import ButtonCampoo from "../components/ButtonCampoo"; 
import SecondaryButtonCampoo from '../components/SecondaryButtonCampoo';
import InputCampooSignup from '../components/InputCampooSignup';
import LabelCampoo from '../components/LabelCampoo';

export default class ScreenForgotPswdCampoo extends React.Component {

    render(){

        return (

            <SafeAreaView style={styles.container}>
      
                   <Image style={styles.logoCampoo} source={require("../../assets/images/LogoCampoo.png")}/> 
                   <Image style={styles.baloo} source={this.props.url}/>
                
              <View style={styles.forgotView}>

                    <View>

                       <LabelCampoo style={styles.ForgotPswd1}>Mot de passe</LabelCampoo>

                       <InputCampooSignup secure={true} style={styles.InputView1} description={this.props.description}/>
                 
                    </View>

                    <View>

                       <LabelCampoo style={styles.ForgotPswd2}>Vérification</LabelCampoo>
  
                       <InputCampooSignup  secure={true} style={styles.InputView2}/>
                    </View>

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
    
 
    },

    logoCampoo:{

        position:'absolute',
        width:115, 
        height:115, 
        marginTop:20,
        left:260
     
    },

    ForgotPswd1:{

        marginBottom:9,
  
     },

     ForgotPswd2:{

        marginBottom:-18,

     },

    InputView1:{

        marginBottom:27,
 
    },

    InputView2:{

        marginBottom:57,

        
    },

    forgotView:{

        height:389,
        width:300,
        top:118,
     
    },

    button: {

        alignSelf:'center', 
        marginBottom:7,
        shadowColor: "#000",
        shadowOffset: {
           width:5,
           height: 15,
        },
        shadowOpacity: 0.1,
        shadowRadius:7,
        elevation: 14,  

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

     },
})