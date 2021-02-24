
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

import DeleteAccount from '../screens/settings/DeleteAccount'

import AssocRequest from '../screens/settings/AssocRequest';
import { createStackNavigator } from '@react-navigation/stack';
import EventUserCampoo from '../screens/EventUserCampoo';
import EventDetailCampoo from '../screens/EventDetailCampoo';
import CommentCampoo from '../screens/CommentCampoo';
import { CAMPOO } from '../../assets/themes/ThemeCampoo';

const HomeStack = createStackNavigator();
function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="HomeFeedCampoo" component={HomeFeedCampoo} options={{ headerShown: false }} />
      <HomeStack.Screen name="CommentCampoo" component={CommentCampoo} options={{ headerShown: false }} />

    </HomeStack.Navigator>
  );
}

const EventStack = createStackNavigator();
function EventStackScreen() {
  return (
    <EventStack.Navigator >
      <EventStack.Screen name="EventCampoo" component={EventCampoo} options={{ headerShown: false }} />
      <EventStack.Screen name="EventUserCampoo" component={EventUserCampoo} options={{ headerShown: false }} />
      <EventStack.Screen name="EventDetailCampoo" component={EventDetailCampoo} options={{ headerShown: false }} />
    </EventStack.Navigator>
  );
}

const ProfilStack = createStackNavigator();
function ProfilStackScreen() {
  return (
    <ProfilStack.Navigator   >
      <ProfilStack.Screen name="UserProfil" component={UserProfil} options={{ headerShown: false }} />
      <ProfilStack.Screen name="Setting" component={SettingStackScreen} options={{ headerShown: false }} />
      <ProfilStack.Screen name="UserModificationPage" component={UserModificationPage} options={{ headerShown: false }} />

      <ProfilStack.Screen name="MyTags" component={MyTags} options={{ headerShown: false }} />
      <ProfilStack.Screen name="CategoriesTags" component={CategoriesTags} options={{ headerShown: false }} />
      <ProfilStack.Screen name="ChooseTags" component={ChooseTags} options={{ headerShown: false }} />
    </ProfilStack.Navigator>
  );
}


const SettingStack = createStackNavigator();
function SettingStackScreen() {
  return (

    <SettingStack.Navigator>
      <SettingStack.Screen name="SettingPage" component={SettingPage} options={{ headerShown: false }} />

      <SettingStack.Screen name="ChangeName" component={ChangeName} options={{ headerShown: false }} />
      <SettingStack.Screen name="AssocRequest" component={AssocRequest} options={{ headerShown: false }} />
      <SettingStack.Screen name="DeleteAccount" component={DeleteAccount} options={{ headerShown: false }} />
    </SettingStack.Navigator>

  );
}


const Tab = createBottomTabNavigator();

export default function Navigator() {


  return (
    <Tab.Navigator
      initialRouteName="Feed"
      tabBarOptions={{
        activeTintColor: '#e91e63',
        activeBackgroundColor: CAMPOO.secondary,
      }}



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
        name="mon profil"
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
  // }
}



