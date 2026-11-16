# How to Survive – Application Android et iOS (Capacitor)

Ce dossier transforme la version web (`../web`) en véritable application installable depuis le Google Play Store et l'App Store. Le code de l'application est déjà prêt à utiliser les fonctions natives : **lampe torche du téléphone** pour le signal SOS, **notifications de rappel** (entretien, péremptions), **localisation GPS**, **partage** de la sauvegarde.

## Ce qu'il faut installer (une seule fois)

| Outil | Pour | Lien |
| --- | --- | --- |
| Node.js (version LTS) | Les commandes `npm` / `npx` | nodejs.org |
| Android Studio | Compiler l'application Android | developer.android.com/studio |
| Xcode (Mac uniquement) | Compiler l'application iOS | App Store du Mac |

## Étapes

Ouvrez un terminal dans ce dossier `native/`, puis :

```bash
# 1. Installer Capacitor et les modules natifs utilisés par l'application
npm install @capacitor/core @capacitor/cli @capacitor/android @capacitor/ios \
  @capacitor/local-notifications @capacitor/share @capgo/capacitor-flash @capacitor/assets

# 2. Copier la version web et créer les projets natifs
npm run copy-web
npx cap add android
npx cap add ios        # uniquement sur Mac

# 3. Générer les icônes et l'écran de démarrage à partir du dossier assets/
npm run icons

# 4. Ouvrir le projet dans Android Studio (ou Xcode) puis lancer sur un téléphone
npm run android
npm run ios            # uniquement sur Mac
```

À chaque nouvelle version de `web/index.html`, relancez simplement `npm run android` (ou `npm run ios`) : la copie et la synchronisation sont automatiques.

## Autorisations à vérifier

**Android** – dans `android/app/src/main/AndroidManifest.xml`, ajoutez si elles n'y sont pas :

```xml
<uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />
<uses-permission android:name="android.permission.ACCESS_COARSE_LOCATION" />
<uses-permission android:name="android.permission.POST_NOTIFICATIONS" />
<uses-permission android:name="android.permission.CAMERA" />
<uses-permission android:name="android.permission.FLASHLIGHT" />
```

**iOS** – dans `ios/App/App/Info.plist`, ajoutez la phrase affichée lors de la demande de localisation :

```xml
<key>NSLocationWhenInUseUsageDescription</key>
<string>Votre position est affichée uniquement à votre demande, pour la dicter aux secours. Elle n'est jamais enregistrée ni envoyée.</string>
<key>NSCameraUsageDescription</key>
<string>La caméra sert uniquement à décoder des signaux morse lumineux. Aucune image n'est enregistrée ni envoyée.</string>
```

Si Android Studio ou Xcode signale une autorisation manquante pour la lampe torche, ajoutez celle qu'il indique.

## À personnaliser avant publication

- `appId` dans `capacitor.config.json` : identifiant unique et définitif de l'application (par exemple `be.votrenom.howtosurvive`). Il ne peut plus être changé après la première publication.
- L'adresse de contact dans `web/privacy.html`.
- Le numéro de version dans `package.json` (et dans Android Studio / Xcode).

## Tester avant de publier

- Signal SOS : la lampe du téléphone doit clignoter en morse.
- Guides → Morse lumineux : « Émettre » fait clignoter le flash, « Recevoir → Avec la caméra » décode la lampe d'un autre téléphone.
- Réglages → Entretien : marquer une tâche, vérifier qu'une notification est programmée.
- Urgence → Ma position : autoriser la localisation, vérifier les coordonnées.
- Prévenir mes proches : l'envoi doit ouvrir l'application SMS avec le message prérempli.
- Mode avion : toute l'application doit rester utilisable.
