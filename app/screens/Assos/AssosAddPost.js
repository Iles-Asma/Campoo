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



		fetch("https://campoo.fr/api/post", {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
				"Authorization": `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvY2FtcG9vLmZyXC9hcGlcL2FjY291bnQiLCJpYXQiOjE2MTY2NjcxMDUsImV4cCI6MTYxNjY3MDcwNSwibmJmIjoxNjE2NjY3MTA1LCJqdGkiOiJxU05kVGc1aWhhbjBXWENNIiwic3ViIjo0NywicHJ2IjoiMjNiZDVjODk0OWY2MDBhZGIzOWU3MDFjNDAwODcyZGI3YTU5NzZmNyJ9.4TLWxPA-_TDBVadBbetb94czi3r0O98sbSPmW6SE5U4`

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
				// compteur de caracter 
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
