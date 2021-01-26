'use strict';

import React from 'react';

import { StyleSheet, View, Text} from 'react-native';

export default class UserTags extends React.Component

{
        render()

    {

        return(
        // creation du composant unique tag static
           <View style={styles.tagShape}> 
           {/* <Text style={styles.tagName} >Action</Text> */}
           </View>
      
           
        );

    }

}

const styles = StyleSheet.create({

// La forme du tags
    tagShape: {
        height:100,
        flex:0,
        justifyContent:'center',
        alignItems:'center',
        
        width:100,
        marginHorizontal:10 ,
      
         marginBottom:20,
        borderRadius: 10,
        borderWidth: 5,
         borderColor:'#4D3D64', 
        // backgroundColor:'#FFEEE9',
       
       
    },
    // Le choix de mettre un nom ou pas(donc icons)
    tagName:{
        fontSize:20,
        fontWeight:'bold',
    }

  
})