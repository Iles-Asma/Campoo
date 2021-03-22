'use strict';

import React from 'react';

import { StyleSheet, View, Text } from 'react-native';

export default class TitlePage extends React.Component {


	render() {

		return (
			// creation du composant unique tag static
			<Text style={styles.titleText}>{this.props.children}</Text>


		);

	}

}

const styles = StyleSheet.create({
	// La forme generale des titre
	titleText: {
		height: 55,
		marginTop: 20,
		fontSize: 25,
		fontWeight: '500',
		color: '#4D3D64'
	},


})