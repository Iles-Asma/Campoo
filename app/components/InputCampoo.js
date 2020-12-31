import React from 'react';
import {Text, StyleSheet, View, TextInput} from 'react-native';
import LabelCampoo from './LabelCampoo';
export default class InputCampoo extends React.Component {

    render() {

        return(

            <View style={[styles.inputView, this.props.style]}>

               <LabelCampoo style={styles.label.props}>{this.props.name}</LabelCampoo>

               <Text style={styles.textDescription}>{this.props.description}</Text>
           
               <TextInput style={styles.textInput} secureTextEntry={this.props.secure}  maxLength={40}/>

               <Text style={styles.textInfo}>{this.props.info}</Text>

            </View>

        );

    }

}

const styles = StyleSheet.create({

    inputView:{

        width : '100%',
       
    },

    label:{
        
        marginBottom:9,
        
     }, 

    textInput : {

        paddingHorizontal:12,
        height : 30,
        borderWidth : 1 ,
        borderColor:'#FFFFFF',
        width :"100%",
        borderRadius:10,

    },
    
    textDescription:{

        marginBottom:25,
        fontSize:12,
        textAlign:'left',
        color:'#9B84D2',
  
     },

     textInfo:{
         marginTop:25,
         fontSize:11,
         color:'#EB7653',

     },
 
})