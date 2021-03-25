import React, { useState, useEffect } from "react";
import { View, Image, TouchableOpacity, PermissionsAndroid, Alert, Platform, StyleSheet } from "react-native";
// import * as Permissions from 'expo-permissions';
// import * as ImagePicker from 'expo-image-picker';
import AddGallery from "../../../assets/svg/AddGallery";
import Constants from "expo-constants";
/*
export default function ImageChooser() {
  const [imageSource, setImageSource] = useState([]);

  getPermissionAsync = async () => {
      
        const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
        
  };
  
  
  useEffect(() => {
      getPermissionAsync();
  }, []);
  
  _getPhotoLibrary = async () => {
      let result = await ImagePicker.launchImageLibraryAsync({
       allowsEditing: true,
       aspect: [4, 3]
      });
      if (!result.cancelled) {
       setImageSource({ image: result.uri }); 
      }
  }
  

  
    return (
      <View style={styles.btnAdd}>
        <AddGallery onPress={pickImage}/>
        
        {image && <Image source={{ uri: image }} style={styles.PreviewImage} />}
      </View>
    );
   
  
}

const styles = StyleSheet.create({
  container: {
      paddingLeft: 20,
      paddingVertical: 10
  },    
  button: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      width: 200,
      height: 150,
      borderWidth: 1,
      borderColor: '#C6C6C8',
      borderRadius: 5,
      backgroundColor: '#fff'
  },
  image: {
      width: 200,
      height: 150
  },
  icon: {
      color: '#C6C6C8'
  },
  PreviewImage:{
    marginVertical:10,
    width:50,
    height:50,
    flex:0,
    flexDirection:'row',
}
})

*/
export default function ButtonGallery() {
	const [image, setImage] = useState(null);

	useEffect(() => {
		(async () => {
			if (Platform.OS !== "web") {
				const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
				//await ImagePicker.requestMediaLibraryPermissionsAsync();
				if (status !== "granted") {
					alert("Nous devons avoir une permission pour ouvrir");
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
		<View style={styles.btnAdd}>
			<AddGallery onPress={pickImage} />
			{/* La preview */}
			{image && <Image source={{ uri: image }} style={styles.PreviewImage} />}
		</View>
	);
}

const styles = StyleSheet.create({
	btnAdd: {
		flex: 1,
		marginVertical: 10,
		alignItems: "center",
		justifyContent: "center",
	},

	PreviewImage: {
		marginVertical: 10,
		width: 50,
		height: 50,
		flex: 0,
		flexDirection: "row",
	},
});
