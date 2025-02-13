# Application de Gestion de Tâches

## Aperçu

Ceci est une application de gestion de tâches (to-do list) développée avec **Vue.js** et **Nuxt.js**.  
Elle permet aux utilisateurs de :
- **Lister** les tâches
- **Marquer** une tâche comme terminée (ce qui modifie l'apparence de la carte)
- **Modifier** le titre et la description d’une tâche
- **Créer** une nouvelle tâche
- **Supprimer** une tâche

L'application communique avec une API locale (située dans le dossier `/server/api`) via un composable personnalisé nommé `useApi`.

## Fonctionnalités

- **Liste des tâches** : Affichage de toutes les tâches dans une interface claire et conviviale.
- **Marquage de tâches complétées** : En cochant une tâche, celle-ci se transforme.
- **Modification** : Modifier le titre et la description d'une tâche via une modale.
- **Création** : Ajouter une nouvelle tâche simplement uniquement avec son titre.
- **Suppression** : Supprimer une tâche directement .

## Installation

Clonez ce dépôt et installez les dépendances :

```bash
# Cloner le repository
git clone https://github.com/BastienPailloux/test_front-v2.git

# Se déplacer dans le dossier du projet
cd test_front-v2

# Installer les dépendances
yarn install
```

## Lancement de l'Application

Démarrez le serveur de développement avec rechargement à chaud :

```bash
yarn dev
````

Ensuite, ouvrez votre navigateur à l'adresse http://localhost:3000.
Note : Assurez-vous d'avoir Node.js version 18 ou supérieure.

## Structure du Projet

* **/components** : Composants Vue pour la mise en page, les tâches, les modales, etc.
  * **/layout** :  Composants faisant partie de la structure du site
  * **/UI**: Composants réutilisables et modulables favorisant un design harmonieux
  * **/tasks**: Composants spécifiques à la gestion des tâches 
* **/composables** : Composables réutilisables (par exemple, useApi pour simplifier les appels API).
* **/server/api** : Endpoints API utilisés par l'application pour gérer les tâches.
* **/assets/css** : Styles globaux et variables CSS.
* **/store** : Configuration du store Pinia pour la gestion des tâches.

## Intégration API

L'application utilise un composable personnalisé useApi pour interagir avec l'API locale.
Consultez le dossier /server/api pour voir comment les endpoints sont structurés.

## Améliorations Futures

* **UI/UX** : Ajout d'animations (par exemple, un feu d'artifice lors de la complétion d'une tâche), amélioration du design responsive et intégration d'un drag and drop pour modifier l'ordre.
* **Fonctionnalités supplémentaires** : Filtrage, tri, recherche des tâches, ajout de date de complétion ou encore ajout de la personne responsable.
* **Optimisation du code** : Refactorisation des composants et meilleure gestion des erreurs pour une application prête pour la production.

## Notes

Ce projet a été développé dans le cadre d'un test technique. Certaines fonctionnalités ont été simplifiées, et des améliorations pourront être discutées lors de la revue.
