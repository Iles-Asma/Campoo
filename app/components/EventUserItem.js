import React, { Component } from 'react'
import { Text, StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import LikeButton from '../../assets/svg/LikeButton'
import { CAMPOO } from '../../assets/themes/ThemeCampoo'
import LabelCampoo from './LabelCampoo'

export default class EventItemCampoo extends Component {
    render() {
        return (

            <View style={styles.containerEvent}>

                <View style={styles.subcontainerEvent}>
                    <View style={styles.imageContainer}>


                        <Image style={styles.eventImage} source={this.props.image} />

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

                                <LikeButton />

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
        width: '100%',
        alignSelf: 'center',
        height: 'auto',
        borderWidth: 1,
        borderRadius: 5,
        borderColor: CAMPOO.primary,

    },


    imageContainer: {
        width: '100%',
        height: "auto",
        marginBottom: 10,

    },
    eventImage: {
        width: '100%',
        height: 175,
        borderRadius: 5,


    },
    dotsContainer: {
        justifyContent: 'center',

    },


    subcontainerEvent: {

        alignSelf: 'center',
        height: "auto",
        width: '100%',

    },

    data: {
        fontSize: 16,
        color: CAMPOO.primary,

    },

    eventDetail: {
        width: '100%',
        height: 'auto',
        // alignSelf: 'center',

    },

    textEvent: {
        width: '100%',
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
        width: '100%',
        marginTop: 6,

    },







})
