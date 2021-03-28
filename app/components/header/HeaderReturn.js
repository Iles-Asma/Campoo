import React from 'react'
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native'
import { CAMPOO } from '../../../assets/themes/ThemeCampoo';
import ArrowLSvg from '../ArrowLSvg';

// HEADER AVEC BOUTON RETOUR 
export default class HeaderReturn extends React.Component {
	render() {
		return (

			<View style={styles.headerReturn}>

				<TouchableOpacity onPress={this.props.onPress} >
					<ArrowLSvg />
				</TouchableOpacity>

				<Text style={styles.titleHeader}>{this.props.headerTitle}</Text>

			</View>

		)
	}
}

const styles = StyleSheet.create({
	headerReturn: {
		flex: 0,
		flexDirection: 'row',
		justifyContent: 'flex-start',
		paddingHorizontal: '5%',
		alignItems: 'center',
		width: '100%',
		position: "relative",  //changer ça positiion de arrow en fonction de l'ecran
		top: 20,
		height: 50


	},

	titleHeader: {
		fontSize: 25,
		color: CAMPOO.primary,
		fontWeight: 'bold',

	},
})
