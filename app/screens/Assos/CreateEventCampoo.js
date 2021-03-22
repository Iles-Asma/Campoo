import { StyleSheet, ScrollView, StatusBar, SafeAreaView, View, Text, TouchableOpacity } from 'react-native';
// import Tags from '../../components/Tags';
import PickerBatiments from "../../components/PickerBatiments";
import LabelCampoo from "../../components/LabelCampoo";
import InputModifProfil from '../../components/input/InputModifProfil';
import InputBioProfil from '../../components/input/InputBioProfil';
import ArrowLSvg from "../../components/ArrowLSvg";
import ButtonCampoo from '../../components/button/ButtonCampoo';
import TextInputAssos from '../../components/input/TextInputAssos';

export default function CreateEventCampoo({ navigation }) {

	return (
		// contenu generale

		<SafeAreaView style={styles.container}>

			{/* La navigation du haut */}
			<View style={styles.topNav}>

				{/*Le onPress a mettre  */}
				<TouchableOpacity >
					<ArrowLSvg onPress={() => navigation.goBack()} />
				</TouchableOpacity>
				<View style={styles.namePage}>
					<Text style={styles.secondTitle}>Création d'évenement</Text>
				</View>

			</View>

			{/* Contenaire de information a entree*/}
			<ScrollView showsVerticalScrollIndicator={false} >

				<View style={styles.modificationContent}>

					<LabelCampoo style={styles.nameLabel}>Nom de l'évenement</LabelCampoo>

					{/* Nom de l'event */}
					<InputModifProfil placeholder="Asso Uge" />

					{/* detaill de l'evenent */}

					<LabelCampoo style={styles.nameLabel}>Descriptif de l'évenement</LabelCampoo>

					<TextInputAssos placeholder='' />

					{/* Date de l'event */}
					<LabelCampoo style={styles.nameLabel}>Date de l'évenement</LabelCampoo>


					<InputModifProfil placeholder="18/07/2020" />

					{/* heure de l'event */}
					<LabelCampoo style={styles.nameLabel}>Heure de l'évenement</LabelCampoo>

					<InputModifProfil placeholder="18h30" />



					{/* Input Option */}
					<LabelCampoo style={styles.nameLabel}>Bâtiment Universitaire :</LabelCampoo>

					<PickerBatiments />

					{/* date et lieu de l'event */}
					<LabelCampoo style={styles.nameLabel}>Lieu/adresse</LabelCampoo>

					<InputBioProfil placeholder='2 rue albert....' />


					{/* Validation */}
					<View style={styles.btnContainer} >
						<ButtonCampoo> Valide </ButtonCampoo>
					</View>


				</View>
			</ScrollView>
		</SafeAreaView>




	);

};


const styles = StyleSheet.create({

	container: {

		flex: 1,
		paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
		marginLeft: 20,
		marginRight: 20,

		position: 'relative',
		flexDirection: 'column',
		backgroundColor: '#fff',
		//  alignItems: 'center',
	},
	colorViolet: {
		color: '#4D3D64',
	},
	profilModificationContainer: {
		flex: 0,
		height: '25%',
		width: '100%',
		// flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: 'white',

	},
	profilPics: {
		width: 130,
		height: 130,
		borderRadius: 130 / 2,
	},
	modificationContent: {
		flex: 1,
		justifyContent: 'flex-start',
		width: '100%',
	},
	nameLabel: {

		fontSize: 30,
		marginTop: 20,
		marginBottom: 5,
		fontWeight: 'bold',
	},

	infoInput: {
		fontSize: 12,
		flex: 0,
		marginTop: 10,
		alignSelf: "flex-end",
		marginRight: 5,
		color: '#4D3D64'
	},
	btnContainer: {
		flex: 2,
		width: '100%',
		marginVertical: 20,
		justifyContent: 'center',
		alignItems: 'center',

	},
	namePage: {
		flex: 0,
		justifyContent: 'center',
		width: '100%',
		flexDirection: 'row',

	},
	secondTitle: {

		fontSize: 20,

		fontWeight: 'bold',
		color: '#4D3D64',

	},
	topNav: {
		flex: 0,

		width: '100%',
		height: 40,
		flexDirection: 'row',
		borderBottomWidth: 2,
		borderColor: 'rgba(158, 150, 150, .3)',

	},



});
