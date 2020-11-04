import React from 'react';
import {Text, StyleSheet, View, TextInput} from 'react-native';

export default class InputCampoo extends React.Component 

{

    render()
    
    {

        return(

         <View style={[styles.inputView, this.props.style]}>
        
            <Text style={styles.label} >{this.props.name}</Text>

            <TextInput  style={styles.textInput} label='username' secureTextEntry={this.props.secure}  maxLength={15}/>

         </View>

        );

    }

}

const styles = StyleSheet.create({

    inputView:{
        width : 300
        
    }, label:{
        marginBottom :10,
        marginLeft:8,
        fontSize :25.89,
        color: '#4D3D64'
       
     }, textInput : {
        paddingHorizontal:10,
        textAlignVertical:'center',
        height : 30,
        borderWidth : 1 ,
        borderColor : '#4D3D64',
        width :"100%",
        borderRadius:5
    }

})