import React from 'react';

import {TouchableOpacity, Text, StyleSheet} from 'react-native';


export default class SecondaryButtonCampoo extends React.Component {
    render(){


        return(

   
                <TouchableOpacity>

                    <Text style={styles.register}>{this.props.children}</Text>



                </TouchableOpacity>


 
        );


    }



}

const styles = StyleSheet.create ({

    register:{ 
        alignSelf:'center',
        marginVertical:-20,
        color:'#62BBC5',
        fontSize:15,
  
     },




})