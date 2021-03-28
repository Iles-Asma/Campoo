import React, { useState } from 'react'
import { StyleSheet, SafeAreaView, StatusBar, Platform } from 'react-native'
import AddImage from '../../components/button/AddImage'
import LabelCampoo from '../../components/LabelCampoo';
import TextInputAssos from '../../components/input/TextInputAssos';
import HeaderAddPost from '../../components/header/HeaderAddPost'



export default function AssosAddPost(props) {

	const [postText, setPostText] = useState('');
	const [postImage, setPostImage] = useState('');
	const [errorMessage, setErrorMessage] = useState('');


	// pour recuperer le token stocker on locale sur le télephone
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



	//  envoie une requete pour cree un post
	const onSubmit = async () => {
		const token = await _retrieveData();



		fetch("https://campoo.fr/api/post", {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
				"Authorization": `Bearer ${token}`

			},
			body: JSON.stringify({

				'content': postText,
				'image': null,

			})
		})
			// response.json()
			.then((response) => response.json())
			.then((Message) => {

				console.log(Message);

				// renvoie a l'écran affichant les posts si Success
				if (Message.Status === 'Success') {

					props.navigation.goBack('AssosFeedCampoo');

				} else {


					setErrorMessage(Message.Message.post[0]);

				}
			})
			.catch((error) => {
				// console.error(error);
			});
	}



	return (
		<SafeAreaView style={styles.container}>

			{/* header du screen */}
			<HeaderAddPost
				onReturn={() => props.navigation.goBack()}
				onPress={onSubmit}
			/>

			{/* titre de la zone de texte */}

			<LabelCampoo style={styles.labelInput} >Que souhaitez-vous dire ?</LabelCampoo>

			{/* zone d'ecriture de texte */}

			<TextInputAssos
				onChangeText={(text) => setPostText(text)}
				// compteur de caractère 
				limit={`${postText.length}/300`}
				value={props.postText}
				errorText={errorMessage}
			>

				{/* bouton acces a la galerie photo du telephone  */}

				<AddImage onChange={(value) => setPostImage(value)} value={props.postImage} />


			</TextInputAssos>





		</SafeAreaView>

	);

}

const styles = StyleSheet.create({
	// le flex par default est colonne
	// la position par default est relative

	container: {
		flex: 1,
		//  pour detecter la platform
		paddingTop: Platform.OS === "ios" ? StatusBar.currentHeight : 40,
		flexDirection: 'column',
		justifyContent: 'center',
		backgroundColor: '#ffffff',

		alignItems: 'center',


	},
	caracterLimit: {

		textAlign: 'right',

	},

	headerAddPost: {

		flex: 0,
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingHorizontal: '5%',
		alignItems: 'center',
		width: '100%',
		height: 50,

	},
	labelInput: {
		fontSize: 30,
		color: 'red',
		fontWeight: 'bold',

	},








})
