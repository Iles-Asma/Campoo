import React, { useState, useEffect } from 'react';
import { Button,Text, StyleSheet,Image, View, Platform } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import AddGallery from '../../../assets/svg/AddGallery';
import Constants from 'expo-constants';

export default function ButtonGallery() {
  const [image, setImage] = useState(null);

  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
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
    <View style={styles.btnAdd}>
      <AddGallery onPress={pickImage}/>
      
      {image && <Image source={{ uri: image }} style={styles.PreviewImage} />}
    </View>
  );
}


const styles = StyleSheet.create({
  btnAdd:{ 
    flex: 1, 
    marginVertical:10,
    alignItems: 'center', 
  justifyContent: 'center' 
},

    PreviewImage:{
        marginVertical:10,
        width:50,
        height:50,
        flex:0,
        flexDirection:'row',
    }
});