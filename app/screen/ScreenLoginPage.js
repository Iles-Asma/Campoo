
import React from "react";
import {  View, Text,Button, StyleSheet , SafeAreaView,StatusBar, Platform, TextInput } from "react-native";

export default class ScreenLoginPage extends React.Component {
    render(){
       return(
          <SafeAreaView style={styles.container} >
           
            <View style={styles.loginview}>

               <View style={styles.Inputview}>

                  <Text>Pseudo</Text>

                   <TextInput  style={styles.textinput} label='username' placeholder={'pseudonyme'} maxLength={15}
                   
                   />

               </View> 

               <View style={styles.Inputview}>
                  <Text>Mot de passe</Text>
                   <TextInput style={styles.textinput} label='password' placeholder={'mot de passe'} maxLength={15} />
               </View> 

               <View style={styles.buttonview}>

                  <Button title={'Connexion'}  style={{color: 'red', width:200,}}/>
             
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
      flexDirection: 'column',
     
   },

  loginview: {
       
       borderWidth : 3,
       borderColor :'blue',
       width : '95%',
       height: '60%',  
    
   },

   Inputview:{
       borderColor: 'black',
       borderWidth : 3, 
       height: '30%', 
       margin :'5%',
    
   },

   textinput : {
      
       height : 40,
       borderWidth : 2,
       borderColor : 'red',
       width: '100%',     

   },

   buttonview : {
    //    flex: 1,
    //    justifyContent :'center',
    //    alignItems: 'center',

      borderColor: 'black',
      borderWidth : 3, 
      margin :'5%',
      width : '50%',
      alignSelf:'center',
   
   },

});