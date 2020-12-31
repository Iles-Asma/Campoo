import React from 'react';

import {Text, StyleSheet,View} from 'react-native';

export default class LabelCampoo extends React.Component

{

    render()

    {

        return(
           

            <Text style={[this.props.style, styles.label]} >{this.props.children}</Text>
           
        

           
        );

    }

}

const styles = StyleSheet.create({
    label: {

        fontSize :25.89,
        color: '#4D3D64',
        // marginBottom:69,
       
       
    },

  
})