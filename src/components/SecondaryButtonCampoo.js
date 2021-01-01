import React from 'react';

import {TouchableOpacity, Text, StyleSheet} from 'react-native';
export default class SecondaryButtonCampoo extends React.Component {
    render(){

        return(

                <TouchableOpacity style={this.props.style}>

                    <Text style={styles.register}>{this.props.children}</Text>

                </TouchableOpacity>
 
        );

    }

}

const styles = StyleSheet.create ({

    register:{ 
        color:'#62BBC5',
        fontSize:14,
  
     },

})