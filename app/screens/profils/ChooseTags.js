'use strict';

import React from 'react';
import { StyleSheet, SafeAreaView,ScrollView, View, Text } from 'react-native';
import UserTags from '../../components/UserTags';

export default class ChooseTags extends React.Component {

 

    render() {

        return (

            <SafeAreaView style={styles.container}>
            {/* Titre de l'onglet */}
              <Text style={styles.titleText}>Choisis un tag</Text>              
{/* Les differents tags (Mauvais code) */}
                <View style={styles.tagsContainer}>
        <View style={styles.tagsContent}>
             <UserTags/>
             <UserTags/>
             <UserTags/>      
        </View>

        <View style={styles.tagsContent}>
             <UserTags/>
             <UserTags/>
             <UserTags/>      
        </View>
        <View style={styles.tagsContent}>
             <UserTags/>
             <UserTags/>
             <UserTags/>      
        </View>
        <View style={styles.tagsContent}>
             <UserTags/>
             <UserTags/>
             <UserTags/>      
        </View>
        <View style={styles.tagsContent}>
             <UserTags/>
             <UserTags/>
             <UserTags/>      
        </View>
        
             </View>
             
            
            </SafeAreaView>

        );



    }


}


const styles = StyleSheet.create({

    container: {
 
        flex: 1,
        marginLeft:15,
        marginRight:15,
         position:'relative',
        flexDirection: 'column',
         backgroundColor:'#fff',
          alignItems: 'center',
         
     },
     titleText:{
         height:55,
         marginTop:20,
         fontSize:25,
         fontWeight:'500',
         color:'#4D3D64'
     },
    tagsContainer:{
        flex:1,
        width:'100%',
        marginTop:5,
 
  
    
    },
    tagsContent:{
    flex:0,
    width:'100%',
    marginBottom:25,
    flexDirection:'row',
    justifyContent:'space-between',
   
    
    },
    tagTitle:{
        height:30,
        marginTop:10,
        width:'100%',
       
    },

});