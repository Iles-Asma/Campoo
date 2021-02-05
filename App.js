//import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Navigator from './app/routes/HomeStackCampoo';
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


// La navigation se mettra en place via react-navigation 

export default class App extends React.Component { 

  render() {

    return (

      //<Navigator />
     //<HomeFeedCampoo/>
      //<EventCampoo/>
      //<CommentCampoo/>
      //<EventDetailCampoo/>

      //<TextInputAssos/>
    
      // <MailSignupCampoo />
      //<NameSignupCampoo/>

      <ScreenLoginPage/>     

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
