'use strict';

import React,{ useState } from 'react';

import { StyleSheet,Picker,ScrollView,TextInput, Image,ImageBackground, StatusBar , SafeAreaView, View, Text } from 'react-native';
import Tags from '../../components/Tags';
import PickerBatiments from "../../components/PickerBatiments";
import InputCampoo from "../../components/InputCampoo";
import LabelCampoo from "../../components/LabelCampoo";
import InputModifProfil from '../../components/InputModifProfil';
import InputBioProfil from '../../components/InputBioProfil';
 import PenSvg from "../../components/PenSvg";
import ButtonLarge from '../../components/ButtonLarge';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class UserModificationPage extends React.Component{
   
    render() {  
       
        return(
            // contenu generale

           <SafeAreaView style={styles.container}>

           {/* La navigation du haut */}
           <View style={styles.topNav}> 
           {/*Le onPress a mettre  */}
          <TouchableOpacity >
          <Text> Annuler</Text>
           </TouchableOpacity> 
            <Text style={styles.secondTitle}>Modification du Profil</Text>
           <TouchableOpacity >
          <Text> OK</Text>
           </TouchableOpacity> 

            </View>

{/* Contenaire des information a modifier */}
<ScrollView showsVerticalScrollIndicator={false} >
{/* Profil de l'image */}
            <View style={styles.profilModificationContainer}>

{/* Shadow Pen */}
 <View style={styles.penModif}>  
<TouchableOpacity>
         
    <PenSvg/>
    
</TouchableOpacity>    
 </View>   
 {/* Image */}
        <Image source={require("../../../assets/imgProfil/Badeaubleu.png")} style={styles.profilPics}></Image>
                   
               </View>

{/* Input et label pour les odification */}
<View style={styles.modificationContent}> 

     <LabelCampoo style={styles.nameLabel}>Pseudonyme</LabelCampoo>

    <InputModifProfil placeholder='Edudd77' />

    <Text style={styles.infoInput}>Ton pseudo doit rester raisonnable.</Text>


 <LabelCampoo style={styles.nameLabel}>Biographie </LabelCampoo>  

<InputBioProfil placeholder='Decris toi :)'/>

<Text style={styles.infoInput}>Ta bio doit te reflèter, ne soit pas vulgaire!</Text>


{/* Iput Option */}
<LabelCampoo style={styles.nameLabel}>Bâtiment Universitaire :</LabelCampoo> 

<PickerBatiments/>

{/* Parti Modification de tags */}

<LabelCampoo style={styles.nameLabel}> Tes tags :</LabelCampoo>
<View style={styles.tagsContainer}>
     <View style={styles.tagsContent}>

         

        <Tags> x Tag</Tags>
        <Tags> x Tag</Tags>
        <Tags> x Tag</Tags>     
       
        <Tags> x Tag</Tags>
        <Tags> x Tag</Tags>
        <Tags> x Tag</Tags> 
        
    </View>
</View>

    <View style={styles.btnContainer} >
<ButtonLarge> Modifies es tags </ButtonLarge>
    </View>


 </View>
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
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'white',

    },
    penModif:{
        position:"absolute",
        zIndex:100,
        backgroundColor:'rgba(158, 150, 150, .5)',
        padding:50,
        borderRadius: 60 / 1,
       
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
        flex:1,
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
    secondTitle:{
        fontSize:20,
        fontWeight:'bold',
        color:'#4D3D64',
    },
    topNav:{
        flex:0,
        justifyContent:"space-between",
        width:'100%',
        height:35,
        flexDirection:'row',
    
    },


 
 });
