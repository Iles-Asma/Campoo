import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux'
import Store from './app/redux/Store'




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
import TextInputAssos from './app/components/input/TextInputAssos';
import AssoFeedCampoo from './app/screens/AssoFeedCampoo';
import ScreenLoginPage from './app/screens/login/ScreenLoginCampoo';
import MdpOResetCampoo from './app/screens/resetMdp/MdpOResetCampoo';

import AssoEventCampoo from './app/screens/AssoEventCampoo';
import InputCommentCampoo from "./app/components/input/InputCommentCampoo";


import CreateEventCampoo from './app/screens/CreateEventCampoo';

import UserProfil from './app/screens/profils/UserProfil';

import AssocProfil from './app/screens/profils/AssocProfil';
import ViewAssocProfil from './app/screens/profils/ViewAssocProfil';
import ChooseTags from './app/screens/profils/ChooseTags';
import MyTags from './app/screens/profils/MyTags';
import MailSignupCampoo from "./app/screens/signup/MailSignupCampoo";

import UserModificationPage from './app/screens/profils/UserModificationPage';
import Navigations from './app/routes/Navigations'

import AssocModificationPage from './app/screens/profils/AssocModificationPage';

import CategoriesTags from './app/screens/CategoriesTags';
import SettingPage from './app/screens/settings/SettingPage';
import DeleteAccount from './app/screens/settings/DeleteAccount';
import ChangeName from './app/screens/settings/ChangeName';
import AssocRequest from './app/screens/settings/AssocRequest';
import EventUserCampoo from './app/screens/EventUserCampoo'
import EventItemCampoo from './app/components/EventItemCampoo';
import AssosAddPost from './app/screens/AssosAddPost';
import HomeStackCampoo from './app/routes/Navigations';
import MdpOResetConfirmed from './app/screens/resetMdp/MdpOResetConfirmed';
import CodeVerifCampoo from './app/screens/resetMdp/CodeVerifCampoo';
import PickerDob from './app/components/PickerDob';
import ButtonGallery from './app/components/button/ButtonGallery';


export default class App extends React.Component {


  render() {




    return (
      //<AssoFeedCampoo />
      //<AssoEventCampoo />
      //<InputCommentCampoo />
      //
      //<EventItemCampoo />



      // pour affecter le store a l énsemble de l'application 

      // <Provider store={store}>

      // <NavigationContainer >
      //   <Navigations />
      // </NavigationContainer>

      // <PickerDob />



      // </Provider>



      // ------------------------ Component 

      //<InputCommentCampoo />


      //<CommentCampoo />

      //<CommentCampoo />
      //<EventDetailCampoo/>

      //<TextInputAssos />


      // ------------------------ Component 


      //------------------------screeens 

      //<AssoFeedCampoo />
      //<AssoEventCampoo />
      //<AssosAddPost />

      //<MdpOMailCampoo />
      //<MdpOResetCampoo />

      //<MdpOResetConfirmed />
      //<CodeVerifCampoo />


      //<HomeFeedCampoo /> //cote etudiant
      //<EventCampoo />
      //<EventUserCampoo />
      //<Navigator />

      //<EventDetailCampoo />


      //------------------------screeens 

      //<CategoriesTags />
      // <ChooseTags/>
      //<MyTags />
      //<UserProfil />
      // <CategoriesTags/>
      // <ChooseTags/>
      // <MyTags />

      // <UserProfil/>  
      // <AssocProfil/>
      // <ViewAssocProfil/>
      //------------

      //<CreateEventCampoo />

      //--------------
      //<ButtonGallery/>

      // -------------------------SETTINGS
      <AssocRequest />
       // <UserModificationPage />
      //
      // <AssocModificationPage/>
      // <SettingPage />
     // <ChangeName />
      //
      //  <DeleteAccount/>
      //  -------------------------SETTINGS


      //----------------------- SIGNUP SCREENS
      //<MailSignupCampoo />
     // <NameSignupCampoo/>
      // <DobSignupCampoo />
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
