import React from 'react';
import { TextInput, StyleSheet, View, Text } from 'react-native';

export default class TextInputAssos extends Component {
    render() {
        return (
            <View style={styles.MainContainer}>

                <Text  style={styles.titleTextarea}>Que souhaiter vous dire ?</Text>

                <TextInput   

                    style={styles.TextAreaCampoo}
                    underlineColorAndroid="transparent"
                    placeholder={""}
                    placeholderTextColor={"#9E9E9E"}
                    numberOfLines={10}
                    multiline={true}>  
                    
                </TextInput>

            </View>
        )
    }
}

const styles = StyleSheet.create({

    MainContainer : {

        flex: 1,
      
    
        flexDirection: 'column',
        justifyContent:'center',
        alignItems:'center',


    },


    TextAreaCampoo:{
 
        textAlign: 'center',
        height: 50,
        borderWidth: 2,
        borderColor: '#9E9E9E',
        borderRadius: 20 ,
        backgroundColor : "#FFFFFF",
        height: 150
         
        }

  






})

