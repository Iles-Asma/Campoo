import React from 'react';
import { StyleSheet, ScrollView, Image, StatusBar, SafeAreaView, View, Text, TouchableOpacity } from 'react-native';
import PickerBatiments from "../../components/PickerBatiments";
import LabelCampoo from "../../components/LabelCampoo";
import InputModifProfil from '../../components/input/InputModifProfil';
import InputBioProfil from '../../components/input/InputBioProfil';
import PenSvg from "../../components/PenSvg";



export default function AssocModificationPage({ navigation }) {

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
					<Image source={require("../../../assets/imgAssoc/AssocImg.png")} style={styles.profilPics}></Image>

				</View>

				{/* Input et label pour les odification */}
				<View style={styles.modificationContent}>

					<LabelCampoo style={styles.nameLabel}>Nom de l'association/club</LabelCampoo>

					<InputModifProfil placeholder='BDE Staps' />

					<Text style={styles.infoInput}>Votre nom doit rester raisonnable.</Text>

					<LabelCampoo style={styles.nameLabel}>Biographie </LabelCampoo>

					<InputBioProfil placeholder='Decris toi :)' />

					<Text style={styles.infoInput}>Ta bio doit te reflèter, ne soit pas vulgaire!</Text>

					<View style={styles.btnContainer}>
						{/* Iput Option */}
						<LabelCampoo style={styles.nameLabel}>Bâtiment Universitaire :</LabelCampoo>

						<PickerBatiments />
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>




	);

};


const styles = StyleSheet.create({

	container: {

		flex: 1,
		paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
		marginLeft: 15,
		marginRight: 15,

		position: 'relative',
		flexDirection: 'column',
		backgroundColor: '#fff',
		//  alignItems: 'center',

	},
	colorViolet: {
		color: '#4D3D64',
	},
	profilModificationContainer: {
		flex: 0,
		height: '25%',
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
		color: '#4D3D64'
	},
	secondTitle: {
		fontSize: 20,
		fontWeight: 'bold',
		color: '#4D3D64',
	},
	topNav: {
		flex: 0,
		justifyContent: "space-between",
		width: '100%',
		height: 35,
		flexDirection: 'row',

	},
	btnContainer: {
		flex: 0,
		height: 200,

	}



});
