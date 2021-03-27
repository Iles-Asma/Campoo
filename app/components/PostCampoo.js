import React from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { CAMPOO } from "../../assets/themes/ThemeCampoo";

import CommentButton from '../../assets/svg/CommentButton';
import ShareButton from '../../assets/svg/ShareButton';
import ProfileHeaderCampoo from './header/ProfileHeaderCampoo';


export default class HomeFeedCampoo extends React.Component {

	render() {



		return (


			//  post integrale

			<View style={styles.containerPost}>

				<ProfileHeaderCampoo>
					<Text style={styles.post_AssoName}>{this.props.name}</Text>
				</ProfileHeaderCampoo>

				{/* description du poste  */}

				< Text style={styles.postDescription} >{this.props.description}</ Text>

				{/* container de l'image du post */}

				<View View style={styles.imageContainer} >

					<Image style={styles.postImage} source={require("../../assets/images/imagePost-Test.png")} />

				</View >

				{/* container partage et ajouter un commentaire  au post */}

				< View style={styles.reaction_container} >

					<TouchableOpacity onPress={this.props.onPress}>
						<ShareButton />
					</TouchableOpacity>

					<TouchableOpacity onPress={this.props.onPress}>
						<CommentButton />
					</TouchableOpacity>



				</ View>


			</View >






		);
	}
};


const styles = StyleSheet.create({


	headerPost: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		width: '100%',


	},

	containerPost: {
		flex: 1,
		padding: 10,
		width: '100%',
		height: 'auto',
		borderWidth: 1,
		borderColor: CAMPOO.primary,
		marginBottom: 15,
		borderRadius: 9,

	},

	subcontainerEvent: {
		alignSelf: 'center',
		height: "auto",
		width: '100%',

	},


	headerPostContent: {
		height: 70,
		flex: 1,
		flexDirection: 'row',
		alignItems: "center",

		//marginLeft: 10.5,

	},

	postAssoName: {
		marginLeft: 9.5,
		fontSize: 16.5,


	},


	postDescription: {

		color: CAMPOO.primary,


	},

	// container ( div ) contenant l'image 

	imageContainer: {
		width: '100%',
		alignSelf: 'center',
		height: "auto",
		marginTop: 14,
		marginBottom: 23,

	},

	// l'image en elle meme


	postImage: {
		width: '100%',
		height: 200,
		borderRadius: 5,


	},




	reaction_container: {
		flex: 1,
		flexDirection: 'row',
		height: 36,
		justifyContent: 'space-between',
		marginBottom: 10,
		alignItems: 'center',


	},

})