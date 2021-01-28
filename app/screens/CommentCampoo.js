import React from 'react'
import { StyleSheet, StatusBar, ScrollView} from 'react-native';



 

export default class CommentCampoo extends React.Component {

    render(){

        return(

            <ScrollView style={styles.container} showsVerticalScrollIndicator={false}> 


            </ScrollView>

            
          

        );


    }



};


const styles = StyleSheet.create({


     container: {
        flex: 1,
        //  pour detecter la platform
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        flexDirection: 'column',
        justifyContent:'center',
        
        alignItems:'center',


    },


});


