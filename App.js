//import { StatusBar } from 'expo-status-bar';
import React from 'react';



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
import ScreenLoginPage from './app/screens/login/ScreenLoginCampoo';
import AssoFeedCampoo from './app/screens/AssoFeedCampoo';
import AssoEventCampoo from './app/screens/AssoEventCampoo';
import InputCommentCampoo from "./app/components/InputCommentCampoo";

import CreateEventCampoo from './app/screens/CreateEventCampoo';
import UserProfil from './app/screens/profils/UserProfil';
import ChooseTags from './app/screens/profils/ChooseTags';
import MyTags from './app/screens/profils/MyTags';
import UserModificationPage from './app/screens/profils/UserModificationPage';


import CategoriesTags from './app/screens/CategoriesTags';
import SettingPage from './app/screens/settings/SettingPage';
import ChangeName from './app/screens/settings/ChangeName';
import AssocRequest from './app/screens/settings/AssocRequest';
import EventUserCampoo from './app/screens/EventUserCampoo'
import EventItemCampoo from './app/components/EventItemCampoo';
import AssosAddPost from './app/screens/AssosAddPost';
// La navigation se mettra en place via react-navigation 

export default class App extends React.Component {

  render() {

    return (
      //<Navigator /> 

      // ------------------------ Component 
      //<AssosAddPost />
      //<InputCommentCampoo />
      //<EventUserCampoo />
      //<EventItemCampoo />
      //<TextInputAssos />
      // <PickerCampoo/>

      // ------------------------ Component 

      //<AssosAddPost />


      //------------------------screeens 

      //AssoFeedCampoo />
      //<AssoEventCampoo />
      //<HomeFeedCampoo />
      //<EventCampoo />
      //<Navigator />
      <CommentCampoo />
      //<EventDetailCampoo />
      //<HomeFeedCampoo />

      //------------------------screeens 

      // <CategoriesTags/>
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

      // <MailSignupCampoo />
      //<NameSignupCampoo/>

      //----------------------- SIGNUP

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

      //----------------------- SIGNUP


      //-------------------------LOGIN

      //<ScreenLoginPage />

      //-------------------------LOGIN




    );


  }

}
