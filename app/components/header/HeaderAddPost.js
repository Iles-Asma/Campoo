import React from 'react'
import { StyleSheet, View, TouchableOpacity } from 'react-native'
import ArrowLSvg from '../ArrowLSvg';
import SendButton from '../../../assets/svg/SendButton'

// HEADER CONTENANT BOUTON RETOUR ET ENVOIE POUR L'ECRAN DE CREATION DE POST
export default class HeaderAddPost extends React.Component {
	render() {
		return (

			<View style={styles.headerAddPost}>

				<TouchableOpacity onPress={this.props.onReturn}>
					<ArrowLSvg />
				</TouchableOpacity>

				<TouchableOpacity onPress={this.props.onPress}>
					<SendButton />
				</TouchableOpacity>

			</View>

		)
	}
}

const styles = StyleSheet.create({
	headerAddPost: {

		flex: 0,
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingHorizontal: '5%',
		alignItems: 'center',
		width: '100%',
		height: 50,

	},
})
