//import { StatusBar } from 'expo-status-bar';
import React from 'react';
import ScreenRegister from './app/screen/ScreenRegister';
//import { render } from 'react-dom';
//import { StyleSheet, Text, View } from 'react-native';
import ScreenLoginPage from './app/screen/ScreenLoginPage';



 //<RegisterMail name="Email etudiant" />

export default class App extends React.Component {
  render() {

    return (
     //<ScreenRegister name="Email etudiant" description="Pour que Crapoo vérifie que tu es un étudiant du campus !" url={require("./assets/images/elephun.png")}/>
     //<ScreenRegister name="Nom" description="À qui Crapoo a-t-il affaire ?" url={require("./assets/images/balooidentity.png")}/>
    //<ScreenRegister name="Mot de passe" description="Pour ta sécurité, Crapoo te recommande d'utiliser 6 caractères." url={require("./assets/images/baloopassword.png")} />
    //<ScreenRegister name="Date d'anniversaire" description="Quand est-ce que Crapoo doit te célébrer ?" url={require("./assets/images/baloobirthday.png")}/>
    //<ScreenRegister name="Pseudo" description="C'est ainsi que Crapoo te fera valoir envers les autres utilisateurs, Sherlock." url={require("./assets/images/baloothinking.png")}/>
    //<ScreenRegister name="Batiment" description="Si tu viens d'Harvard, c'est ici qu'il faut le dire." url={require("./assets/images/elephun.png")}/>
    //<ScreenRegister name="Question personnelle" description="Crapoo a une mémoire d'éléphant mais il se peut que toi non !" url={require("./assets/images/baloothinking.png")}/>
     <ScreenRegister name="Reponse personnelle" description="Ah tu as donc choisi cette question ? Très bien, Crapoo aimerait bien en connaître la réponse..." url={require("./assets/images/baloothinking.png")} />        
    
    
    
    
     );



  }

}
