import React from 'react';
import { TextInput, StyleSheet, View, Text } from 'react-native';
import {CAMPOO} from '../../assets/themes/ThemeCampoo';
import IconImage from '../../assets/svg/ImageIcon';

export default class TextInputAssos extends React.Component {
    render() {
        return (


            <View style={styles.TextAreaContainer}>

                <Text style={styles.TextAreaTitle} >Que souhaiter vous dire ?</Text>

                <TextInput

                    

                    style={styles.TextAreaCampoo}
                    underlineColorAndroid="transparent"
                    placeholder={""}
                    placeholderTextColor={"#9E9E9E"}
                    numberOfLines={20}
                    multiline={true}>  

                
                </TextInput>
                
                <IconImage   style={styles.IconTextrea} />

            </View>
        )
    }
}

const styles = StyleSheet.create({

    TextAreaContainer:{
        width:300,
        height:175,
        alignSelf:'center',
        marginVertical:50,
        

    },

    IconTextrea:{

        position:'absolute',
        flex:1,
        flexDirection:'column',
        justifyContent:'flex-end',
       

        margin:8,

    },

    TextAreaTitle: {

        textAlign:'center',
        
        fontSize:16,
        fontWeight:'bold',
        color:CAMPOO.primary,

    },

   


    TextAreaCampoo:{
        marginTop:15,

        color:CAMPOO.primary,
        
        padding:10,
        textAlignVertical: 'top',
        borderWidth: 2,
        borderColor: CAMPOO.primary,
        borderRadius: 10 ,
        backgroundColor : "#FFFFFF",
        height: 175,
        width:300,
        }

  






})

