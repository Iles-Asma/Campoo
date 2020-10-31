
import React from "react";
import {  TouchableOpacity,View, Text,Button, StyleSheet , SafeAreaView,StatusBar, Platform, TextInput } from "react-native";

export default class ScreenLoginPage extends React.Component {
    render(){
       return(
          <SafeAreaView style={styles.container} >
           
            <View style={styles.loginview}>

               <View style={styles.Inputview1}>

                  <Text   style={styles.pseudoMdp} >Pseudo</Text>

                   <TextInput  style={styles.textinput} label='username' placeholder={'pseudonyme'} maxLength={15}
                   
                   />

               </View> 

               <View style={styles.Inputview2}>

                  <Text style={styles.pseudoMdp} >Mot de passe</Text>

                   <TextInput style={styles.textinput} label='password' placeholder={'mot de passe'} maxLength={15} />

               </View> 

               <View >

                  <TouchableOpacity title={'Connexion'}  style={{ color: "white", borderRadius:5,  width:150, height:50, backgroundColor: '#4D3D64', marginTop:30, marginBottom:28, margin:75,}} >
                     <Text style={styles.connexionText}>Connexion</Text>
                  </TouchableOpacity>
                 
             
               </View> 

            </View>

          </SafeAreaView>
             
       );
    }
}

const styles = StyleSheet.create({
   container : {
      flex : 1,

      paddingTop : Platform.OS === "android" ? StatusBar.currentHeight: 0,
      borderWidth : 3,
      borderColor: 'green',
    
      alignItems:'center',
      justifyContent:'center',
      flexDirection: 'column',
     
   },

  loginview: {
       
  
       width : 300,
       height: 270,  
    
   },

   Inputview1:{
   

       width :"100%",
       marginBottom:20,
    
    
   },

   Inputview2:{
    
  
      
      width :"100%",
     
   
   
  },

   textinput : {
      
       height : 30,
       borderWidth : 2,
       borderColor : '#4D3D64',
       width :"100%",
       borderRadius:5,
       

   },

 

   pseudoMdp:{
      marginBottom :10,
      marginLeft:8,
      fontSize :25.89,
     
   },
   connexionText:{
      textAlign :'center',
      marginVertical:15,
      fontSize:16,
      color:'white',

   }

 

});