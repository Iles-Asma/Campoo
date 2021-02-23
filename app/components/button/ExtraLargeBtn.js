import React from 'react';

import { Text, StyleSheet, TouchableOpacity, View} from 'react-native';

export default class ExtraLargeBtn extends React.Component {

    render(){


        return(
       
                <TouchableOpacity style={[styles.button, this.props.style]}  onPress={this.props.onPress}>
                    <View style={styles.touchable}>
                        <Text style={styles.largeText}>{this.props.children}</Text>
                    </View>
                </TouchableOpacity>

        );

    }

}



const styles = StyleSheet.create ({
    largeText:{
        
        textAlign :'center',
        marginVertical:14,
        fontSize:16,
        fontWeight:'bold',
        color:'white',
  
     },
     touchable: {
        
        
         color: "white", 
         borderRadius:15, 
         width:300, 
         height:70, 
         backgroundColor: '#4D3D64', 
         alignSelf:'center',
        
        },
  
     


   

 

 
});