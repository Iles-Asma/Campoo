import React, { useState, useEffect } from 'react';
import { StyleSheet, Image, StatusBar, TouchableOpacity, SafeAreaView, View, Text } from 'react-native';
import { CAMPOO } from '../../../assets/themes/ThemeCampoo';
import SettingsSvg from '../../components/SettingsSvg';
import PenSvg from '../../components/PenSvg';
import Tags from '../../components/Tags';
import { counterEvent } from 'react-native/Libraries/Performance/Systrace';
import AsyncStorage from '@react-native-async-storage/async-storage';





export default function UserProfil({ navigation }) {
	const [tags, setTags] = useState([]);


	useEffect(() => {
		async function getTags() {
			const USER = await _retrieveUser();
			const TOKEN = await _retrieveData();
			console.log(USER);
			const RES = await fetch("https://campoo.fr/api/tag/" + USER.id, {
				method: 'GET',
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json',
					"Authorization": `Bearer ${TOKEN}`
				}
			})
			const TAGS = await RES.json();
			setTags(TAGS.Data);
		}
		getTags()
			.catch(err => console.error(err));

	}, []);
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
	const _retrieveUser = async () => {
		try {
			const value = await AsyncStorage.getItem('user');
			if (value !== null) {
				// We have data!!
				console.log(value);
				return value;
			}
		} catch (error) {

			// Error retrieving data
		}
	};


	return (

		<SafeAreaView style={styles.container}>
			{/* Contenaire  */}
			<View style={styles.profilIdContainer}>

				<View style={[styles.profilSettings, styles.gap]}>

					{/* Profil de l'image */}
					<Image source={require("../../../assets/imgProfil/Badeaubleu.png")} style={styles.profilPics} />

					<TouchableOpacity style={[styles.profilReglage]} onPress={() => navigation.navigate('SettingStackScreen')}>
						<SettingsSvg />
					</TouchableOpacity>

					<TouchableOpacity style={[styles.profilModif]} onPress={() => navigation.navigate('UserModificationPage')}>
						<PenSvg />
					</TouchableOpacity>
				</View>

			</View>

			{/* Le pseudo et nom de l'user */}
			<View style={styles.profilInfoContainer}>
				<Text style={[styles.Pname, styles.colorViolet]}>Entoinee</Text>

				<Text style={[styles.nickName, styles.colorViolet]}>LeBgDu667</Text>

			</View>

			{/* l'
               icone de son batiment et la description du profil */}
			<View style={styles.bioContainer}>

				<View style={styles.bioItem}>
					<Image source={require("../../../assets/imgProfil/esieeIcon.png")} style={[styles.iconsBat, styles.gap]} />
					<Text style={[styles.bioBloc, styles.colorViolet]} >Nouvelle musique disponible sur toutes les platformes allez check Nouvelle musique disponible sur toutes les platformes allez check Nouvelle musique disponible sur toutes les platformes allez check</Text>

				</View>

			</View>


			<Text style={[styles.colorViolet, styles.tagTitle]}>Centre d'intérêts:</Text>

			{/* les tags figurants sur le profil utilisateur */}

			<View style={styles.tagsContainer}>
				<View style={styles.tagsContent}>

					<Tags>Musique</Tags>
					<Tags>Cinema</Tags>
					<Tags>Restaux</Tags>



					<Tags>Livres</Tags>
					<Tags>Musées</Tags>
					<Tags>Natation</Tags>

					<Tags>Musique</Tags>
					<Tags>Cinema</Tags>
					<Tags>Restaux</Tags>



					<Tags>Livres</Tags>
					<Tags>Musées</Tags>
					<Tags>Natation</Tags>

				</View>

			</View>

		</SafeAreaView>




	);

};

const styles = StyleSheet.create({

	container: {
		flex: 1,
		paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
		position: 'relative',
		flexDirection: 'column',
		backgroundColor: '#fff',
		alignItems: 'center',
	},

	colorViolet: {
		color: CAMPOO.primary,
	},

	profilIdContainer: {
		flex: 0,
		height: '20%',
		width: '100%',
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: 'white',

	},

	profilInfoContainer: {
		flex: 0,
		height: 'auto',
		width: '100%',
		alignItems: 'center',
		justifyContent: 'center',

	},

	profilSettings: {
		flex: 1,
		width: '100%',
		position: 'relative',
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'row',

	},

	profilPics: {
		width: 130,
		height: 130,
		borderRadius: 130 / 2,
	},
	profilReglage: {
		width: 25,
		height: 25,
		position: 'absolute',
		right: 75,

	},

	profilModif: {
		width: 25,
		height: 25,
		position: 'absolute',
		right: 30,

	},

	Pname: {
		fontSize: 16,
		marginBottom: 10,
	},

	nickName: {
		fontSize: 30,
		fontWeight: 'bold',
	},

	bioContainer: {
		paddingHorizontal: '4%',
		flex: 0.4,
		flexDirection: 'column',
		height: '50%',
		width: '100%',
		alignItems: 'center',
		justifyContent: 'center',
		borderBottomWidth: 1,
		borderColor: 'rgba(158, 150, 150, .5)',

	},
	bioItem: {
		flex: 1,
		flexDirection: 'row',
		width: '100%',
		height: 'auto',

	},
	iconsBat: {
		flex: 0,
		alignSelf: 'center',
		marginLeft: 10,
		width: 75,
		height: 65,

	},
	bioBloc: {

		width: '80%',
		height: 'auto',
		alignSelf: 'center',
		fontSize: 14,
		marginLeft: 25,
		marginTop: 15,
		textAlign: 'justify',
		flexShrink: 1,



	},
	tagsContainer: {
		flex: 1,
		width: '100%',
		// marginTop:5,





	},
	tagsContent: {
		flex: 1,
		width: '100%',
		marginBottom: 25,
		flexDirection: 'row',
		flexWrap: 'wrap',
		justifyContent: 'center',
		alignItems: 'center',

	},
	tagTitle: {
		height: 30,
		fontSize: 17,
		fontWeight: 'bold',
		marginLeft: 20,
		marginTop: 18,
		width: '100%',

	}



});

