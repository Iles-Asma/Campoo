import React from 'react';
import { TextInput, StyleSheet, View, Text } from 'react-native';
import { CAMPOO } from '../../assets/themes/ThemeCampoo';
import IconImage from '../../assets/svg/ImageIcon';

export default class TextInputAssos extends React.Component {
    render() {
        return (


            <View style={styles.TextAreaContainer}>

                <TextInput


                    style={styles.TextAreaCampoo}
                    underlineColorAndroid="transparent"
                    placeholder={this.props.placeholder}
                    placeholderTextColor={"#9E9E9E"}
                    numberOfLines={20}
                    multiline={true}>


                </TextInput>

                <IconImage style={styles.IconTextrea} />

                <View>

                    <Text style={styles.caracterLimit}>Limite de xxx caracteères</Text>

                </View>



            </View>
        )
    }
}

const styles = StyleSheet.create({

    TextAreaContainer: {
        width: 300,
        height: 215,
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
        margin: 8,

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

