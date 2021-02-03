'use strict';

import React,{ useState } from 'react';

import { StyleSheet,Picker,ScrollView,TextInput, Image,ImageBackground, StatusBar , SafeAreaView, View, Text } from 'react-native';
import LabelCampoo from "../../components/LabelCampoo";
import InputModifProfil from '../../components/InputModifProfil';
import InputBioProfil from '../../components/InputBioProfil';
 
import ButtonCampoo from '../../components/ButtonCampoo';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class ChangeName extends React.Component{
   
    render() {  
       
        return(
            // contenu generale

           <SafeAreaView style={styles.container}>


<View style={styles.modificationContent}> 

     <LabelCampoo style={styles.nameLabel}>Prénom:</LabelCampoo>

    <InputModifProfil placeholder='Edudd77' />

  

    <View style={styles.btnContainer} >
<ButtonCampoo> Valider </ButtonCampoo>
    </View>


 </View>
   
</SafeAreaView>




        );
    }
};


const styles = StyleSheet.create({

    container: {
 
       flex: 1,
       paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
       marginLeft:15,
       marginRight:15,
       
        position:'relative', 
       flexDirection: 'column',
        backgroundColor:'#fff',
       
        //  alignItems: 'center',
    },
    nameLabel:{
        marginBottom:10,
    },
    modificationContent:{
        marginTop:25,
    },
    btnContainer:{
        flex:0,
        width:'100%',
        marginTop:25,
        justifyContent:'center',
        alignItems:'center',

    }

 
 });
