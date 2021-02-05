import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import ScreenLoginCampoo from '../screens/login/ScreenLoginCampoo';
import AnimalSignupCampoo from '../screens/signup/AnimalSignupCampoo';
import MailSignupCampoo from '../screens/signup/MailSignupCampoo';
import BatSignupCampoo from '../screens/signup/BatSignupCampoo';
import NameSignupCampoo from '../screens/signup/NameSignupCampoo';
import DobSignupCampoo from '../screens/signup/DobSignupCampoo';
import PseudoSignupCampoo from '../screens/signup/PseudoSignupCampoo';
import MdpSignupCampoo from '../screens/signup/MdpSignupCampoo';
import CodeVerifSignupCampoo from '../screens/signup/CodeVerifSignupCampoo';

// // fonction qui sert a cree une nouvelle stack de navigation , ou l'on passe un objet dans lequel on dit quel different ecran nous voulons enregistrer

const screens = {

  ScreenLoginCampoo: {
    screen: ScreenLoginCampoo,
    navigationOptions: {
      headerShown: false,

    }

  },


  MailSignUpCampoo: {
    screen: MailSignupCampoo,
    navigationOptions: {
      headerShown: false,

   }

  },

  BatSignupCampoo: {
    screen: BatSignupCampoo,
    navigationOptions: {
      headerShown: false,

    }

  },


  NameSignupCampoo: {
    screen: NameSignupCampoo,
    navigationOptions: {
      headerShown: false,

    }

  },

  DobSignupCampoo: {
    screen: DobSignupCampoo,
    navigationOptions: {
      headerShown: false,

    }

  },

  PseudoSignupCampoo: {
    screen: PseudoSignupCampoo,
    navigationOptions: {
      headerShown: false,

    }

  },

  MdpSignupCampoo: {
    screen: MdpSignupCampoo,
    navigationOptions: {
      headerShown: false,

    }
  },



  AnimalSignupCampoo: {
    screen: AnimalSignupCampoo,
    navigationOptions: {
      headerShown: false,

    }

  },

  CodeVerifSignupCampoo: {
    screen: CodeVerifSignupCampoo,
    navigationOptions: {
      headerShown: false,

    }


  },

};

const HomeStackCampoo = createStackNavigator(screens);

export default createAppContainer(HomeStackCampoo);