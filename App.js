//import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Navigator from './app/routes/HomeStackCampoo';
// import MailSignUpCampoo from "./app/screens/MailSignUpCampoo";
import BatSignupCampoo from "./app/screens/BatSignupCampoo";
import NameSignupCampoo from "./app/screens/NameSignupCampoo";
import DobSignupCampoo from "./app/screens/DobSignupCampoo";
import PseudoSignupCampoo from './app/screens/PseudoSignupCampoo';
import MdpSignupCampoo from "./app/screens/MdpSignupCampoo";
import CodeVerifSignupCampoo from './app/screens/CodeVerifSignupCampoo';
import MdpOMailCampoo from './app/screens/MdpOMailCampoo';
import HomeFeedCampoo from './app/screens/HomeFeedCampoo';
import EventCampoo from './app/screens/EventCampoo';


// La navigation se mettra en place via react-navigation 

export default class App extends React.Component { 

  render() {

    return (

      //<Navigator />
     <HomeFeedCampoo/>
      //<EventCampoo/>
    
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
