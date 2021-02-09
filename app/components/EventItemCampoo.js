import React, { Component } from 'react'
import { Text, StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import Dots from '../../assets/svg/Dots'
import { CAMPOO } from '../../assets/themes/ThemeCampoo'
import LabelCampoo from './LabelCampoo'

export default class EventItemCampoo extends Component {
    render() {
        return (

            <View style={styles.containerEvent}>

                <View style={styles.subcontainerEvent}>
                    <View style={styles.imageContainer}>


                        <Image style={styles.eventImage} source={require("../../assets/images/imagePost-Test.png")} />

                    </View>

                    <View style={styles.eventDetail}>

                        <LabelCampoo style={styles.titleEvent}>{this.props.title}</LabelCampoo>

                        <Text style={styles.textEvent}>{this.props.eventText}</Text>
                    </View>

                    <View style={styles.eventData}>


                        <View style={styles.dataEvent}>
                            <Text style={styles.data}>{this.props.date}</Text>
                            <Text style={styles.data}>{this.props.hours}</Text>
                            <Text style={styles.data}>{this.props.location}</Text>
                        </View>


                        <View style={styles.dotsContainer}>

                            <TouchableOpacity>
                                <Dots />
                            </TouchableOpacity>

                        </View>

                    </View>




                </View>






            </View>

        )
    }
}

const styles = StyleSheet.create({

    containerEvent: {
        marginTop: 15,
        padding: 10,
        flex: 1,
        width: 345,
        height: 375,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: CAMPOO.primary,
    },

    imageContainer: {
        width: 325,
        // alignSelf: 'center',
        height: "auto",
        // marginTop: 8,
        // marginHorizontal: 8,
        marginBottom: 10,

    },
    eventImage: {
        width: 325,
        height: 173,
        borderRadius: 5,


    },
    dotsContainer: {

        justifyContent: 'center',

    },


    subcontainerEvent: {
        // padding: 10,
        alignSelf: 'center',

        height: 355,
        width: 325,

    },

    data: {
        fontSize: 16,

    },

    eventDetail: {
        width: 325,
        height: 105,
        // alignSelf: 'center',

    },

    textEvent: {
        width: 325,
        height: 'auto',
        color: CAMPOO.primary,

    },

    titleEvent: {
        paddingBottom: 3,

    },

    eventData: {

        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',

        width: 325,
        // alignSelf: 'center',

        marginTop: 5,

    },







})
