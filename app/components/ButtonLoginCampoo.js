import React from 'react';

import {TouchableOpacity, View, Text, StyleSheet} from 'react-native';

export default class ButtonLoginCampoo  extends React.Component {
    render(){

        return(
            <View>
                <TouchableOpacity style={styles.button}>

                    <Text style={styles.connexionText}>{this.props.children}</Text>

                </TouchableOpacity>

            </View>

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
     marginTop:30, 
     marginBottom:28, 
     alignSelf :'center',
    
     }


});