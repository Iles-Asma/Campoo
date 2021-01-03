import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import ScreenLoginCampoo from '../screens/ScreenLoginCampoo'; 
import PickerCampoo from '../components/PickerCampoo';
import AnimalSignupCampoo  from '../screens/AnimalSignupCampoo';

// // fonction qui sert a cree une nouvelle stack de navigation , ou l'on passe un objet dans lequel on dit quel different ecran nous voulons enregistrer

const screens = {

     CampooSignup : {
        screen :ScreenLoginCampoo,
        navigationOptions :{
           headerShown: false,
        
         }
    
       },

     PickerCampoo :{
        screen :  PickerCampoo,
        navigationOptions :{
          headerShown: false,
      
         }
     
    },

   AnimalSignupCampoo:{
        screen :AnimalSignupCampoo,
         navigationOptions :{
           headerShown: false,
    
          }

    }

  }
  const HomeStackCampoo = createStackNavigator(screens);

  export default createAppContainer(HomeStackCampoo);