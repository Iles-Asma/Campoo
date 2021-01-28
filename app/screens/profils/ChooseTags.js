'use strict';

import React from 'react';
import { StyleSheet, SafeAreaView,ScrollView, View, Text } from 'react-native';
import Tags from '../../components/Tags';

export default class ChooseTags extends React.Component {

 

    render() {

        return (

            <SafeAreaView style={styles.container}>
            {/* Titre de l'onglet */}
              <Text style={styles.titleText}>Choisis un tag</Text> 
 <ScrollView showsVerticalScrollIndicator={false} >
                         
{/* Les differents tags */}

                <View style={styles.tagsContainer}>
        <View style={styles.tagsContent}>
             <Tags/>
             <Tags/>
             <Tags/>      
      
             <Tags/>
             <Tags/>
             <Tags/>      
       
             <Tags/>
             <Tags/>
             <Tags/>      
    
             <Tags/>
             <Tags/>
             <Tags/>      
       
             <Tags/>
             <Tags/>
             <Tags/> 
                  
             <Tags/>
             <Tags/>
             <Tags/>  
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