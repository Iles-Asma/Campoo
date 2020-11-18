import React from 'react';

import{StyleSheet, Image, StatusBar, SafeAreaView, View, Text, Button} from 'react-native';


import ButtonCampoo from "../components/ButtonCampoo"; 
import LabelCampoo from '../components/LabelCampoo';
import SecondaryButtonCampoo from '../components/SecondaryButtonCampoo';





export default class ScreenAnimals extends React.Component {

    render(){


        return (

            <SafeAreaView style={styles.container}>

              <View>
                 <Image style={styles.logo} source={require("../../assets/images/logoCampoo.png")}/>
                 
              </View>

              <View style={styles.spiritualView}>

               <LabelCampoo style={styles.spiritLabel}>{this.props.name}</LabelCampoo> 

                  
                <Text style={styles.textSpiritual}>{this.props.description}</Text>
                
              <View>
                 <Image style={styles.spiritAnimal} source={require("../../assets/images/spiritianimal.png")}/>
                 
              </View>

            

                   <ButtonCampoo style={styles.button}>Suivant</ButtonCampoo>


                   <SecondaryButtonCampoo  style={styles.retour}>Passer</SecondaryButtonCampoo>

            
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

    spiritLabel:{
        marginBottom:15,
        marginLeft:10,
    },

    spiritAnimal:{
        width :110,
        height:104,
        alignSelf:'center',

    },

    spiritualView:{

        height:250,
        width:324,
        alignSelf:'center',
     
    },

    button: {
        alignSelf:'center',
        marginTop:20,
        marginBottom:0,

    },

    crapoo :{
        width:460, 
        height:400, 
        left:75.27, 
        top:20,
    },

     textSpiritual:{

        fontSize:11,
        textAlign:'center',
        color:'#4D3D64',
        marginBottom:10,
        
       
     },

     retour:{
         alignSelf:'center',
         marginTop:10,

     },

    


})