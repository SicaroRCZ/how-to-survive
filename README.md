# How to Survive

Manuel de survie et de gestion de crise **100 % hors-ligne** : 18 crises (se préparer, agir, après), gestes qui sauvent, préparation du foyer, près de 190 fiches de survie, électricité et carburant, guide de 87 plantes, champignons et poissons d'Europe, et des outils de terrain (boussole, niveau, lampe, morse lumineux, GPS, soleil, métronome de réanimation…).

**Application en ligne :** https://sicarorcz.github.io/how-to-survive/

Sur le téléphone, ouvrez l'adresse puis :
- **Android (Chrome)** : menu ⋮ → « Installer l'application » ;
- **iPhone (Safari)** : Partager → « Sur l'écran d'accueil ».

Après la première ouverture, l'application fonctionne sans connexion.

## Contenu du dépôt

| Élément | Rôle |
| --- | --- |
| `index.html` | L'application complète (un seul fichier) |
| `manifest.webmanifest`, `sw.js`, `icons/` | Installation sur l'écran d'accueil et fonctionnement hors-ligne |
| `privacy.html` | Politique de confidentialité |
| `native/` | Projet Android / iOS avec Capacitor : voir `native/README-NATIF.md` |
| `STORES.md` | Textes pour Google Play et l'App Store |

## Mettre à jour

1. Remplacez `index.html` par la nouvelle version.
2. Augmentez le numéro `CACHE` dans `sw.js` (par exemple `hts-v1.9`) pour que les téléphones reçoivent la mise à jour.

## Avertissement

Contenu éducatif : il ne remplace ni une formation aux premiers secours, ni un avis médical, ni les services de secours. En cas d'urgence, appelez le **112**.
