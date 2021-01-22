
import React from 'react';
import { StyleSheet, Image, StatusBar , SafeAreaView, View, Platform, Text } from 'react-native';
export default class HomeFeedCampoo extends React.Component{
   
    render() {

        return(

           <SafeAreaView style={styles.container}>


                <View style={styles.profilId}>
                 <Text>
                     HELLO f
                 </Text> 
                {/* <Image style={{ ... }} source={require("../../assets/images/BAloo-violet.png")} /> */}
               </View>

               <View style={styles.profil}> 
                <Text> kvjhvh</Text>

               </View>
             

                

            
            </SafeAreaView>




        );
    }
};


const styles = StyleSheet.create({

    container: {
 
       flex: 1,
        
       flexDirection: 'column',
        backgroundColor:'red',
         alignItems: 'center',
        // justifyContent: 'center',
 
 
    },
    profilId:{
        flex:0,
        height:'20%',
        width:'100%',
        // flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'white',

    },
    profil:{
        height:'5%',
        // flex:10,
        
        width:'100%',
        // flexDirection: 'row',
        // alignItems: 'center',
        // justifyContent: 'center',
        backgroundColor:'black',

    },
 

 
 });