'use strict';

import React from 'react';
import { StyleSheet, StatusBar,SafeAreaView,ScrollView, View, Text } from 'react-native';
import Tags from '../../components/Tags';
import TitlePage from '../../components/TitlePage';
export default class ChooseTags extends React.Component {

 

    render() {

        return (

            <SafeAreaView style={styles.container}>
            {/* Titre de l'onglet */}
              <TitlePage >Choisis un tag</TitlePage> 
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
});