import React, { Component } from "react";
import { View,  StyleSheet, SafeAreaView } from "react-native";
import {Picker} from '@react-native-picker/picker';

// npm install @react-native-picker/picker --save PS : sa fait crache le projet apres l'installation 
// Erreur affiche : "super expression must either be null or a function"


export default class PickerCampoo extends React.Component {

   state = {
        question: 'tamere',
      };

      render(){
   
   
         return(
          
            <SafeAreaView style={styles.container}>
             <View style={styles.picker}>  
             <Picker
               selectedValue={this.state.question}
               
                onValueChange={(itemValue, itemIndex) => this.setState({question: itemValue})}>
               <Picker.Item label="Tamere" value="tamere" />
               <Picker.Item label="JavaScript" value="js" />
               <Picker.Item label="JavaScript" value="js" />
               <Picker.Item label="JavaScript" value="js" />
              </Picker>
              </View> 
             </SafeAreaView>

          );
       }
          
      
    }
  //export default  PickerCampoo;

 const styles = StyleSheet.create({
     container: {
       flex: 0.5,
       flexDirection:'column',
       
       alignItems: "center",
       justifyContent:'center',
        borderWidth:2,
        borderColor:'red',
      
       

         
    },


    picker:{
        height: 60,
        width: "80%",
    
          
        borderWidth:1,
        borderColor:'red',
        zIndex:99999,
          
        borderWidth:4



    }
   });

