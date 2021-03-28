import React from 'react'
import { StyleSheet, View, ScrollView, SafeAreaView, StatusBar, TouchableOpacity } from 'react-native'

import PostCampoo from '../../components/PostCampoo';
import AddButton from '../../../assets/svg/AddButton'


// écran affichant les posts à la manière d'instagramm pour un compte associé

export default function AssoFeedCampoo({ navigation }) {


	// requête a l'API DE campoo recuperant les posts en BDD
	fetch("https://campoo.fr/api/post", {
		method: 'GET',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json',

		},

	})

		.then((response) => response.json())
		.then((Message) => {

			console.log(Message);
			if (Message.Status === 'Success') {


			} else {



			}
		})
		.catch((error) => {
			// console.error(error);
		});


	return (
		<SafeAreaView style={styles.container}>

			<ScrollView style={styles.scrollContainer} showsVerticalScrollIndicator={false}>

				<View style={styles.containerAssoFeed}>


					<PostCampoo
						name=''
						description='la description du post' />
					<PostCampoo />
					<PostCampoo />
					<PostCampoo />

				</View>

			</ScrollView>
			<TouchableOpacity style={styles.addButton} onPress={() => navigation.push('AssosAddPost')}>
				<AddButton />
			</TouchableOpacity>




		</SafeAreaView>
	)

}

const styles = StyleSheet.create({

	container: {
		flex: 1,
		//  pour detecter la platform
		paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'white',

	},



	scrollContainer: {
		width: '90%',
		paddingTop: 50,

	},

	assoAddpost: {
		width: '90%',
		height: 60,
		justifyContent: 'flex-end',
		alignItems: 'center',
		flexDirection: 'row',


	},

	addButton: {

		position: 'absolute',
		top: '6%',
		right: 20,
		shadowColor: "#000000",
		shadowOpacity: 0.3,
		shadowRadius: 4,
		shadowOffset: {
			height: 3,
			width: 3
		},
	},


	containerAssoFeed: {
		width: '100%',

	},



})

