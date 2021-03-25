import React from 'react';
import { TextInput, StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { CAMPOO } from '../../../assets/themes/ThemeCampoo';
import ImageIcon from '../../../assets/svg/ImageIcon';
import AddImage from '../../components/button/AddImage'
import ButtonGallery from '../button/ButtonGallery';


export default class TextInputAssos extends React.Component {


	render() {
		return (

			// conatainer de la zone de texte
			<View style={styles.TextAreaContainer}>

				{/* zone de texte */}
				<TextInput

					style={styles.TextAreaCampoo}
					underlineColorAndroid="transparent"
					placeholder={this.props.placeholder}
					placeholderTextColor={"#9E9E9E"}
					numberOfLines={20}
					multiline={true}
					maxLength={300}


					onChangeText={this.props.onChangeText}
				/>

				<AddImage style={styles.IconTextrea} onPress={this.props.onPress} />

				{/* afffichage limite de caractere */}

				<Text style={styles.caracterLimit}>{this.props.limit}</Text>

			</View>
		)
	}
}

const styles = StyleSheet.create({

	TextAreaContainer: {
		width: '90%',
		height: 'auto',
		alignSelf: 'center',
		flex: 1,
		marginBottom: 0,


	},
	IconTextrea: {
		bottom: 40,
		padding: 10,
		flex: 0,
		flexDirection: 'row',

		width: 'auto',
	},

	caracterLimit: {
		bottom: 40,
		textAlign: 'right',
		color: CAMPOO.fourthly,

	},



	TextAreaTitle: {
		textAlign: 'center',
		fontSize: 16,
		fontWeight: 'bold',
		color: CAMPOO.primary,

	},

	TextAreaCampoo: {
		marginTop: 5,
		color: CAMPOO.primary,
		padding: 10,
		textAlignVertical: 'top',
		borderWidth: 2,
		borderColor: CAMPOO.primary,
		borderRadius: 10,
		backgroundColor: "#FFFFFF",
		height: 200,
		width: '100%',
	}

})

