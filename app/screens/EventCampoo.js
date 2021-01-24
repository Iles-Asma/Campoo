import React from 'react'
import EventButtonCampoo from '../components/EventButtonCampoo';
import { ScrollView, StyleSheet, SafeAreaView,StatusBar,View, Image,Text} from 'react-native';
import EventButtonCampooLight from '../components/EventButtonLightCampoo';

export default class EventCampoo extends React.Component{

    render(){

        return(

            <SafeAreaView style={styles.container}>
                 <View style={styles.event_Buttons}>

                         <EventButtonCampoo>Evenements du Campus</EventButtonCampoo>
                       <EventButtonCampooLight style={styles.button_User}>Tes evenements</EventButtonCampooLight>


                 </View>

                <ScrollView  showsVerticalScrollIndicator={false}>

                   

                <View style={styles.event_Container}>

                    <Image style={styles.event_Image} source={require("../../assets/images/imagePost-Test.png")}/>

                    <View style={styles.event_Description} >

                        <Text style={styles.event_Text} >
                        Description de l’evenement Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                       
                        </Text>

                        <View style={styles.Meta_like}>
                            <View>
                               <Text style={styles.DataHeure} >05/09 - 17h20</Text>
                               <Text style={styles.DataHeure} >Lieu- Adresse</Text>

                            </View>


                              <View>

                                <Image style={styles.like_Button} source={require("../../assets/images/Bouton-like.png")}/>


                              </View>


                        </View>
                                   

                      </View>



                  </View>




                  <View style={styles.event_Container}>

                    <Image style={styles.event_Image} source={require("../../assets/images/imagePost-Test.png")}/>

                    <View style={styles.event_Description} >

                        <Text style={styles.event_Text} >
                        Description de l’evenement Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                       
                        </Text>

                        <View style={styles.Meta_like}>
                            <View>
                               <Text style={styles.DataHeure} >05/09 - 17h20</Text>
                               <Text style={styles.DataHeure} >Lieu- Adresse</Text>

                            </View>


                              <View>

                                <Image style={styles.like_Button} source={require("../../assets/images/Bouton-like.png")}/>


                              </View>


                        </View>
                                   

                      </View>



                  </View>


                    


                   





              </ScrollView>








            </SafeAreaView>








        );




    }



}

const styles =  StyleSheet.create ({

    container: {
        flex: 1,
        //  pour detecter la platform
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        flexDirection: 'column',
        justifyContent:'center',
    
        
        alignItems:'center',


    },

    event_Buttons:{
        marginTop:10,
        flex:1,
        flexDirection:'row',
        justifyContent: 'space-evenly',

        width: "100%",
        height:10,
        backgroundColor:'white',

        zIndex:999,
        
       


        

    },

    button_User:{

        backgroundColor:'white',

    },

    event_Container:{
        marginTop:40,
        borderWidth:2,
        borderColor:'#4D3D64',
        borderRadius:5,
        flex:1,
        alignSelf:'center',
        borderWidth:1,



        width:345,
        
        height:380,




    },

    event_Image:{
        alignSelf:'center',
        height:173,
        width:325,
        margin:10,
        borderRadius:6,

    },

    event_Description:{
        margin:10,

    },

    event_Text:{
        marginBottom:11,

    },

    DataHeure:{
        fontSize:20,

    },

    like_Button: {
        width:36,
        height:36,

    },

    Meta_like:{
        flex:1,
        flexDirection:'row',
        justifyContent:"space-between", 

    }





})
