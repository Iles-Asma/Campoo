import React from 'react'
import EventButtonCampoo from '../components/EventButtonCampoo';
import { ScrollView, StyleSheet, SafeAreaView,StatusBar,View, Image,Text} from 'react-native';
import EventButtonCampooLight from '../components/EventButtonLightCampoo';

export default class EventCampoo extends React.Component{

    render(){

        return(

            <SafeAreaView style={styles.container}>

                 <View style={styles.event_ButtonsContainer}>




                      <View style={styles.event_Buttons}>

                          <EventButtonCampoo>Evenements du Campus</EventButtonCampoo>

                           <EventButtonCampooLight style={styles.button_User}>Tes evenements</EventButtonCampooLight> 


                      </View>

                         


                 </View>

                <ScrollView  showsVerticalScrollIndicator={false}>

                   

                <View style={styles.event_Container}>

                    <Image style={styles.event_Image} source={require("../../assets/images/imagePost-Test.png")}/>

                    <View style={styles.event_Description} >
                    <Text style={styles.TitleEvent} >TITRE DE L'EVENEMENT</Text>

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
                    <Text style={styles.TitleEvent}>TITRE DE L'EVENEMENT</Text>

                        

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

    event_ButtonsContainer:{
        width: '100%',
        // backgroundColor: 'red',
        height:70,        

    },

    event_Buttons:{
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        alignSelf:'center',
        justifyContent:'space-around',
        // borderWidth:1,
        height:60,
        width:355,

    },

    button_User:{

        backgroundColor:'white',
       

    },

    TitleEvent:{
        fontSize:25,
        
        paddingLeft:-10,

    },

    event_Container:{
        marginTop:20,
        borderWidth:2,
        borderColor:'#4D3D64',
        borderRadius:5,
        flex:1,
        alignSelf:'center',
        borderWidth:1,
        width:345,
        height:390,
    },

    event_Image:{
        alignSelf:'center',
        height:173,
        width:325,
        margin:10,
        borderRadius:6,

    },

    event_Description:{
        marginLeft:10,
        marginRight:10,
       
    },

    event_Text:{
        
       

    },

    DataHeure:{
        marginTop:1,
        fontSize:20,
        

    },

    like_Button: {
        width:36,
        height:36,
        marginTop:10,
       

    },

    Meta_like:{
        height:41,
        width:323,
        flex:1,
        flexDirection:'row',
        justifyContent:"space-between", 
       
       
      

    }





})
