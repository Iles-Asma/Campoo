'use strict';

import React from 'react';
import { StyleSheet,TouchableOpacity,StatusBar, SafeAreaView,ScrollView, Image,View, Text } from 'react-native';
import Categorie from '../components/Categorie';

export default class CategoriesTags extends React.Component {

   

 

    render() {

        return (

            <SafeAreaView style={styles.container}>
            {/* Titre de l'onglet */}
            <Text style={styles.titleText}>Choisis une Catégorie</Text> 
              
 <ScrollView showsVerticalScrollIndicator={false} >
                         
{/* Les differents tags */}

                <View style={styles.categorieContainer}>


             <TouchableOpacity>
             
             <Image style={styles.categorieShape}  source={require("../../assets/categories/cinema.png")}  ></Image>
        
             </TouchableOpacity>

             <TouchableOpacity>
             
             <Image style={styles.categorieShape}  source={require("../../assets/categories/games.png")}  ></Image>
        
             </TouchableOpacity>

             <TouchableOpacity>
             
             <Image style={styles.categorieShape}  source={require("../../assets/categories/sport.png")}  ></Image>
        
             </TouchableOpacity>

             <TouchableOpacity>
             
             <Image style={styles.categorieShape}  source={require("../../assets/categories/art.png")}  ></Image>
        
             </TouchableOpacity>
             {/* <Categorie> </Categorie>
             <Categorie> </Categorie>
             <Categorie> </Categorie>         */}
   
 
             </View>
             
            </ScrollView>
            </SafeAreaView>

        );

    }

}

const styles = StyleSheet.create({

    container: {
 
        flex: 1,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
         position:'relative',
        margin:10,
         backgroundColor:'#fff',
          alignItems: 'center',
         
     },
     test:{
        
        //  borderRadius:30,
        //  borderWidth:5,
       
     },
     titleText:{
         height:55,
         marginTop:20,
         fontSize:25,
         fontWeight:'500',
         color:'#4D3D64'
     },
    categorieContainer:{
        flex:2,
        width:'100%',
        height:'100%',
        justifyContent: 'center',
    alignItems: 'center',
    },
    categorieShape:{
        width:365,
        height:125,
        flex:0,
        justifyContent:'center',
        alignItems:'center',
        marginHorizontal:10 ,
      
         marginBottom:20,
        borderRadius:30,
        //  borderWidth:5,
    },
});