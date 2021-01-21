//import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Navigator from './app/routes/HomeStackCampoo';
import MailSignUpCampoo from "./app/screens/MailSignUpCampoo";
import BatSignupCampoo from "./app/screens/BatSignupCampoo";
import NameSignupCampoo from "./app/screens/NameSignupCampoo";
import DobSignupCampoo from "./app/screens/DobSignupCampoo";
import PseudoSignupCampoo from './app/screens/PseudoSignupCampoo';
import MdpSignupCampoo from "./app/screens/MdpSignupCampoo";
import QSecretSignupCampoo from "./app/screens/QSecretSignupCampoo"
import RSecretSignupCampoo from './app/screens/RSecretSignupCampoo';
import CVerifSignupCampoo from './app/screens/CVerifSignupCampoo';
import MdpOMailCampoo from './app/screens/MdpOMailCampoo';
import MdpOQSecretCampoo from './app/screens/MdpOQSecretCampoo';
import MdpOResetCampoo from './app/screens/MdpOResetCampoo';

// La navigation se mettra en place via react-navigation 

export default class App extends React.Component {

  render() {

    return (

      <Navigator />
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
