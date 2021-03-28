import React from 'react'
import { Text, StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import { CAMPOO } from '../../assets/themes/ThemeCampoo'
import LikeButton from '../../assets/svg/LikeButton';
import LabelCampoo from './LabelCampoo'


// composant reutilisable 
export default class EventItemCampoo extends React.Component {
	render() {
		return (

			<View style={styles.containerEvent}>

				<View style={styles.subcontainerEvent}>
					{/* image de l'evenement */}
					<View style={styles.imageContainer}>

						<Image style={styles.eventImage} source={this.props.image} />

					</View>


					{/* texte decriptif de l'evemenet */}
					<View style={styles.eventDetail}>

						<LabelCampoo style={styles.titleEvent}>{this.props.title}</LabelCampoo>

						<Text style={styles.textEvent}>{this.props.eventText}</Text>
					</View>

					<View style={styles.eventData}>

						{/*  footer du composant affichant date, heure et lieu  */}
						<View style={styles.dataEvent}>
							<Text style={styles.data}>{this.props.date}</Text>
							<Text style={styles.data}>{this.props.hours}</Text>
							<Text style={styles.data}>{this.props.location}</Text>
						</View>


						<View style={styles.dotsContainer}>


							<TouchableOpacity onPress={this.props.onPress}>

								<LikeButton />

							</TouchableOpacity>

						</View>

					</View>

				</View>

			</View>

		)
	}
}

const styles = StyleSheet.create({

	containerEvent: {
		marginTop: 15,
		padding: 10,
		flex: 1,
		width: '100%',
		alignSelf: 'center',
		height: 'auto',
		borderWidth: 1,
		borderRadius: 5,
		borderColor: CAMPOO.primary,

	},


	imageContainer: {
		width: '100%',
		height: "auto",
		marginBottom: 10,

	},

	eventImage: {
		width: '100%',
		height: 175,
		borderRadius: 5,

	},

	dotsContainer: {
		justifyContent: 'center',

	},

	subcontainerEvent: {
		alignSelf: 'center',
		height: "auto",
		width: '100%',

	},

	data: {
		fontSize: 16,
		color: CAMPOO.primary,

	},

	eventDetail: {
		width: '100%',
		height: 'auto',

	},

	textEvent: {
		width: '100%',
		height: 'auto',
		color: CAMPOO.primary,

	},

	titleEvent: {
		paddingBottom: 3,

	},

	eventData: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between',
		width: '100%',
		marginTop: 6,

	},


})
