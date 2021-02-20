import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';




import MailSignUpCampoo from "./app/screens/signup/MailSignupCampoo";
import BatSignupCampoo from "./app/screens/signup/BatSignupCampoo";
import NameSignupCampoo from "./app/screens/signup/NameSignupCampoo";
import DobSignupCampoo from "./app/screens/signup/DobSignupCampoo";
import PseudoSignupCampoo from './app/screens/signup/PseudoSignupCampoo';
import MdpSignupCampoo from "./app/screens/signup/MdpSignupCampoo";
import CodeVerifSignupCampoo from './app/screens/signup/CodeVerifSignupCampoo';
import MdpOMailCampoo from './app/screens/resetMdp/MdpOMailCampoo';
import HomeFeedCampoo from './app/screens/HomeFeedCampoo';
import EventCampoo from './app/screens/EventCampoo';
import CommentCampoo from './app/screens/CommentCampoo';
import EventDetailCampoo from './app/screens/EventDetailCampoo';
import TextInputAssos from './app/components/TextInputAssos';
import AssoFeedCampoo from './app/screens/AssoFeedCampoo';
import ScreenLoginPage from './app/screens/login/ScreenLoginCampoo';

import AssoEventCampoo from './app/screens/AssoEventCampoo';
import InputCommentCampoo from "./app/components/InputCommentCampoo";

import CreateEventCampoo from './app/screens/CreateEventCampoo';
import UserProfil from './app/screens/profils/UserProfil';
import ChooseTags from './app/screens/profils/ChooseTags';
import MyTags from './app/screens/profils/MyTags';
import UserModificationPage from './app/screens/profils/UserModificationPage';
import Navigator from './app/routes/HomeStackCampoo'

import CategoriesTags from './app/screens/CategoriesTags';
import SettingPage from './app/screens/settings/SettingPage';
import ChangeName from './app/screens/settings/ChangeName';
import AssocRequest from './app/screens/settings/AssocRequest';
import EventUserCampoo from './app/screens/EventUserCampoo'
import EventItemCampoo from './app/components/EventItemCampoo';
import AssosAddPost from './app/screens/AssosAddPost';



// La navigation se mettra en place via react-navigation 

// function EventStackScreen() {
//   return (
//     <SettingsStack.Navigator>
//       <SettingsStack.Screen name="Evenement du campus " component={EventCampoo} />
//       <SettingsStack.Screen name="Tes Evenements" component={EventUserCampoo} />
//     </SettingsStack.Navigator>
//   );
// }



export default class App extends React.Component {


  render() {


    // const Stack = createStackNavigator();

    return (
      //<Navigator />

      // ------------------------ Component 

      //<InputCommentCampoo />


      //<CommentCampoo />


      //<TextInputAssos />


      // ------------------------ Component 


      //------------------------screeens 

      //<AssoFeedCampoo />
      //<AssoEventCampoo />
      //<AssosAddPost />


      //<HomeFeedCampoo /> //cote etudiant
      //<EventCampoo />
      //<EventUserCampoo />
      //<Navigator />

      //<EventDetailCampoo />


      //------------------------screeens 

      //<CategoriesTags />
      // <ChooseTags/>
      //<MyTags />
      // <UserProfil/>  

      //------------

      //<CreateEventCampoo />

      //--------------


      // -------------------------SETTINGS
      //<AssocRequest />
      //<UserModificationPage />
      //<SettingPage />
      //<ChangeName />
      // -------------------------SETTINGS


      //----------------------- SIGNUP SCREENS
       // <MailSignupCampoo />
      //<NameSignupCampoo/>
      //<DobSignupCampoo />
      //<PseudoSignupCampoo/>
      //<MdpSignupCampoo/>
      //<QSecretSignupCampoo/>
      //<RSecretSignupCampoo/>
      //<CVerifSignupCampoo/>
      //<MdpOQSecretCampoo/>
      //<MdpOResetCampoo/>
      //<MdpOMailCampoo/>
      //<BatSignupCampoo />

      //----------------------- SIGNUP S SCREENS


      //-------------------------LOGIN

      //<ScreenLoginPage />

      //-------------------------LOGIN


/*
================================================

    Permet de Setup la naviagtion  dans ce fichier 
                   
=================================================

*/



      // <NavigationContainer>
      //   <Stack.Navigator>
      //     <Stack.Screen
      //       options={{ headerShown: false, }}
      //       name="CAMPOO" component={ScreenLoginPage} />

      //     <Stack.Screen name="Accueil" component={HomeFeedCampoo} />
      //     <Stack.Screen name="Evenement" component={EventStackScreen} />
      //     <Stack.Screen name="Profil" component={UserProfil} />

      //   </Stack.Navigator>
      // </NavigationContainer>

    );


  }

}
