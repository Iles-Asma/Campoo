import React from 'react'
import EventButtonCampoo from '../components/button/EventButtonCampoo';
import { ScrollView, TouchableOpacity, StyleSheet, SafeAreaView, View, Text, Platform } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { CAMPOO } from '../../assets/themes/ThemeCampoo';
import EventUserItem from '../components/EventUserItem';


// ecran affichant les evnent mis en favoris par l'utilisateurs

export default function EventUserCampoo(props, { navigation }) {

	return (

		<SafeAreaView style={styles.container}>
			{/* affiche la bar de status ( battery et heure) */}
			<StatusBar style='auto' />

			{/* header contenant les 2 boutons */}
			<View style={styles.headerContainer}>

				<TouchableOpacity style={styles.mainButton} onPress={() => navigation.navigate('EventCampoo')}>
					<EventButtonCampoo >
						<Text style={styles.titleButton1}>Evenement du campus</Text>

					</EventButtonCampoo>

				</TouchableOpacity>


				<TouchableOpacity style={styles.userButton}>
					<EventButtonCampoo >
						<Text style={styles.titleButton2} >Tes evenements</Text>
					</EventButtonCampoo>
				</TouchableOpacity>


			</View>
			<ScrollView style={styles.scrollContainer} showsVerticalScrollIndicator={false}>

				<View style={styles.eventContainer}>

				</View>

				<EventUserItem
					image={require("../../assets/images/imagePost-Test.png")}
					title="TITRE DE L'EVENEMENT"

					eventText="Description de l’evenement Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad "

					date='17/05/2020'

					hours='18h20'

					location="2 rue l'eglantine"

				/>


				<EventUserItem
					image={require("../../assets/images/imagePost-Test.png")}

					title="TITRE DE L'EVENEMENT"

					eventText="Description de l’evenement Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad "

					date='17/05/2020'

					hours='18h20'

					location="2 rue l'eglantine" />

				<EventUserItem
					image={require("../../assets/images/imagePost-Test.png")}

					title="TITRE DE L'EVENEMENT"

					eventText="Description de l’evenement Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad "

					date='17/05/2020'

					hours='18h20'

					location="2 rue l'eglantine" />

			</ScrollView>

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
		alignItems: 'center',
		backgroundColor: '#ffffff',

	},

	userButton: {
		backgroundColor: CAMPOO.primary,
		flex: 0,
		flexDirection: 'row',
		width: '45%',
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 5,
		height: 50,

	},

	titleButton2: {
		height: 50,
		fontSize: 16,
		color: 'white',

	},

	mainButton: {
		backgroundColor: CAMPOO.secondary,
		flex: 0,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		width: '45%',
		borderRadius: 5,
		height: 50,
		paddingHorizontal: 40,
		textAlign: 'center',

	},

	titleButton1: {
		height: 50,
		fontSize: 15,
		color: CAMPOO.primary,
	},

	scrollContainer: {
		width: '90%',
	},

	eventContainer: {
		width: '100%',

	},

	headerContainer: {
		width: '90%',
		height: 60,
		flex: 0,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',

	},

})
