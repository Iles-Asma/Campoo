'use strict';

import React from 'react';

import { StyleSheet,ScrollView,TextInput, Image,ImageBackground, StatusBar,TouchableOpacity, SafeAreaView, View, Text } from 'react-native';
import SettingsSvg from '../../components/SettingsSvg';
import PenSvg from '../../components/PenSvg';
import PostCampoo from '../../components/PostCampoo';
import MiniBtn from '../../components/MiniBtn';
 

export default class ViewAssocProfil extends React.Component{
   
    render() {   
 
        return(
<ScrollView showsVerticalScrollIndicator={false} >
           <SafeAreaView style={styles.container}>
{/* Contenaire  */}
            <View style={styles.assocIdContainer}>
              
                <View style={[styles.assocSettings, styles.gap]}>


  
    {/* Profil de l'image */}
                 <Image source={require("../../../assets/imgAssoc/AssocImg.png")} style={styles.profilPics}></Image>

                 <View style={[styles.profilReglage]}>
                 <MiniBtn>Suivre</MiniBtn>
                 </View>

                 
                  </View>
               
               </View>

{/* Le pseudo et nom de l'user */}
               <View style={styles.profilInfoContainer}> 
                <Text style={[styles.Pname, styles.colorViolet ]}>BDE Staps</Text>

                <Text style={[styles.nickName, styles.colorViolet]}> BDE Staps</Text>
               
               </View>

               {/* l'
               icone de son batiment et la description du profil */}
               <View style={styles.BioContainer}>
               <Image source={require("../../../assets/imgProfil/esieeIcon.png")} style={[styles.iconsBat, styles.gap]} ></Image>

               <Text style={[styles.bioBloc, styles.colorViolet]} > Bienvenue sur le profil de l’association de débats de l’ESIEE</Text>
               </View>

               
                   <Text style={[styles.colorViolet, styles.postTitle]}>Post</Text>
            
{/* les tags figurants sur le profil utilisateur */}

    {/* <View style={styles.tagsContainer}>
        <View style={styles.tagsContent}> */}

             <PostCampoo/> 
             <PostCampoo/>
               <PostCampoo/>  
           
    

            </SafeAreaView>

            </ScrollView>


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
    assocIdContainer:{
        flex:1,
        height:'10%', 
        width:'100%',
        // flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'white',

    },
    profilInfoContainer:{
        flex:1,
        height:'10%',
        width:'100%',
      marginTop:5,
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor:'white',

    },
    assocSettings:{
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
        // width: 25,
        // height: 25,
        position:'absolute',
        right:5,
       
        

    },
    assocModif:{
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
        flex:1,
        flexDirection:'row',
        height:'35%',
        width:'100%',
        alignItems:'center',
        position:'relative',
        borderBottomWidth:1,
        paddingBottom:15,
        borderColor:'rgba(158, 150, 150, .5)',
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
        // textAlign:'justify',
        flexShrink: 1, 
       
       
    },
    tagsContainer:{
        flex:1,
        // width:'100%',
        // // marginTop:5,
        
       
 
  
    
    },
    tagsContent:{
    // flex:1,
    // width:'100%',
    // marginBottom:25,
    // // // flexDirection:'row',
    // // flexWrap:'wrap',
    // justifyContent: 'center',
    // alignItems: 'center',
    
    },
    postTitle:{
        height:30,
        fontSize:17,
        fontWeight:'bold',
        marginLeft:20,
        marginTop:18,
        width:'100%',
       
    }


 
 });

