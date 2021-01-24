import React from 'react';
import {  Text, View, Image, StyleSheet,} from 'react-native';

export default class HomeFeedCampoo extends React.Component{
   
    render() {

        return(

             
                <View style={styles.post_Item}>


                    <View style={styles.post_AssoProfile}>

                           <Image  source={require("../../assets/images/AssoProfile.png")} />

                           <Text style={styles.post_AssoName} >Lapin Associe</Text>

                    </View>

                            <Text style= {styles.post_description}>Belle photo!</Text>

                    <View style={styles.image_Container}>

                            <Image style={styles.post_Image} source={require("../../assets/images/imagePost-Test.png")}/>
                
                    </View>


                    <View style={styles.reaction_container}>

                            <Image style={styles.post_Reaction} source={require("../../assets/images/Bouton-commentaire.png")}/>

                            <Image style={styles.post_Reaction} source={require("../../assets/images/Boutton-partage.png")}/>

                    </View>
                   
                </View>




                               
            




        );
    }
};


const styles = StyleSheet.create ({

    // container: {
    //     flex: 1,
    //     //  pour detecter la platform
    //     paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    //     flexDirection: 'column',
    //     justifyContent:'center',
    //     borderWidth:2,
    //     alignItems:'center',


    // },

    post_Item:{
        flex:1,
        width:355,
        height: '100%',
        borderWidth:1,
        borderColor:'#DCD5E7',
        marginTop:9,
        borderRadius:9,
        

    },

   
    post_AssoProfile:{
        marginTop:11,
        marginBottom:14,
        flex:1,
        flexDirection:'row',
        alignItems: "center",
        marginLeft:10.5,
       
    },

    post_AssoName: {
        marginLeft :9.5,
        fontSize:16.5,


    },


    post_description:{  
        fontSize:11,
        color:'#4D3D64',
        marginLeft:10.5,
        
    },

    image_Container:{
        width:344,
        alignSelf:'center',
        height:"auto",
        marginTop:14,
        marginBottom:23,
       
    
       

    },
 

    post_Image:{
        height:200,
        borderRadius:6,
     
    
    },

    reaction_container:{
        flex:1,
        flexDirection:'row',
        height:36,    
        justifyContent:'space-between',
        marginBottom:10,

    },

    post_Reaction:{
       
        width:36,
        height:36,
        marginRight:17,
        marginLeft:17,
       
       
    }

})