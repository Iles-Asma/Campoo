import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import ScreenLoginCampoo from '../screens/ScreenLoginCampoo';
import AnimalSignupCampoo from '../screens/AnimalSignupCampoo';
import MailSignUpCampoo from '../screens/MailSignUpCampoo';
import BatSignupCampoo from '../screens/BatSignupCampoo';
import NameSignupCampoo from '../screens/NameSignupCampoo';
import DobSignupCampoo from '../screens/DobSignupCampoo';
import PseudoSignupCampoo from '../screens/PseudoSignupCampoo';
import MdpSignupCampoo from '../screens/MdpSignupCampoo';
import CVerifSignupCampoo from '../screens/CVerifSignupCampoo';

// // fonction qui sert a cree une nouvelle stack de navigation , ou l'on passe un objet dans lequel on dit quel different ecran nous voulons enregistrer

const screens = {

  ScreenLoginCampoo: {
    screen: ScreenLoginCampoo,
    navigationOptions: {
      headerShown: false,

    }

  },


  MailSignUpCampoo: {
    screen: MailSignUpCampoo,
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

  CVerifSignupCampoo: {
    screen: CVerifSignupCampoo,
    navigationOptions: {
      headerShown: false,

    }


  },

};

const HomeStackCampoo = createStackNavigator(screens);

export default createAppContainer(HomeStackCampoo);