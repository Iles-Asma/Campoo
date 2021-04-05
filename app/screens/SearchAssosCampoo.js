import React from "react";
import { View, Text, Image, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity } from "react-native";

import InputCommentCampoo from "../components/input/InputCommentCampoo";

export default function SearchAssosCampoo() {

	return (
		<SafeAreaView style={style.bloc}>


			<View style={{ position: "relative", left: 20, bottom: 10 }}>
				<InputCommentCampoo />
			</View>

			<ScrollView style={style.blocBatiment} showsVerticalScrollIndicator={false}>
				<View style={style.blocBatimentListe}>
					<Image style={style.img} source={require("../../assets/images/Albert_Camus.png")}></Image>
					<Text style={style.Text}>BDE Albert Camus</Text>
				</View>
				<View style={style.blocBatimentListe}>
					<Image style={style.img} source={require("../../assets/images/AlexandraDavisNeel.png")}></Image>
					<Text style={style.Text}>BDE Alexandra Davis Neel</Text>
				</View>
				<View style={style.blocBatimentListe}>
					<Image style={style.img} source={require("../../assets/images/BoisEtang.png")}></Image>
					<Text style={style.Text}>BDE Bois de l'Étang</Text>
				</View>
				<View style={style.blocBatimentListe}>
					<Image style={style.img} source={require("../../assets/images/ClémentAder.png")}></Image>
					<Text style={style.Text}>BDE Clement Ader</Text>
				</View>
				<View style={style.blocBatimentListe}>
					<Image style={style.img} source={require("../../assets/images/Copernic.png")}></Image>
					<Text style={style.Text}>BDE Copernic</Text>
				</View>
				<View style={style.blocBatimentListe}>
					<Image style={style.img} source={require("../../assets/images/ESIEE.png")}></Image>
					<Text style={style.Text}>BDE ESIEE</Text>
				</View>
				<View style={style.blocBatimentListe}>
					<Image style={style.img} source={require("../../assets/images/Lavoisier.png")}></Image>
					<Text style={style.Text}>BDE Lavoisier</Text>
				</View>
				<View style={style.blocBatimentListe}>
					<Image style={style.img} source={require("../../assets/images/Pont_Chaussées.png")}></Image>
					<Text style={style.Text}>BDE Pont et Chaussées</Text>
				</View>
			</ScrollView>
		</SafeAreaView>
	);

}

const style = StyleSheet.create({
	bloc: {
		// backgroundColor : 'blue',
		flex: 1,
		marginTop: 15,
		backgroundColor: 'white',
	},

	blocBatiment: {
		marginTop: 8,
		marginHorizontal: 15,
	},

	blocBatimentListe: {
		paddingVertical: 20,
		borderBottomWidth: 1,
		borderBottomColor: "#4D3D64",
		flex: 1,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-around",
	},

	img: {
		height: 100,
		width: 100,
		position: "relative",
		right: 10,
	},
	Text: {
		position: "relative",
		right: 50,
		color: "#4D3D64",
		fontSize: 16,
		fontWeight: "bold",
	},
});
