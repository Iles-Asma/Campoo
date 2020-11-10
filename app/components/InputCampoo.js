import React from 'react';
import {Text, StyleSheet, View, TextInput} from 'react-native';
import LabelCampoo from './LabelCampoo';

export default class InputCampoo extends React.Component 

{

    render()
    
    {

        return(

         <View style={[styles.inputView, this.props.style]}>
        
            <LabelCampoo style={styles.label}>{this.props.name}</LabelCampoo>

            <TextInput style={styles.textInput} secureTextEntry={this.props.secure}  maxLength={15}/>

         </View>

        );

    }

}

const styles = StyleSheet.create({

    inputView:{
        width : 300
        
    },
    label:{
        marginBottom :36,
        marginLeft:8,
     }, 
    textInput : {
        paddingHorizontal:10,
        height : 30,
        borderWidth : 1 ,
        borderColor : '#4D3D64',
        width :"100%",
        borderRadius:5,

    }

})