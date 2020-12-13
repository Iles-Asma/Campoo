//import { StatusBar } from 'expo-status-bar';
import React from 'react';
import ScreenRegister from './app/screen/ScreenRegister';
import ScreenForgot from './app/screen/ScreenForgot';
//import { render } from 'react-dom';
//import { StyleSheet, Text, View } from 'react-native';
import ScreenLoginPage from './app/screen/ScreenLoginPage';
import ScreenAnimals from './app/screen/ScreenAnimals';





export default class App extends React.Component {
  render() {

    return (
      //<ScreenLoginPage/>
     //<ScreenRegister name="Email etudiant" description="Pour que Crapoo vérifie que tu es un étudiant du campus !" url={require("./assets/images/elephun.png")}/>
     //<ScreenRegister name="Nom" description="À qui Crapoo a-t-il affaire ?" url={require("./assets/images/balooidentity.png")}/>
    //<ScreenRegister name="Mot de passe"  description="Pour ta sécurité, Crapoo te recommande d'utiliser 6 caractères." url={require("./assets/images/baloopassword.png")} />
    //<ScreenRegister name="Date d'anniversaire" description="Quand est-ce que Crapoo doit te célébrer ?" url={require("./assets/images/baloobirthday.png")}/>
    <ScreenRegister name="Pseudo" description="C'est ainsi que Crapoo te fera valoir envers les autres utilisateurs, Sherlock." url={require("./assets/images/baloothinking.png")}/>
    //<ScreenRegister name="Batiment" description="Si tu viens d'Harvard, c'est ici qu'il faut le dire." url={require("./assets/images/elephun.png")}/>
    //<ScreenRegister name="Question personnelle" description="Crapoo a une mémoire d'éléphant mais il se peut que toi non !" url={require("./assets/images/baloothinking.png")}/>
     //<ScreenRegister name="Reponse personnelle" description="Ah tu as donc choisi cette question ? Très bien, Crapoo aimerait bien en connaître la réponse..." url={require("./assets/images/baloothinking.png")} />  
     //<ScreenAnimals name="Animal Spirituel" description="Crapoo te propose de sélectionner parmi tout un tas d'animaux celui auquel tu t'associes le plus !" url={require("./assets/images/balooSpiritual.png")}/>
     //<ScreenRegister name="Code de verification" description = " Malgré ses grosses pinces, Crapoo est parvenu à t'envoyer un code de vérification par mail." url={require("./assets/images/balooSpiritual.png")} />
     //<ScreenForgot name="Email etudiant" description="Pour que Crapoo vérifie que tu es un étudiant du campus !" url={require("./assets/images/elephun.png")}/>
     //<ScreenForgot name="Dans quelle ville est nee votre pere ?" description="Tiens tiens comme on se retrouve ! Alors ? Sauras-tu redonner à Crapoo la réponse que tu lui as auparavant donnée ?" url={require("./assets/images/elephun.png")}/>
     //<ScreenForgot name=" Nouveau mot de passe" description="Crapoo a une mémoire hors du commun, il se souviendra de ton nouveau mot de passe" url={require("./assets/images/elephun.png")}/>
     //<ScreenForgot name="Confirmer nouveau mot de passe" description="Par mesure de sécurité, Crapoo aimerait que tu renseignes une seconde fois ton mot de passe." url={require("./assets/images/baloopassword.png")}/>
    
    
    
     );



  }

}
