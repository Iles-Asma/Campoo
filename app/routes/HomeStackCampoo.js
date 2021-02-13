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


// import AnimalSignupCampoo from '../screens/AnimalSignupCampoo';
// import MailSignUpCampoo from '../screens/MailSignUpCampoo';
// import BatSignupCampoo from '../screens/BatSignupCampoo';
// import NameSignupCampoo from '../screens/NameSignupCampoo';
// import DobSignupCampoo from '../screens/DobSignupCampoo';
// import PseudoSignupCampoo from '../screens/PseudoSignupCampoo';
// import MdpSignupCampoo from '../screens/MdpSignupCampoo';
// import CVerifSignupCampoo from '../screens/CVerifSignupCampoo';
import UserProfil from '../screens/profils/UserProfil';

import AssocProfil from '../screens/profils/AssocProfil';

import ChooseTags from '../screens/profils/MyTags';

import MyTags from '../screens/profils/ChooseTags';

import UserModificationPage from '../screens/profils/UserModificationPage';

import AssocModificationPage from '../screens/profils/AssocModificationPage';

import CategoriesTags from '../screens/CategoriesTags';

import SettingPage from '../screens/settings/SettingPage';

import ChangeName from '../screens/settings/ChangeName';

import AssocRequest from '../screens/settings/AssocRequest';

// // fonction qui sert a cree une nouvelle stack de navigation , ou l'on passe un objet dans lequel on dit quel different ecran nous voulons enregistrer

const screens = {
  // La page ou le trois categories de tags seront affiché
  CategoriesTags: {
    screen: CategoriesTags,
    navigationOptions: {
      headerShown: false,
    }
  },
  // Screens Settings
  SettingPage: {
    screen: SettingPage,
    navigationOptions: {
      headerShown: false,

    }

  },
  AssocRequest: {
    screen: AssocRequest,
    navigationOptions: {
      headerShown: false,

    }

  },
  ChangeName: {
    screen: ChangeName,
    navigationOptions: {
      headerShown: false,

    }

  },
  // Screens PROFIL
  UserProfil: {
    screen: UserProfil,
    navigationOptions: {
      headerShown: false,

    }
  },
  AssocProfil: {
    screen: AssocProfil,
    navigationOptions: {
      headerShown: false,

    }
  },
  UserModificationPage: {
    screen: UserModificationPage,
    navigationOptions: {
      headerShown: false,

    }
  },
  AssocModificationPage: {
    screen: AssocModificationPage,
    navigationOptions: {
      headerShown: false,

    }
  },
  MyTags: {
    screen: MyTags,
    navigationOptions: {
      headerShown: false,
    }
  },
  ChooseTags: {
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