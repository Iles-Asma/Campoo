import React from 'react';

import {TouchableOpacity,  Text, StyleSheet} from 'react-native';

export default class ButtonLoginCampoo  extends React.Component {

    render(){

        return(
       
                <TouchableOpacity style={[styles.button, this.props.style]}>

                    <Text style={styles.connexionText}>{this.props.children}</Text>

                </TouchableOpacity>

        );

    }

}



const styles = StyleSheet.create ({
    connexionText:{
        
        textAlign :'center',
        marginVertical:15,
        fontSize:16,
        color:'white',
  
     },

     button :{
        color: "white", 
        borderRadius:5, 
        width:150, 
        height:50, 
        backgroundColor: '#4D3D64', 
     }

});