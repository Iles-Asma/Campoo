import React from 'react';
import { ScrollView, StyleSheet, SafeAreaView, Platform, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import PostCampoo from "../components/PostCampoo";


export default function HomeFeedCampoo({ navigation }) {


	return (

		<SafeAreaView style={styles.container}>
			<StatusBar style='auto' />
			<ScrollView style={styles.scrollContainer} showsVerticalScrollIndicator={false}>

				<View style={styles.containerFeed}>

					<PostCampoo
						name="Lapin Associe"
						description="La description du post"
						onPress={() => navigation.navigate('CommentCampoo')} />
					<PostCampoo name="Lapin Associe"
						description="La description du post"
						onPress={() => navigation.navigate('CommentCampoo')} />
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

	container: {
		flex: 1,
		//  pour detecter la platform
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