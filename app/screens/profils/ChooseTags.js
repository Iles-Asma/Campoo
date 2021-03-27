import React,{useState} from 'react';
import { useEffect } from 'react';
import { StyleSheet, TouchableOpacity, StatusBar, SafeAreaView, ScrollView, View, Text } from 'react-native';
import Tags from '../../components/Tags';

export default function ChooseTags({ route, navigation }) {
	const CATEGORY_ID = route.params.category_id;
	const [tags,setTags] = useState([]);

	useEffect(()=>{
		async function getTags(){
			const RES = await fetch("https://campoo.fr/api/tag/" + CATEGORY_ID);
			const TAGS = await RES.json();
			setTags(TAGS.Data);
		}
		getTags()
			.catch(err => console.error(err));
		
	}, [CATEGORY_ID]);

	const _retrieveData = async () => {
		try {
			const value = await AsyncStorage.getItem('token');
			if (value !== null) {
				// We have data!!
				return value;
			}
		} catch (error) {

			// Error retrieving data
		}
	};

	async function addTag(tag){
		const TOKEN = await _retrieveData();

		const ADDED_POST = await fetch("https://campoo.fr/api/tag/" + tag.id, {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
				"Authorization": `Bearer ${TOKEN}`
			}
		})

		let pos = tags.findIndex((list) => list.id === tag.id);
		if(pos > -1){
			tags.splice(pos, 1);

			setTags([...tags]);
		}
	}



	return (

		<SafeAreaView style={styles.container}>

			{/* La navigation du haut */}
			<View style={styles.topNav}>
				{/* Le opPress à mettre */}
				<TouchableOpacity >
					<Text>Annuler</Text>
				</TouchableOpacity>
				<Text style={styles.secondTitle}>Choisis tes tags</Text>
				<TouchableOpacity >
					<Text>OK</Text>
				</TouchableOpacity>

			</View>
			<ScrollView showsVerticalScrollIndicator={false} >

				{/* Les differents tags */}

				<View style={styles.tagsContainer}>
					<View style={styles.tagsContent}>
						{console.log(tags)}
						{tags.map((tag => (
							<Tags key={tag.id} onPress={addTag} tag={tag}> + {tag.name}</Tags>
						)))}
						

					</View>
				</View>

			</ScrollView>
		</SafeAreaView>

	);



}

const styles = StyleSheet.create({

	container: {
		flex: 1,
		position: 'relative',
		// test pour detecter la platform
		paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
		flexDirection: 'column',
		backgroundColor: '#fff',
		alignItems: 'center',

	},

	tagsContainer: {
		flex: 1,
		width: '100%',
	},

	tagsContent: {
		flex: 1,
		width: '100%',
		marginBottom: 25,
		flexWrap: 'wrap',
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
	},

	tagTitle: {
		height: 30,
		marginTop: 10,
		width: '100%',

	},

	secondTitle: {
		fontSize: 20,
		fontWeight: 'bold',
		color: '#4D3D64',
	},

	topNav: {
		flex: 0,
		justifyContent: "space-between",
		width: '100%',
		height: 35,
		flexDirection: 'row',
		paddingHorizontal: '5%',
		alignItems: 'center',

	},
});