'use strict';

import React,{ useState } from 'react';

import { StyleSheet,Picker,ScrollView,TextInput, Image,ImageBackground, StatusBar , SafeAreaView, View, Text } from 'react-native';
import Tags from '../../components/Tags';
import PickerBatiments from "../../components/PickerBatiments";
import InputCampoo from "../../components/InputCampoo";
import LabelCampoo from "../../components/LabelCampoo";
import InputModifProfil from '../../components/InputModifProfil';
import InputBioProfil from '../../components/InputBioProfil';
 
import ButtonTag from '../../components/ButtonTag';

export default class UserModificationPage extends React.Component{
   
    render() {  
       
        return(

           <SafeAreaView style={styles.container}>
{/* Contenaire  */}
<ScrollView showsVerticalScrollIndicator={false} >
            <View style={styles.profilModificationContainer}>
              
                <View style={[styles.profilSettings, styles.gap]}>


  
    {/* Profil de l'image */}
                 <Image source={require("../../../assets/imgProfil/Badeaubleu.png")} style={styles.profilPics}></Image>
                  </View>
               
               </View>


               <View style={styles.modificationContent}> 
               <LabelCampoo style={styles.nameLabel}>Pseudonyme</LabelCampoo>

              <InputModifProfil placeholder='Edudd77' />

       <Text style={styles.infoInput}>Ton pseudo doit rester raisonnable.</Text>
       
       <LabelCampoo style={styles.nameLabel}>Biographie Bio?</LabelCampoo>          
<InputBioProfil placeholder='Decris toi :)'/>

<Text style={styles.infoInput}>Ta bio doit te reflèter, ne soit pas vulgaire!</Text>

<LabelCampoo style={styles.nameLabel}>Bâtiment Universitaire :</LabelCampoo> 

<PickerBatiments/>


<LabelCampoo style={styles.nameLabel}>Modifies tes tags :</LabelCampoo>
<View style={styles.tagsContainer}>
        <View style={styles.tagsContent}>

         

        <Tags> + Tag</Tags>
            <Tags> + Tag</Tags>
            <Tags> + Tag</Tags>     
      
           <Tags> + Tag</Tags>
           <Tags> + Tag</Tags>
          <Tags> + Tag</Tags> 
        </View>
        
     </View>
<View style={styles.btnContainer} >
<ButtonTag> Tes tags </ButtonTag>
</View>
               </View> 

                 

  
            
{/* les 6 tags figurants sur le profil utilisateur */}

    
     </ScrollView>

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
    colorViolet:{
        color:'#4D3D64',
    },
    profilModificationContainer:{
        flex:0,
        height:'25%', 
        width:'100%',
        // flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'white',

    },
    profilPics:{
        width: 130,
        height: 130,
        borderRadius: 130 / 2,
    },
    modificationContent:{
        flex:1,
        justifyContent:'flex-start',
        width:'100%',
    },
    nameLabel:{
       
        fontSize:30,
        marginTop:15,
        marginBottom:5,
        fontWeight:'bold',
    },
 
    infoInput:{
        fontSize:12,
        flex:0,
        marginTop:10,
        alignSelf:"flex-end",
        marginRight:5,
        color:'#4D3D64'
    },
    btnContainer:{
        flex:2,
        width:'100%',
        marginVertical:20,
        justifyContent:'center',
        alignItems:'center',
        
    },
    tagsContainer:{
        flex:1,
        width:'100%',
        marginTop:5,
    },
    tagsContent:{
    flex:1,
    width:'100%',
    marginBottom:25,
    flexWrap:'wrap',
    flexDirection:'row', 
    justifyContent: 'center',
    alignItems: 'center',
    },
    tagTitle:{
        height:30,
        marginTop:10,
        width:'100%',
       
    },


 
 });
