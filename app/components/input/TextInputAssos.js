import React from 'react';
import { TextInput, StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { CAMPOO } from '../../assets/themes/ThemeCampoo';
import IconImage from '../../assets/svg/ImageIcon';


export default class TextInputAssos extends React.Component {
    render() {
        return (

            // conatainer de la zone de texte
            <View style={styles.TextAreaContainer}>

                {/* zone de texte */}
                <TextInput

                    style={styles.TextAreaCampoo}
                    underlineColorAndroid="transparent"
                    placeholder={this.props.placeholder}
                    placeholderTextColor={"#9E9E9E"}
                    numberOfLines={20}
                    multiline={true}
                    maxLength={300} />

                <TouchableOpacity style={styles.IconTextrea}>
                    <IconImage />
                </TouchableOpacity>
                {/* afffichage limite de caractere */}

                <Text style={styles.caracterLimit}>{this.props.limitCaracter}</Text>

            </View>
        )
    }
}

const styles = StyleSheet.create({

    TextAreaContainer: {
        width: '90%',
        height: 'auto',
        alignSelf: 'center',

        flex: 1,
        marginBottom: 0,


    },


    caracterLimit: {
        bottom: 40,
        textAlign: 'right',


    },

    IconTextrea: {
        bottom: 40,
        padding: 10,


    },

    TextAreaTitle: {

        textAlign: 'center',

        fontSize: 16,
        fontWeight: 'bold',
        color: CAMPOO.primary,

    },

    TextAreaCampoo: {
        marginTop: 5,

        color: CAMPOO.primary,

        padding: 10,
        textAlignVertical: 'top',
        borderWidth: 2,
        borderColor: CAMPOO.primary,
        borderRadius: 10,
        backgroundColor: "#FFFFFF",
        height: 200,
        width: '100%',
    }








})

