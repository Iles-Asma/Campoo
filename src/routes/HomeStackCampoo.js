import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import ScreenLoginPage from '../screens/ScreenLoginPage'; 
import ScreenPswdCampoo from '../screens/ScreenPswdCampoo';
import PickerCampoo from '../components/PickerCampoo';
import ScreenAnimals  from '../screens/ScreenAnimals';

// // fonction qui sert a cree une nouvelle stack de navigation , ou l'on passe un objet dans lequel on dit quel different ecran nous voulons enregistrer

const screens = {

     CampooSignup : {
        screen : ScreenLoginPage,
    
       },

     PickerCampoo :{
        screen :  PickerCampoo,
     
    },


    ScreenAnimals :{
        screen :ScreenAnimals,
        navigationOptions :{
            title:'jbwilurrfb',
          //  headerStyle : {backgroundColor :'#eee'}

        }

    }

  }
  const HomeStackCampoo = createStackNavigator(screens, {
      defautltNavigationOptions : {
          headerTintColor : 'red',
          top:40,
         
      }


  });

 export default createAppContainer(HomeStackCampoo);