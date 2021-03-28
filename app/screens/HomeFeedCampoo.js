import React from 'react';
import { ScrollView, StyleSheet, SafeAreaView, Platform, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import PostCampoo from "../components/PostCampoo";


export default function HomeFeedCampoo({ navigation }) {


	return (


		// zone de sécurite pour télephone à encoche
		<SafeAreaView style={styles.container}>
			<StatusBar style='auto' />

			{/* permet de scroller sur l'ecran */}
			<ScrollView style={styles.scrollContainer} showsVerticalScrollIndicator={false}>

				<View style={styles.containerFeed}>
					{/*  affiche les posts */}
					<PostCampoo
						name="Lapin Associe"
						description="La description du post"
						onPress={() => navigation.navigate('CommentCampoo')} />
					<PostCampoo name="Lapin Associe"
						description="La description du post" />
					<PostCampoo name="Lapin Associe"
						description="La description du post" />
					<PostCampoo name="Lapin Associe"
						description="La description du post" />

				</View>

			</ScrollView>
		</SafeAreaView>

	);

};


const styles = StyleSheet.create({

	// le flex par default est colonne
	// la position par default est relative

	container: {
		flex: 1,
		//  pour detecter la platform : applique un paddingTop de 40px
		paddingTop: Platform.OS === "ios" ? StatusBar.currentHeight : 40,
		flexDirection: 'column',
		justifyContent: 'center',

		alignItems: 'center',
		backgroundColor: '#ffffff',


	},

	scrollContainer: {
		width: '90%',

	},

	containerFeed: {
		width: '100%',



	},



})