import React,{useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StyleSheet, ScrollView, StatusBar, SafeAreaView, View, Text, TouchableOpacity } from 'react-native';
import PickerBatiments from "../../components/PickerBatiments";
import LabelCampoo from "../../components/LabelCampoo";
import InputModifProfil from '../../components/input/InputModifProfil';
import InputBioProfil from '../../components/input/InputBioProfil';
import ArrowLSvg from "../../components/ArrowLSvg";
import ButtonCampoo from '../../components/button/ButtonCampoo';
import ButtonGallery from '../../components/button/ButtonGallery';



export default function AssocRequest(props) {

    const [name, setName] = useState('');
    const [campoo_name, setCampooName] = useState('');
    const [bio, setBio] = useState('');
    const [docu, setDocu] = useState('');
    const [batiments, setBatiments] = useState('');

    const [errorMessage, setErrorMessage] = useState('');

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



    // fonction qui fait une requete  en post et qui renvoie une reponse d'erreur  au onPress
    const onSubmit = async () => {

        const token = await _retrieveData();
        // console.log(token);



        fetch("https://campoo.fr/api/association", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                "Authorization": `Bearer ${token}`

            },
            body: JSON.stringify({

                'name': name,
                'campoo_name': campoo_name,
                'biography': bio,
                'proof':docu,
                'bulding':batiments,


            })
        })
            // response.json()
            .then((response) => response.json())
            .then((Message) => {

                console.log(Message);
                if (Message.Status === 'Success') {

                    console.log("success");
                    // props.navigation.navigate('SettingPage');



                } else {
                    console.error(error);

                    setErrorMessage('erreur');

                }
            })
            .catch((error) => {
                // console.error(error);
            });


    }



    return (
        // contenu generale

        <SafeAreaView style={styles.container}>

            {/* La navigation du haut */}
            <View style={styles.topNav}>

                {/*Le onPress a mettre  */}
                <TouchableOpacity>
                    <ArrowLSvg onPress={() => navigation.goBack()} />
                </TouchableOpacity>

                <View style={styles.namePage}>
                    <Text style={styles.secondTitle}>Réglage</Text>
                </View>

            </View>

            {/* Contenaire des information a modifier */}
            <ScrollView showsVerticalScrollIndicator={false} >

                <View style={styles.modificationContent}>

                    <LabelCampoo style={styles.nameLabel}>Prends en photo le justificatif d’association !</LabelCampoo>


                    <ButtonGallery onChangeText={(text) => setDocu(text)} value={props.docu} errorText={errorMessage}/>

                    {/* <InputBioProfil placeholder='Dis nous les information de ton association' onChangeText={(text) => setDocu(text)} value={props.docu} errorText={errorMessage}  /> */}

                    <Text style={styles.infoInput}>Pour plus d'iformations sur les documents à transmettre visite notre FAQ</Text>

                    {/* Nom de l'asso */}
                    <LabelCampoo style={styles.nameLabel}>Quel est le nom de l’asso ??</LabelCampoo>


                    <InputModifProfil placeholder='ex: BDE Staps' type='name' onChangeText={(text) => setName(text)} value={props.name} errorText={errorMessage} />

                    {/* Nom sur campoo ou changement en adresse mail */}
                    <LabelCampoo style={styles.nameLabel}>Nom sur Campoo </LabelCampoo>


                    <InputModifProfil placeholder='ex: BDE Staps UGE' onChangeText={(text) =>  setCampooName(text)} value={props.campoo_name} errorText={errorMessage}/>

                    {/* Bio */}
                    <LabelCampoo style={styles.nameLabel}>Biographie</LabelCampoo>

                    <InputBioProfil placeholder='Decris ton association en quelques mots' onChangeText={(text) =>  setBio(text)} value={props.bio} errorText={errorMessage}/>


                    {/* Input Option */}
                    <LabelCampoo style={styles.nameLabel}>Bâtiment Universitaire :</LabelCampoo>

                    <PickerBatiments  onChangeText={(text) =>  setBatiments(text)} value={props.batiments} errorText={errorMessage}/>

                    {/* Validation */}
                    <View style={styles.btnContainer} >
                        <ButtonCampoo onPress={onSubmit}> Valide </ButtonCampoo>
                    </View>


                </View>
            </ScrollView>
        </SafeAreaView>




    );

};


const styles = StyleSheet.create({

    container: {

        flex: 1,
        paddingTop: Platform.OS === "ios" ? StatusBar.currentHeight : 50,
        position: 'relative',
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: '#fff',


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
        paddingHorizontal: '5%',
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
        paddingHorizontal: '5%',
        justifyContent: 'center',
        marginTop: '5%',

        width: '100%',
        height: 40,
        flexDirection: 'row',
        borderBottomWidth: 2,
        borderColor: 'rgba(158, 150, 150, .3)',

    },



});
