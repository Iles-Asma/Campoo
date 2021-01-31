import React from 'react'
import { StyleSheet, StatusBar, ScrollView, SafeAreaView, Platform} from 'react-native';
import PostCampoo from '../components/PostCampoo';
import UserCommentCampoo from '../components/UserCommentCampoo';



 

export default class CommentCampoo extends React.Component {

    render(){

        return(

           <SafeAreaView style={styles.container}>

               <ScrollView  showsVerticalScrollIndicator={false}> 

              <PostCampoo/>
              <UserCommentCampoo/>
              <UserCommentCampoo/>

            


            </ScrollView>
           </SafeAreaView>

            
          

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


