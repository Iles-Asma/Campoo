
import React from "react";
import {  View, Text,Button, StyleSheet , SafeAreaView,StatusBar, Platform, TextInput } from "react-native";

export default class ScreenLoginPage extends React.Component {
    render(){
       return(
          <SafeAreaView style={styles.container} >
           
            <View style={styles.loginview}>

               <View style={styles.Inputview}>
                  <Text>Pseudo</Text>
                   <TextInput style={styles.textinput}/>
               </View> 

               <View style={styles.Inputview}>
                  <Text>Mot de passe</Text>
                   <TextInput style={styles.textinput}/>
               </View> 





            </View>

          </SafeAreaView>
             


       );


    }
}

const styles = StyleSheet.create({
   container : {
      flex : 1,
      backgroundColor :'white',
      paddingTop : Platform.OS === "android" ? StatusBar.currentHeight: 0,
      borderWidth : 3,
      borderColor: 'green',
      justifyContent :'center',
      alignItems : 'center',
     
   },

  loginview: {
      
       borderWidth : 3,
       borderColor :'blue',
       width : '95%',
       height: '80%',  
   },



   Inputview:{
       borderColor: 'black',
       borderWidth : 3,
       margin :10,
       flex: 0.1,
       flexDirection :'column',
       justifyContent : 'flex-start',
       height:40,
             


   },


   textinput : {
      
       height : 40,
       borderWidth : 2,
       borderColor : 'red',
       width: '100%',     

   }




});