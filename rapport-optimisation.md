# Rapport d'optimisation du projet ScrollyTelling
https://pagespeed.web.dev/analysis/https-isaacfaf-github-io-fafard-isaac-scrollytelling/jcg6n3nr13?form_factor=desktop
## Problème #1
### Nom du problème
Petite durée de vie des caches
### Action concrète
ajout du cache "Cache-Control: max-age=31536000" dans la balise header pour prolonger la durée de vie des caches
### Résultat
Bien que les caches aident, le gros problème est la taille des ressources des images. Le cache permettra une meilleure performance si l'utilisateur vien plusieurs fois sur le site.
## Problème #2
### Nom du problème
Surcharge potentiel du réseau pour le téléchargement de la page
### Action concrète
Minimiser la complexité inutile du javascript, le html et le css (enlever certains code moins nécéssaire). Changer les formats d'images
### Résultat
La javascript est moins complexe et le code en général aussi. C'est une semi réussite car une grande optimisation à été faite à ce niveau. Les images de background (les plus demandant), ont été changé pour un meilleur format.
## Problème #3
### Nom du problème
Le thread principal est surchargé
### Action concrète
Minimiser les scripts et déplacé les codes en balise style du html dans le css. 
### Résultat
Bien qu'après quelques changements de ma part. Je ne parvient pas à effectuer de changement assez important pour que le problème soit complètement réglé dans le thread principal malheureusement. J'ai diminuer la charge de CSS et essayé de minimiser le code de premier chargement.