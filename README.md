# Comment démarrer le frontend de Campoo si vous n'utilisez pas l'apk oui ipa
Avoir une version Node.js LTS ou une version supérieure
Rentrer sur un éditeur de code avec le dossier campoo à la racine
Si vous n'avez pas expo CLI taper cette ligne de commande: ` npm install --global expo-cli `
Puis faite un `npm install`

La commande  `expo start` lancera le projet
Lorsque vous exécutez `expo start`(ou `npm start`), Expo CLI démarre Metro Bundler, qui est un serveur HTTP qui compile le code JavaScript de notre application à l'aide de Babel et le transmet à l'application Expo.
# Les Simulateurs

## IOS
 
### Etape 1:  Installez Xcode sur votre poste de travail
 Ouvrez le Mac App Store, recherchez Xcode et appuyez sur installer (ou mettre à jour si vous l'avez déjà).
### Étape 2: Installez les outils de ligne de commande Xcode
Ouvrez Xcode, puis choisissez "Préférences ..." dans le menu Xcode (ou appuyez sur ⌘ +,).
### Lancez le simulateur IOS 
Exécutez votre application avec expo start appuyez sur à <strong>i</strong> partir de la ligne de commande ou à Run on iOS simulatorpartir de l'interface utilisateur DevTools


## Android 
 
### Etape 1: Téléchargez et installez Android Studio 3.0+.
### Étape 2: Installez les outils de ligne de commande Xcode
Sélectionnez "Standard" pour le "Type d'installation" dans l'assistant.
Dans Android Studio, accédez à Préférences> Apparence et comportement> Paramètres système> SDK Android. Cliquez sur l'onglet "Outils SDK" et assurez-vous qu'au moins une version de "Android SDK Build-Tools" est installée.### Lancez le simulateur IOS 
Exécutez votre application avec expo start appuyez sur à <strong>i</strong> partir de la ligne de commande ou à Run on iOS simulatorpartir de l'interface utilisateur DevTools

## Étape 3: configurer un appareil virtuel
Sur l'écran principal d'Android Studio, cliquez sur "Configurer", puis sur "AVD Manager" dans la liste déroulante.

# APK et IPA
### vous devez vous munir d'un téléphone 
L'apk et l'ipa sont dans le dossier nommé "apk" 
