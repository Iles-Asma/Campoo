import React from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity } from 'react-native'
import { CAMPOO } from '../../assets/themes/ThemeCampoo'
import SendButton from '../../assets/svg/SendButton'



export default class InputCommentCampoo extends React.Component {
    render() {
        return (
            <View style={styles.Container}>

                <View style={styles.subContainer}>

                    <TextInput style={styles.inputText}
                        underlineColorAndroid="transparent"
                        placeholder={""}
                        placeholderTextColor={"#9E9E9E"}
                        maxLength={150}

                    />

                    <TouchableOpacity>
                        <SendButton />
                    </TouchableOpacity>
                </View>



            </View>
        )
    }
}

const styles = StyleSheet.create({
    Container: {
        width: '100%',
        height: 57,
        borderColor: 'white',
    },
    subContainer: {
        width: '80%',
        alignSelf: 'center',
        flex: 0,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',

    },


    inputText: {
        width: "90%",
        height: 37,
        margin: 10,
        borderWidth: 2,
        borderRadius: 10,
        borderColor: CAMPOO.primary,
        padding: 10,




    },


})
