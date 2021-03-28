import React from 'react'
import { StyleSheet, ScrollView, SafeAreaView, Platform, } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import PostCampoo from '../components/PostCampoo';
import UserCommentCampoo from '../components/UserCommentCampoo';
import InputCommentCampoo from '../components/input/InputCommentCampoo';
import HeaderReturn from '../components/header/HeaderReturn';



export default function CommentCampoo({ navigation }) {



	return (



		// zone de securite de pour téléphone à encoche

		<SafeAreaView style={styles.container}>
			<StatusBar style='auto' />

			<HeaderReturn onPress={() => navigation.goBack()} />

			{/* element qui permet le scroll */}
			<ScrollView style={styles.scrollContainer} showsVerticalScrollIndicator={false}>


				<PostCampoo name='Lapin Associe'
				/>
				{/* commentaire utilisateur */}
				<UserCommentCampoo

					name='Lapin Associe'
					comment="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." />


			</ScrollView>


			{/* input pour ecrire un commentaire */}
			{/* fonctionne très bien sur Android*/}
			{/* sur iphone le clavier passe au dessus de l'input  */}
			<InputCommentCampoo />


		</SafeAreaView>

	);

};


const styles = StyleSheet.create({
	// le flex par default est colonne
	// la position par default est relative



	container: {
		flex: 1,
		//  pour detecter la platform 
		paddingTop: Platform.OS === "ios" ? StatusBar.currentHeight : 30,

		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#fff',


	},

	scrollContainer: {
		width: '90%',
		paddingTop: 10,

	},



});



{/* <SafeAreaView style={styles.mainContainer}>

<KeyboardAvoidingView behavior='padding' enabled={true} style={styles.container} >
    <StatusBar style='auto' />


    <HeaderReturn />






    <ScrollView style={styles.scrollContainer} showsVerticalScrollIndicator={false}>

        <PostCampoo name='Lapin Associe'
        />



        <UserCommentCampoo

            name='Lapin Associe'
            comment="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." />
        <UserCommentCampoo
            name='Lapin Associe'
            comment="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." />


        <UserCommentCampoo
            name='Lapin Associe'
            comment="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." />


        <UserCommentCampoo
            name='Lapin Associe'
            comment="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." />

        <UserCommentCampoo
            comment="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." />

        <UserCommentCampoo
            comment="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." />




    </ScrollView>



    <InputCommentCampoo />



</KeyboardAvoidingView>


</SafeAreaView> */}