# Rapport d'optimisation du projet ScrollyTelling
https://pagespeed.web.dev/analysis/https-isaacfaf-github-io-fafard-isaac-scrollytelling/jcg6n3nr13?form_factor=desktop
## Problème #1
### Nom du problème
Petite durée de vie des caches
### Action concrète
ajout du cache "Cache-Control: max-age=31536000" dans la balise header pour prolonger la durée de vie des caches
### Résultat
## Problème #2
### Nom du problème
Surcharge potentiel du réseau pour le téléchargement de la page
### Action concrète
Minimiser la complexité inutile du javascript, le html et le css (enlever certains code moins nécéssaire)
### Résultat

## Problème #3
### Nom du problème
Le thread principal est surchargé
### Action concrète
Minimiser les scripts et déplacé les codes en balise style du html dans le css. 
### Résultat
