import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import ScreenLoginCampoo from '../screens/ScreenLoginCampoo';
import AnimalSignupCampoo from '../screens/AnimalSignupCampoo';
// import MailSignUpCampoo from '../screens/MailSignUpCampoo';
import BatSignupCampoo from '../screens/BatSignupCampoo';
import NameSignupCampoo from '../screens/NameSignupCampoo';
import DobSignupCampoo from '../screens/DobSignupCampoo';
import PseudoSignupCampoo from '../screens/PseudoSignupCampoo';
import MdpSignupCampoo from '../screens/MdpSignupCampoo';
import CVerifSignupCampoo from '../screens/CVerifSignupCampoo';
import UserProfil from '../screens/profils/UserProfil';
import ChooseTags from '../screens/profils/MyTags';
import MyTags from '../screens/profils/ChooseTags';
import UserModificationPage from '../screens/profils/UserModificationPage';
import CategoriesTags from '../screens/CategoriesTags';
import SettingPage from '../screens/settings/SettingPage';
import ChangeName from '../screens/settings/ChangeName';
 
// // fonction qui sert a cree une nouvelle stack de navigation , ou l'on passe un objet dans lequel on dit quel different ecran nous voulons enregistrer

const screens = {
// La page ou le trois categories de tags seront affiché
  ScreenLoginCampoo: {
    screen: CategoriesTags,
    navigationOptions: {
      headerShown: false,
    }
  },
    // Screens Settings
    ScreenLoginCampoo: { 
      screen: SettingPage,
      navigationOptions: {
        headerShown: false,
  
      }
  
    },
    ScreenLoginCampoo: { 
      screen: ChangeName,
      navigationOptions: {
        headerShown: false,
  
      }
  
    },
  // Screens PROFIL
  ScreenLoginCampoo: { 
    screen: UserProfil,
    navigationOptions: {
      headerShown: false,

    }

  },
  ScreenLoginCampoo: {
    screen: UserModificationPage,
    navigationOptions: {
      headerShown: false,

    }

  },
  ScreenLoginCampoo: {
    screen: MyTags,
    navigationOptions: {
      headerShown: false,
    }
  },
  ScreenLoginCampoo: {
    screen: ChooseTags,
    navigationOptions: {
      headerShown: false,

    }

  },
  //

  ScreenLoginCampoo: {
    screen: ScreenLoginCampoo,
    navigationOptions: {
      headerShown: false,

    }

  },


  // MailSignUpCampoo: {
  //   screen: MailSignUpCampoo,
  //   navigationOptions: {
  //     headerShown: false,

  //   }

  // },

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