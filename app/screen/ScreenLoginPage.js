
import React from "react";
import {  TouchableOpacity,View, Text,Button, StyleSheet , SafeAreaView,StatusBar, Platform, TextInput,Image } from "react-native";

export default class ScreenLoginPage extends React.Component {
    render(){
       return(
          <SafeAreaView style={styles.container} >

             <Image style={{width:300, height:300,  left:-110.16, top :10, }} source={require("../../assets/images/Poulpe.png")}/>
             <Image style={{width:500, height:500,   left:125.16, top :30,  zIndex:-5,  }} source={require("../../assets/images/Baleine.png")}/>
             <Image style={{width:100, height:100, left:275,top:-780, }} source={require("../../assets/images/logoCampoo.png")}/>
           
            <View style={styles.loginview}>

               <View style={styles.Inputview1}>

                  <Text   style={styles.pseudoMdp} >Pseudo</Text>

                   <TextInput  style={styles.textinput} label='username'  maxLength={15}
                   
                   />

               </View> 

               <View style={styles.Inputview2}>

                  <Text style={styles.pseudoMdp} >Mot de passe</Text>

                   <TextInput style={styles.textinput} label='password'  maxLength={15} />

               </View> 

               <View >

                  <TouchableOpacity title={'Connexion'}  style={{ color: "white", borderRadius:5,  width:150, height:50, backgroundColor: '#4D3D64', marginTop:30, marginBottom:28, margin:75,}} >
                     
                     <Text style={styles.connexionText}>Connexion</Text>

                  </TouchableOpacity>

                  <TouchableOpacity title={"S'inscrire"}   >
                     
                     <Text style={styles.register}>S'inscrire</Text>

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
      flexDirection: 'column',
      
   },

  loginview: {
     alignSelf:'center',
       top:-660,
       width : 300,
       height: 270,  
       zIndex:5,
       
    
   },

   Inputview1:{
      
       width :"100%",
       marginBottom:20,
       
    
   },

   Inputview2:{
       
      width :"100%",
     
  },

   textinput : {
       paddingHorizontal:10,
       textAlignVertical:'center',
       height : 30,
       borderWidth : 1.5 ,
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

   },

   register:{ 
      alignSelf:'center',
      marginVertical:-20,
      color:'#62BBC5',
      fontSize:15,

   },

 

});