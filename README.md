# Création d'un Jeu de Mémoire Simple
Bienvenue dans ce projet de création d'un jeu de mémoire (Memory Game) simple ! Ce projet est conçu pour vous aider à apprendre les bases du développement web en HTML, CSS et JavaScript, tout en créant un jeu interactif et amusant.

## Objectif
L'objectif de ce projet est de créer un jeu de mémoire où le joueur doit retrouver des paires de cartes identiques. Le jeu inclut différentes fonctionnalités telles que la sélection du niveau de difficulté, l'affichage du nombre de mouvements, un minuteur, et un message de victoire.

## Fonctionnalités Attenues
### 1. Sélection du Niveau de Difficulté
- **Niveaux Disponibles** : Facile (4x4), Moyen (6x6), Difficile (8x8)
- **Description** : Permettre au joueur de choisir la taille de la grille de jeu, ce qui influence le nombre de cartes à retrouver.
### 2. Affichage de la Grille de Jeu
- **Description** : Afficher une grille de cartes face cachée, dont la taille dépend du niveau de difficulté sélectionné.
### 3. Compteur de Mouvements
- **Description** : Afficher le nombre de mouvements effectués par le joueur. Un mouvement correspond à l'action de retourner deux cartes.
### 4. Minuteur
- **Description** : Afficher le temps écoulé depuis le début du jeu.
### 5. Message de Victoire
- **Description** : Afficher un message de félicitations lorsque toutes les paires de cartes ont été retrouvées, incluant le nombre de mouvements et le temps total.
## Séquences de Jeu
### 1. Sélection d'une Carte
- **Action** : Le joueur clique sur une carte.
- **Résultat Attendu** : L'emoji (symbole) de la carte s'affiche.
### 2. Sélection d'une Seconde Carte
- **Action** : Le joueur clique sur une deuxième carte.
- **Résultat Attendu** : L'emoji de la seconde carte s'affiche.
### 3. Vérification des Cartes
- Si les Cartes sont Identiques :
  - **Action** : Les deux cartes restent affichées face visible.
  - **Description** : Le joueur a trouvé une paire.
- Si les Cartes sont Différentes :
  - **Action** : Les deux cartes se retournent et redeviennent cachées après un court délai.
  - **Description** : Le joueur doit essayer de se souvenir de la position des cartes.
### 4. Incrémentation du Compteur de Mouvements
- **Action** : Chaque fois que le joueur clique sur la seconde carte, le compteur de mouvements est incrémenté.
- **Description** : Cela permet au joueur de suivre ses progrès.
