//import { StatusBar } from 'expo-status-bar';
import React from 'react';
import ScreenRegister from './src/screens/ScreenRegister';
import ScreenForgot from './src/screens/ScreenForgot';
import ScreenLoginPage from './src/screens/ScreenLoginPage';
import ScreenAnimals from './src/screens/ScreenAnimals';
import ScreenForgotPswdCampoo from './src/screens/ScreenForgotPswdCampoo';
import ScreenPswdCampoo from './src/screens/ScreenPswdCampoo';
import PickerCampoo from './src/components/PickerCampoo';
import Navigator  from './src/routes/HomeStackCampoo';

// La navigation se mettra en place via react-navigation 

export default class App extends React.Component {
  render() {

    return (

     <Navigator />

     //<PickerCampoo/>
    //<ScreenLoginPage/>
     //<ScreenPswdCampoo description="Pour ta sécurité, Baloo te recommande d’utiliser au moins 6 caractères."  url={require("./assets/images/Baloo-Blob-Securité.png")}/>
     //<ScreenRegister name="Email étudiant" description="Pour que Baloo vérifie que tu es bien un étudiant du campus !" url={require("./assets/images/Blob-Baloo-Etudiant.png")}/>
     //<ScreenRegister name="Nom" description="À qui Baloo a-il affaire ?" url={require("./assets/images/Baloo-Blob-Identité.png")}/>
     //<ScreenRegister name="Date de naissance" description="Quand est-ce que Baloo doit te célébrer ?" url={require("./assets/images/blob-baloo-fête.png")}/>
     //<ScreenRegister name="Pseudonyme" description="C’est ainsi que Baloo te ferais valoir auprès des autres utilisateurs." url={require("./assets/images/blob-baloo-fête.png")}/>
     //<ScreenRegister name="Mot de passe"  description="Pour ta sécurité, Baloo te recommande d’utiliser au moins 6 caractères." url={require("./assets/images/Baloo-Blob-Securité.png")} />
     //<ScreenRegister name="Batiment" description="Si tu viens d'Harvard, c'est ici qu'il faut le dire." url={require("./assets/images/Blob-Baloo-Etudiant.png")}/>
     //<ScreenRegister name="Question secrète" description="Baloo a une mémoire d’éléphant mais il se peut que toi non !" url={require("./assets/images/Baloo-Blob-Thinkin.png")}/>
     //<ScreenRegister name="Réponse secrète" description="Ah tu as donc choisi cette question ? Très bien, Baloo aimerait bien en connaître la réponse..." info="La réponse te permettra de réinitialiser ton mot de passe" url={require("./assets/images/Baloo-Blob-Thinkin.png")} />  
     //<ScreenAnimals name="Animal Spirituel" description="Baloo te propose de sélectionner, parmi tout un tas d’animaux, celui auquel tu t’associes le plus !" url={require("./assets/images/Component-1.png")}/>
     //<ScreenRegister name="Code de vérification" description = "Malgré son manque de mains, Baloo, est parvenu à t’envoyer un code de vérification par mail." url={require("./assets/images/Blob-baloo-phone.png")} />
     
     //<ScreenForgotPswdCampoo  description="Pour ta sécurité, Baloo te recommande d’utiliser au moins 6 caractères."  url={require("./assets/images/Baloo-Blob-Securité.png")}/>
     //<ScreenForgot name="Email étudiant" description="Pour que Baloo vérifie que tu es bien un étudiant du campus !" url={require("./assets/images/Blob-Baloo-Etudiant.png")}/>
     // <ScreenForgot name="Question secrète" description="Tiens tiens comme on se retrouve ! Alors ? Sauras-tu redonner à Baloo la réponse que tu lui as auparavant donnée ?" url={require("./assets/images/Blob-Baloo-Etudiant.png")}/>
     //<ScreenForgot name="Nouveau mot de passe" description="Crapoo a une mémoire hors du commun, il se souviendra de ton nouveau mot de passe" url={require("./assets/images/Baloo-Blob-Securité.png")}/>
     //<ScreenForgot name="Confirmer nouveau mot de passe" description="Par mesure de sécurité, Crapoo aimerait que tu renseignes une seconde fois ton mot de passe." url={require("./assets/images/baloopassword.png")}/>
    
    );


  }

}
