import React, { useState, useEffect } from 'react';
import { View, Image, TouchableOpacity, PermissionsAndroid, Alert, Platform, StyleSheet } from 'react-native';
import * as Permissions from 'expo-permissions';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import ImageIcon from '../../../assets/svg/ImageIcon';

export default function AddImage(props) {
	const [image, setImage] = useState(null);

	useEffect(() => {
		(async () => {
			if (Platform.OS !== 'web') {
				const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
				//await ImagePicker.requestMediaLibraryPermissionsAsync();
				if (status !== 'granted') {
					alert('Nous devons avoir une permission pour ouvrir');
				}
			}
		})();
	}, []);

	const pickImage = async () => {
		let result = await ImagePicker.launchImageLibraryAsync({
			mediaTypes: ImagePicker.MediaTypeOptions.All,
			allowsEditing: true,
			aspect: [4, 3],
			quality: 1,
		});

		console.log(result);

		if (!result.cancelled) {
			setImage(result.uri);
		}
	};

	return (
		<View style={props.style}>
			<ImageIcon onPress={pickImage} />
			{/* La preview */}
			{image && <Image source={{ uri: image }} style={styles.PreviewImage} />}
		</View>
	);
}


const styles = StyleSheet.create({

	PreviewImage: {

		width: 40,
		height: 40,
		marginLeft: 10,
		bottom: 20,




	}
});
