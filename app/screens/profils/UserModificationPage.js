import React, { useState } from 'react';
import { StyleSheet, ScrollView, Image, StatusBar, SafeAreaView, View, Text, TouchableOpacity } from 'react-native';
import { CAMPOO } from '../../../assets/themes/ThemeCampoo';
import Tags from '../../components/Tags';
import PickerBatiments from "../../components/PickerBatiments";
import LabelCampoo from "../../components/LabelCampoo";
import InputModifProfil from '../../components/input/InputModifProfil';
import InputBioProfil from '../../components/input/InputBioProfil';
import PenSvg from "../../components/PenSvg";
import ButtonLarge from '../../components/button/ButtonLarge';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function UserModificationPage(props) {
	const [pseudo, setPseudo] = useState('');
	const [bio, setBio] = useState('');

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
	// fonction qui fait une requete  en post et qui renvoie une reponse d'erreur  au onPress
	const onSubmit = async () => {

		const token = await _retrieveData();


		Promise.all([
			fetch("https://campoo.fr/api/account/pseudonyme", {
				method: 'PATCH',
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json',
					"Authorization": `Bearer ${token}`

				},
				body: JSON.stringify({

					'pseudonyme': pseudo,



				})
			}),
			fetch("https://campoo.fr/api/account/biography", {
				method: 'PATCH',
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json',
					"Authorization": `Bearer ${token}`

				},
				body: JSON.stringify({


					'biography': bio,


				})
			})
		])
			.then((response) => response.json())
			.then((Message) => {

				console.log(Message);
				if (Message.Status === 'Success') {


					props.navigation.navigate('UserProfil');



				} else {

					// setErrorMessage(Message.Message.[0]);

				}
			})
		// .catch((error) => {
		//     // console.error(error);
		// });


	}

	// render() {

	return (
		// contenu generale

		<SafeAreaView style={styles.container}>

			{/* La navigation du haut */}
			<View style={styles.topNav}>
				{/*Le onPress a mettre  */}
				<TouchableOpacity onPress={() => props.navigation.goBack()}>
					<Text> Annuler</Text>
				</TouchableOpacity>
				<Text style={styles.secondTitle}>Modification du Profil</Text>
				<TouchableOpacity >
					<Text> OK</Text>
				</TouchableOpacity>

			</View>

			{/* Contenaire des information a modifier */}
			<ScrollView showsVerticalScrollIndicator={false} >
				{/* Profil de l'image */}
				<View style={styles.profilModificationContainer}>

					{/* Shadow Pen */}
					<View style={styles.penModif}>
						<TouchableOpacity>

							<PenSvg />

						</TouchableOpacity>
					</View>
					{/* Image */}
					<Image source={require("../../../assets/imgProfil/Badeaubleu.png")} style={styles.profilPics}></Image>

				</View>

				{/* Input et label pour les odification */}
				<View style={styles.modificationContent}>

					<LabelCampoo style={styles.nameLabel}>Pseudonyme</LabelCampoo>

					<InputModifProfil placeholder='Edudd77'
						onChangeText={(text) => setPseudo(text)} value={props.pseudo} errorText={errorMessage} />

					<Text style={styles.infoInput}>Ton pseudo doit rester raisonnable.</Text>


					<LabelCampoo style={styles.nameLabel}>Biographie </LabelCampoo>

					<InputBioProfil placeholder='Decris toi :)' onChangeText={(text) => setBio(text)} value={props.bio} />

					<Text style={styles.infoInput}>Ta bio doit te reflèter, ne soit pas vulgaire!</Text>


					{/* Iput Option */}
					<LabelCampoo style={styles.nameLabel}>Bâtiment Universitaire :</LabelCampoo>

					{/* <PickerBatiments /> */}

					{/* Parti Modification de tags */}

					<LabelCampoo style={styles.nameLabel}> Tes tags :</LabelCampoo>
					<View style={styles.tagsContainer}>
						<View style={styles.tagsContent}>



							<Tags> x Tag</Tags>
							<Tags> x Tag</Tags>
							<Tags> x Tag</Tags>

							<Tags> x Tag</Tags>
							<Tags> x Tag</Tags>
							<Tags> x Tag</Tags>

						</View>
					</View>

					<View style={styles.btnContainer} >
						<ButtonLarge onPress={() => props.navigation.navigate('CategoriesTags')}>Modifies mes tags</ButtonLarge>
					</View>


				</View>
			</ScrollView>
		</SafeAreaView>

	);
	// }
};


const styles = StyleSheet.create({

	container: {
		flex: 1,
		paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'column',
		backgroundColor: '#fff',
		//  alignItems: 'center',
	},

	colorViolet: {
		color: CAMPOO.primary,
	},

	profilModificationContainer: {
		flex: 0,
		height: 'auto',
		width: '100%',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: 'white',


	},

	penModif: {
		position: "absolute",
		zIndex: 100,
		backgroundColor: 'rgba(158, 150, 150, .5)',
		padding: 50,
		borderRadius: 60 / 1,

	},

	profilPics: {
		width: 130,
		height: 130,
		borderRadius: 130 / 2,
	},

	modificationContent: {
		flex: 1,
		justifyContent: 'flex-start',
		width: '100%',
	},

	nameLabel: {

		fontSize: 30,
		marginTop: 15,
		marginBottom: 5,
		fontWeight: 'bold',
	},

	infoInput: {
		fontSize: 12,
		flex: 0,
		marginTop: 10,
		alignSelf: "flex-end",
		marginRight: 5,
		color: CAMPOO.primary
	},
	btnContainer: {
		flex: 1,
		width: '100%',
		marginVertical: 20,
		justifyContent: 'center',
		alignItems: 'center',

	},

	tagsContainer: {
		flex: 1,
		width: '100%',
		marginTop: 5,
	},

	tagsContent: {
		flex: 1,
		width: '100%',
		marginBottom: 25,
		flexWrap: 'wrap',
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
	},

	tagTitle: {
		height: 30,
		marginTop: 10,
		width: '100%',

	},
	secondTitle: {
		fontSize: 20,
		fontWeight: 'bold',
		color: CAMPOO.primary,
	},

	topNav: {
		flex: 0,
		justifyContent: "space-between",
		paddingHorizontal: '5%',
		width: '100%',
		marginTop: '5%',
		marginBottom: '5%',
		flexDirection: 'row',
		alignItems: 'center',

	},

});
