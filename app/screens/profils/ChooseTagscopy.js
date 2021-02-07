'use strict';

import React from 'react';
import { StyleSheet,StatusBar, SafeAreaView,ScrollView, View, Text } from 'react-native';
import UserTags from '../../components/UserTags';

export default class ChooseTags extends React.Component {

 

    render() {

        return (

            <SafeAreaView style={styles.container}>
            
            {/* Titre de l'onglet */}
              <Text style={styles.titleText}>Choisis un tag</Text> 
           
                         
{/* Les differents tags (Mauvais code) */}

                {/* <View style={styles.tagsContainer}> */}

                <Text style={styles.titleText}>Choisis un tag</Text> 
                
 <ScrollView  showsVerticaleScrollIndicator={false}  >
        <View style={styles.tagsContent}>
             <UserTags/>
             <UserTags/>
             <UserTags/>      
         
             <UserTags/>
             <UserTags/>
             <UserTags/>   
                
             </View>

</ScrollView>
             <Text style={styles.titleText}>Choisis un tag</Text> 
             <ScrollView showsHorizontalScrollIndicator={true} showsVerticalScrollIndicator={false}  >
        <View style={styles.tagsContent}>
             <UserTags/>
             <UserTags/>
             <UserTags/>      
         
             <UserTags/>
             <UserTags/>
             <UserTags/>   
                
             </View>

</ScrollView>
        <Text style={styles.titleText}>Choisis un tag</Text> 
        <ScrollView showsHorizontalScrollIndicator={true} showsVerticalScrollIndicator={false}  >
        <View style={styles.tagsContent}>
             <UserTags/>
             <UserTags/>
             <UserTags/>      
         
             <UserTags/>
             <UserTags/>
             <UserTags/>   
                
             </View>

</ScrollView>
         {/* </View>     */}
            {/* </ScrollView> */}
            </SafeAreaView>

        );



    }


}


const styles = StyleSheet.create({

    container: {
 
        flex: 1,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        // marginLeft:15,
        // marginRight:15,
         position:'relative',
        // flexDirection: 'column',
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
        // marginTop:5,
 
  
    
    },
    tagsContent:{
    flex:0.5,
    height:10,
    // width:'100%',
    // flexWrap:'wrap',
    // marginBottom:25,
    flexDirection:'row',
    // justifyContent:'space-between',
   
    
    },
    tagTitle:{
        height:30,
        marginTop:10,
        width:'100%',
       
    },

});