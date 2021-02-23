
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeIcon from '../../assets/svg/HomeIcon';

import EventIcon from '../../assets/svg/EventIcon';
import ProfileIcon from '../../assets/svg/ProfileIcon';


import ScreenLoginCampoo from '../screens/login/ScreenLoginCampoo';
import AnimalSignupCampoo from '../screens/signup/AnimalSignupCampoo';
import MailSignupCampoo from '../screens/signup/MailSignupCampoo';
import BatSignupCampoo from '../screens/signup/BatSignupCampoo';
import NameSignupCampoo from '../screens/signup/NameSignupCampoo';
import DobSignupCampoo from '../screens/signup/DobSignupCampoo';
import PseudoSignupCampoo from '../screens/signup/PseudoSignupCampoo';
import MdpSignupCampoo from '../screens/signup/MdpSignupCampoo';
import CodeVerifSignupCampoo from '../screens/signup/CodeVerifSignupCampoo';

import HomeFeedCampoo from '../screens/HomeFeedCampoo';
import EventCampoo from '../screens/EventCampoo';


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
import { createStackNavigator } from '@react-navigation/stack';
import EventUserCampoo from '../screens/EventUserCampoo';
import EventDetailCampoo from '../screens/EventDetailCampoo';
import CommentCampoo from '../screens/CommentCampoo';



// const EventStack = createStackNavigator();

// export default class EventStackScreen extends React.Component {
//   render() {
//     return (
//       <EventStack.Navigator>
//         <EventStack.Screen name="Settings" component={EventCampoo} />
//         <EventStack.Screen name="Details" component={EventUserCampoo} />
//       </EventStack.Navigator>
//     );
//   }
// }



const HomeStack = createStackNavigator();
function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="feed" component={HomeFeedCampoo} options={{ headerShown: false }} />
      <HomeStack.Screen name="commentaire" component={CommentCampoo} options={{ headerShown: false }} />

    </HomeStack.Navigator>
  );
}


const EventStack = createStackNavigator();
function EventStackScreen() {
  return (
    <EventStack.Navigator>
      <EventStack.Screen name="Evenement" component={EventCampoo} options={{ headerShown: false }} />
      <EventStack.Screen name="Detail de l'evenement" component={EventDetailCampoo} options={{ headerShown: false }} />
      <EventStack.Screen name="Tes evenements" component={EventUserCampoo} options={{ headerShown: false }} />
    </EventStack.Navigator>
  );
}

const ProfilStack = createStackNavigator();
function ProfilStackScreen() {
  return (
    <ProfilStack.Navigator>
      <ProfilStack.Screen name="mon profil" component={UserProfil} options={{ headerShown: false }} />
      <ProfilStack.Screen name="modifier mon compte" component={UserModificationPage} options={{ headerShown: false }} />
      <ProfilStack.Screen name="parametre" component={SettingPage} options={{ headerShown: false }} />
      <ProfilStack.Screen name="Mes Tags" component={MyTags} options={{ headerShown: false }} />
      <ProfilStack.Screen name="modifier centre interets" component={CategoriesTags} options={{ headerShown: false }} />
      <ProfilStack.Screen name="change tes tags" component={ChooseTags} options={{ headerShown: false }} />
    </ProfilStack.Navigator>
  );
}


const Tab = createBottomTabNavigator();

export default class Navigator extends React.Component {
  render() {

    return (
      <Tab.Navigator
      >
        <Tab.Screen
          name="accueil"
          component={HomeStackScreen}
          options={{

            tabBarLabel: () => { return null },


            tabBarIcon: () => {
              return (
                <HomeIcon />


              );
            },
          }}
        />
        <Tab.Screen
          name="Evenement"
          component={EventStackScreen}
          options={{
            tabBarLabel: () => { return null },



            tabBarIcon: () => {
              return (
                <EventIcon />


              );
            },
          }}

        />

        <Tab.Screen
          name="Profil"
          component={ProfilStackScreen}
          options={{
            tabBarLabel: () => { return null },

            tabBarIcon: () => {
              return (
                <ProfileIcon />


              );
            },
          }}

        />
      </Tab.Navigator>
    );
  }
}



