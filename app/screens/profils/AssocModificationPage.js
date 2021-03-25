import React, { useState } from "react";

import { StyleSheet, ScrollView, Image, StatusBar, SafeAreaView, View, Text, TouchableOpacity } from "react-native";
import PickerBatiments from "../../components/PickerBatiments";
import LabelCampoo from "../../components/LabelCampoo";
import InputModifProfil from "../../components/input/InputModifProfil";
import InputBioProfil from "../../components/input/InputBioProfil";
import PenSvg from "../../components/PenSvg";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function AssocModificationPage(props) {
	const [campoo_name, setCampooName] = useState("");
	const [bio, setBio] = useState("");
	const [batiments, setBatiments] = useState("");

	const [errorMessage, setErrorMessage] = useState("");
	const [errorMessage2, setErrorMessage2] = useState("");
	const [errorMessage3, setErrorMessage3] = useState("");

	const _retrieveData = async () => {
		try {
			const value = await AsyncStorage.getItem("token");
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
		console.log(token);

		await Promise.all([
			fetch("https://campoo.fr/api/association/campoo_name", {
				method: "POST",
				headers: {
					Accept: "application/json",
					"Content-Type": "application/json",
					Authorization: `Bearer ${token}`,
				},
				body: JSON.stringify({
					campoo_name: campoo_name,
				}),
			}),
			fetch("https://campoo.fr/api/association/biography", {
				method: "POST",
				headers: {
					Accept: "application/json",
					"Content-Type": "application/json",
					Authorization: `Bearer ${token}`,
				},
				body: JSON.stringify({
					biography: bio,
				}),
			}),
			fetch("https://campoo.fr/api/association/bulding", {
				method: "POST",
				headers: {
					Accept: "application/json",
					"Content-Type": "application/json",
					Authorization: `Bearer ${token}`,
				},
				body: JSON.stringify({
					bulding: batiments,
				}),
			}),
		])
			.then((responses) => Promise.all(responses.map((rep) => rep.json())))
			.then((Message) => {
				console.log(Message);
				if (Message.Status === "Success") {
					console.log("Xas");
					// props.navigation.navigate('UserProfil');
				} else {
					setErrorMessage(Message.Message.campoo_name[0]);
					setErrorMessage2(Message.Message[0]);
					setErrorMessage3(Message.Message[0]);
				}
			})
			.catch((error) => {
				//console.error(error);
				//console.log("erreur");
			});
	};

	return (
		// contenu generale

		<SafeAreaView style={styles.container}>
			{/* La navigation du haut */}
			<View style={styles.topNav}>
				{/*Le onPress a mettre  */}
				<TouchableOpacity onPress={() => navigation.goBack()}>
					<Text> Annuler</Text>
				</TouchableOpacity>
				<Text style={styles.secondTitle}>Modification du Profil</Text>
				<TouchableOpacity onPress={onSubmit}>
					<Text> OK</Text>
				</TouchableOpacity>
			</View>

			{/* Contenaire des information a modifier */}
			<ScrollView showsVerticalScrollIndicator={false}>
				{/* Profil de l'image */}
				<View style={styles.profilModificationContainer}>
					{/* Shadow Pen */}
					<View style={styles.penModif}>
						<TouchableOpacity>
							<PenSvg />
						</TouchableOpacity>
					</View>
					{/* Image */}
					<Image source={require("../../../assets/imgAssoc/AssocImg.png")} style={styles.profilPics}></Image>
				</View>

				{/* Input et label pour les odification */}
				<View style={styles.modificationContent}>
					<LabelCampoo style={styles.nameLabel}>Nom de l'association/club</LabelCampoo>

					<InputModifProfil placeholder="BDE Staps" onChangeText={(text) => setCampooName(text)} value={props.Campoo_name} errorText={errorMessage} />

					<Text style={styles.infoInput}>Votre nom doit rester raisonnable.</Text>

					<LabelCampoo style={styles.nameLabel}>Biographie </LabelCampoo>

					<InputBioProfil placeholder="Decris toi :)" onChangeText={(text) => setBio(text)} value={props.bio} errorText={errorMessage2} />

					<Text style={styles.infoInput}>Ta bio doit te reflèter, ne soit pas vulgaire!</Text>

					<View style={styles.btnContainer}>
						{/* Iput Option */}
						<LabelCampoo style={styles.nameLabel}>Bâtiment Universitaire :</LabelCampoo>

						<PickerBatiments onValueChange={() => setBatiments()} value={props.batiments} errorText={errorMessage3} />
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
		marginLeft: 15,
		marginRight: 15,

		position: "relative",
		flexDirection: "column",
		backgroundColor: "#fff",
		//  alignItems: 'center',
	},
	colorViolet: {
		color: "#4D3D64",
	},
	profilModificationContainer: {
		flex: 0,
		height: "25%",
		width: "100%",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "white",
	},
	penModif: {
		position: "absolute",
		zIndex: 100,
		backgroundColor: "rgba(158, 150, 150, .5)",
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
		justifyContent: "flex-start",
		width: "100%",
	},
	nameLabel: {
		fontSize: 30,
		marginTop: 15,
		marginBottom: 5,
		fontWeight: "bold",
	},

	infoInput: {
		fontSize: 12,
		flex: 0,
		marginTop: 10,
		alignSelf: "flex-end",
		marginRight: 5,
		color: "#4D3D64",
	},
	secondTitle: {
		fontSize: 20,
		fontWeight: "bold",
		color: "#4D3D64",
	},
	topNav: {
		flex: 0,
		justifyContent: "space-between",
		width: "100%",
		height: 35,
		flexDirection: "row",
	},
	btnContainer: {
		flex: 0,
		height: 200,
	},
});
