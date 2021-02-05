//import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Navigator from './app/routes/HomeStackCampoo';
// import MailSignUpCampoo from "./app/screens/MailSignUpCampoo";
import BatSignupCampoo from "./app/screens/BatSignupCampoo";
import NameSignupCampoo from "./app/screens/NameSignupCampoo";
import DobSignupCampoo from "./app/screens/DobSignupCampoo";
import PseudoSignupCampoo from './app/screens/PseudoSignupCampoo';
import MdpSignupCampoo from "./app/screens/MdpSignupCampoo";
import CVerifSignupCampoo from './app/screens/CVerifSignupCampoo';
import MdpOMailCampoo from './app/screens/MdpOMailCampoo';
import HomeFeedCampoo from './app/screens/HomeFeedCampoo';
import UserProfil from './app/screens/profils/UserProfil';
import ChooseTags from './app/screens/profils/ChooseTags';
import MyTags from './app/screens/profils/MyTags';
import UserModificationPage from './app/screens/profils/UserModificationPage';

import PickerCampoo from './app/components/PickerCampoo';
import CategoriesTags from './app/screens/CategoriesTags';
import SettingPage from './app/screens/settings/SettingPage';
import ChangeName from './app/screens/settings/ChangeName';
// La navigation se mettra en place via react-navigation 

export default class App extends React.Component { 

  render() { 

    return (
      // <PickerCampoo/>
      //<Navigator /> 
      // <HomeFeedCampoo/>
      // <CategoriesTags/>
      // <ChooseTags/>
      // <MyTags/>
      // <UserModificationPage/>
      // <SettingPage/>
      // <ChangeName/>
    <UserProfil/>  
      // <MailSignupCampoo />
      //<NameSignupCampoo/>
      //<ScreenLoginPage/>      
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


    );


  }

}
