import React, { useState } from 'react';
import { StyleSheet, Image, StatusBar, SafeAreaView, View, Platform, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import PickerBatiments from "../../components/PickerBatiments"
import ButtonCampoo from "../../components/button/ButtonCampoo";
import LabelCampoo from '../../components/LabelCampoo';
import SecondaryButtonCampoo from '../../components/button/SecondaryButtonCampoo';
import LogoCampoo from '../../../assets/svg/LogoCampoo'

export default function BatSignupCampoo(props) {

	const [building_id, setBuildingId] = useState('');
	const [errorMessage, setErrorMessage] = useState('');

	const _retrieveData = async () => {
		try {
			const value = await AsyncStorage.getItem('token');
			if (value !== null) {
				// We have data!!
				return value;
			}
		} catch (error) {

			// Error retrieving data
		}
	};


	const onSubmit = async () => {

		const token = await _retrieveData();

		fetch("https://campoo.fr/api/account/building_id", {
			method: 'PATCH',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
				"Authorization": `Bearer ${token}`

			},
			body: JSON.stringify({

				'building_id': building_id

			})
		})
			// response.json()
			.then((response) => response.json())
			.then((Message) => {

				console.log(Message);
				if (Message.Status === 'Success') {

					props.navigation.navigate('MdpSignupCampoo');

				} else {

					setErrorMessage(Message.Message.building[0]);

				}
			})
			.catch((error) => {
				// console.error(error);
			});


	}


	//! mettre un picker 

	return (

		<SafeAreaView style={styles.container}>


			<LogoCampoo style={{ right: '5%', top: 49, marginTop: 16, position: 'absolute', }} />
			<Image style={styles.baloo} source={require("../../../assets/images/Blob-Baloo-Etudiant.png")} />

			<View style={styles.batView}>
				<LabelCampoo style={styles.batLabel}>Batiment</LabelCampoo>
				<Text style={styles.textBat}>Si tu viens d'Harvard, c'est ici qu'il faut le dire.</Text>
				<PickerBatiments
					style={styles.InputView}
					onValueChange={(value) => { setBuildingId(value) }} />
				<ButtonCampoo style={styles.button} onPress={onSubmit}>Suivant</ButtonCampoo>
				<SecondaryButtonCampoo style={styles.retour} onPress={() => props.navigation.goBack()}>retour</SecondaryButtonCampoo>

			</View>

		</SafeAreaView>

	);



}


const styles = StyleSheet.create({

	container: {

		flex: 1,

		// test pour detecter la platform
		paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
		flexDirection: 'column',
		backgroundColor: '#ffffff',


	},

	logoCampoo: {
		position: 'absolute',
		width: 115,
		height: 115,
		marginTop: 20,
		left: 260


	},

	InputView: {

		alignSelf: 'center',

	},

	batLabel: {
		marginBottom: 9,

	},



	batView: {

		top: 138,
		height: 290,
		width: 300,
		alignSelf: 'center',


	},

	button: {
		marginTop: 57,
		alignSelf: 'center',

	},

	baloo: {
		position: "absolute",
		width: 559,
		height: 438,
		left: 50,
		top: 440,
	},

	textBat: {

		fontSize: 11,
		textAlign: 'left',
		color: '#9B84D2',

	},

	retour: {

		alignSelf: 'center',
		marginTop: 10,

	},






})