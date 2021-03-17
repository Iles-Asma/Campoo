import React, { useState } from 'react';
import { StyleSheet, Image, StatusBar, SafeAreaView, View, Platform, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ButtonCampoo from "../../components/button/ButtonCampoo";
import SecondaryButtonCampoo from '../../components/button/SecondaryButtonCampoo';
import InputCampooSignup from '../../components/input/InputCampooSignup';
import LabelCampoo from '../../components/LabelCampoo';
import LogoCampoo from '../../../assets/svg/LogoCampoo'



export default function MdpSignupCampoo(props) {

	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	// const [errorMessage, setErrorMessage] = useState('');
	const [errorMessages, setErrorMessages] = useState('');

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

	async function onSubmit() {

		const token = await _retrieveData();
		console.log(token);

		fetch("https://campoo.fr/api/account/password", {
			method: 'PATCH',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
				"Authorization": `Bearer ${token}`

			},
			body: JSON.stringify({

				'password': password,
				'confirmPassword': confirmPassword,

			})
		})
			// response.json()
			.then((response) => response.json())
			.then((Message) => {

				if (Message.Status === 'Success') {
					console.log(Message)

					fetch("https://campoo.fr/api/account/verification", {
						method: 'GET',
						headers: {
							'Accept': 'application/json',
							'Content-Type': 'application/json',
							"Authorization": `Bearer ${token}`

						},
					})
						.then((response) => response.json())
						.then((response) => {
							console.log(response)
							if (response.Status === 'Success') {
								props.navigation.push('CodeVerifSignupCampoo');

							}
							else {
								console.log(response);
							}
						})
				}
				else {
					//  setErrorMessage(Message.Message.password[0]);
					setErrorMessages(Message.Message.building_id[0]);


				}
			})
			.catch((error) => {
				console.error(error);
			});


	};


	return (

		<SafeAreaView style={styles.container}>

			<LogoCampoo style={{ right: '5%', top: 49, marginTop: 16, position: 'absolute', }} />
			<Image style={styles.baloo} source={require("../../../assets/images/Baloo-Blob-Securité.png")} />

			<View style={styles.PswdView}>

				<LabelCampoo style={styles.Pswd1}>Mot de passe</LabelCampoo>
				<Text style={styles.textMdp}>Pour ta sécurité, Baloo te recommande d’utiliser au moins 6 caractères.</Text>
				<InputCampooSignup

					secure={true}
					style={styles.InputView1}
					value={props.password}
					onChangeText={(text) => setPassword(text)}

				/>


				<LabelCampoo style={styles.Pswd2} >Vérification</LabelCampoo>
				<InputCampooSignup

					secure={true}
					value={props.confirmPassword}
					onChangeText={(text) => setConfirmPassword(text)}
					style={styles.InputView2}
					// errorText={errorMessage}
					errorText={errorMessages}
				/>


				<ButtonCampoo style={styles.button} onPress={() => onSubmit()}>Suivant</ButtonCampoo>
				<SecondaryButtonCampoo style={styles.retour} onPress={() => props.navigation.goBack()}>Retour</SecondaryButtonCampoo>
			</View>

		</SafeAreaView >

	);



}


const styles = StyleSheet.create({

	container: {

		flex: 1,
		paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
		justifyContent: 'flex-start',
		alignItems: 'center',

		backgroundColor: '#ffffff',

	},

	logoCampoo: {

		position: 'absolute',
		width: 115,
		height: 115,
		marginTop: 20,
		left: 260

	},

	textMdp: {
		fontSize: 11,
		textAlign: 'left',
		color: '#9B84D2',


	},

	Pswd1: {

		marginBottom: 9,

	},

	Pswd2: {

		marginBottom: -18,

	},

	InputView1: {

		marginBottom: 27,

	},

	InputView2: {

		marginBottom: 57,

	},

	PswdView: {

		height: 389,
		width: 300,
		top: 118,

	},

	button: {

		alignSelf: 'center',
		marginBottom: 7,

	},

	baloo: {

		position: "absolute",
		width: 559,
		height: 438,
		left: 38,
		top: 440,

	},

	retour: {
		alignSelf: 'center',

	},
})