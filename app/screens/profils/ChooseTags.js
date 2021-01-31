'use strict';

import React from 'react';
import { StyleSheet,TouchableOpacity ,StatusBar,SafeAreaView,ScrollView, View, Text } from 'react-native';
import Tags from '../../components/Tags';
import TitlePage from '../../components/TitlePage';
export default class ChooseTags extends React.Component {

 

    render() {

        return (

            <SafeAreaView style={styles.container}>
            
              {/* La navigation du haut */}
           <View style={styles.topNav}> 
           
           <TouchableOpacity onPress=''>
           <Text> Annuler</Text>
            </TouchableOpacity> 
             <Text  style={styles.secondTitle}>Modification du Profil</Text>
            <TouchableOpacity onPress=''>
           <Text> OK</Text>
            </TouchableOpacity> 
 
             </View>
 <ScrollView showsVerticalScrollIndicator={false} >
                         
{/* Les differents tags */}

                <View style={styles.tagsContainer}>
        <View style={styles.tagsContent}>

        <Tags> + Tag</Tags>
            <Tags> + Tag</Tags>
            <Tags> + Tag</Tags>     
      
           <Tags> + Tag</Tags>
           <Tags> + Tag</Tags>
          <Tags> + Tag</Tags> 

          <Tags> + Tag</Tags>
           <Tags> + Tag</Tags>
            <Tags> + Tag</Tags>       
         <Tags> + Tag</Tags>

            <Tags> + Tag</Tags>
            <Tags> + Tag</Tags>     
      
           <Tags> + Tag</Tags>
           <Tags> + Tag</Tags>
          <Tags> + Tag</Tags> 

          <Tags> + Tag</Tags>
           <Tags> + Tag</Tags>
            <Tags> + Tag</Tags>       
         
             </View>
             </View>
             
            </ScrollView>
            </SafeAreaView>

        );

    }

}

const styles = StyleSheet.create({

    container: {
 
        flex: 1,

         position:'relative',
   // test pour detecter la platform
   paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
   marginLeft:15,
   marginRight:15,
   
   flexDirection: 'column',
         backgroundColor:'#fff',
          alignItems: 'center',
         
     },
    tagsContainer:{
        flex:1,
        width:'100%',
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