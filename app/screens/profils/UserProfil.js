'use strict';

import React from 'react';

import { StyleSheet,ScrollView,TextInput, Image,ImageBackground, StatusBar,TouchableOpacity, SafeAreaView, View, Text } from 'react-native';
import SettingsSvg from '../../components/SettingsSvg';
import PenSvg from '../../components/PenSvg';
import Tags from '../../components/Tags';

 

export default class UserProfil extends React.Component{
   
    render() {   
 
        return(

           <SafeAreaView style={styles.container}>
{/* Contenaire  */}
            <View style={styles.profilIdContainer}>
              
                <View style={[styles.profilSettings, styles.gap]}>


  
    {/* Profil de l'image */}
                 <Image source={require("../../../assets/imgProfil/Badeaubleu.png")} style={styles.profilPics}></Image>

                 <TouchableOpacity style={[styles.profilReglage]}>
                 <SettingsSvg   />
                 </TouchableOpacity>

                 <TouchableOpacity style={[styles.profilModif]}>
                 <PenSvg/>
                 </TouchableOpacity>
                  </View>
               
               </View>

{/* Le pseudo et nom de l'user */}
               <View style={styles.profilInfoContainer}> 
                <Text style={[styles.Pname, styles.colorViolet ]}> Entoinee</Text>

                <Text style={[styles.nickName, styles.colorViolet]}> LeBgDu667</Text>
               
               </View>

               {/* l'
               icone de son batiment et la description du profil */}
               <View style={styles.BioContainer}>
               <Image source={require("../../../assets/imgProfil/esieeIcon.png")} style={[styles.iconsBat, styles.gap]} ></Image>
               <Text style={[styles.bioBloc, styles.colorViolet]} > Nouvelle musique disponible sur toutes les platformes allez check  Nouvelle musique disponible sur toutes les platformes allez check Nouvelle musique disponible sur toutes les platformes allez check</Text>
               </View>

               
                   <Text style={[styles.colorViolet, styles.tagTitle]}>Centre d'intérêts:</Text>
            
{/* les tags figurants sur le profil utilisateur */}

    <View style={styles.tagsContainer}>
        <View style={styles.tagsContent}>

             <Tags> Musique</Tags>
             <Tags> Cinema</Tags>
             <Tags> Restaux</Tags>     
       

    
            <Tags> Livres</Tags>
            <Tags> Musées</Tags>
            <Tags> Natation</Tags> 

            <Tags> Musique</Tags>
             <Tags> Cinema</Tags>
             <Tags> Restaux</Tags>     
       

    
            <Tags> Livres</Tags>
            <Tags> Musées</Tags>
            <Tags> Natation</Tags>
     
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
       marginLeft:10,
       marginRight:15,
       
        position:'relative', 
       flexDirection: 'column',
        backgroundColor:'#fff',
         alignItems: 'center',
    },
    colorViolet:{
        color:'#4D3D64'
    },
    profilIdContainer:{
        flex:0,
        height:'20%', 
        width:'100%',
        // flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'white',

    },
    profilInfoContainer:{
        flex:0,
        height:'10%',
        width:'100%',
      
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor:'white',

    },
    profilSettings:{
        flex:1,
        width:'100%',   
        position:'relative',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',

    },

    profilPics:{
        width: 130,
        height: 130,
        borderRadius: 130 / 2,
    },
    profilReglage:{
        width: 25,
        height: 25,
        position:'absolute',
        right:75,
       
        

    },
    profilModif:{
        width: 25,
        height: 25,
        position:'absolute',
        right:30,
    
    },
    Pname:{
    fontSize:16,
    marginBottom:10,
    },
    nickName:{
        fontSize:30,
        fontWeight:'bold',
    },
    BioContainer:{
        flex:0.3,
        flexDirection:'row',
        height:'35%',
        width:'100%',
        alignItems:'center',
        position:'relative',
        // paddingLeft:10,
        // paddingRight:15,
        
        // justifyContent: 'space-between',
        // backgroundColor:'',

    },
    iconsBat:{
        flex:0,
        // position:'relative',
        // left:7,
        alignSelf:'center',
       marginLeft:10,
        width: 75,
        height: 65,
        
    },
    bioBloc:{
        
        width:'70%',
        height:'100%',
        alignSelf:'center',
        fontSize:14,
        marginLeft:25,
        marginTop:15,
        textAlign:'justify',
        flexShrink: 1, 
       
       
    },
    tagsContainer:{
        flex:1,
        width:'100%',
        // marginTop:5,
        
       
 
  
    
    },
    tagsContent:{
    flex:1,
    width:'100%',
    marginBottom:25,
    flexDirection:'row',
    flexWrap:'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    
    },
    tagTitle:{
        height:30,
        fontSize:17,
        marginLeft:20,
        marginTop:18,
        width:'100%',
       
    }


 
 });

