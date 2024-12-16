# Création d'un Jeu de Mémoire
Bienvenue dans ce projet de création d'un jeu de mémoire (Memory Game) simple ! Ce projet est conçu pour vous aider à apprendre les bases du développement web en HTML, CSS et JavaScript, tout en créant un jeu interactif et amusant.

([Lien vers le jeu](https://memory-amber.vercel.app/))
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

# Installation
## GITHUB
([Repo gitHub](https://github.com/jMoulis/memory))
- Le but est de "cloner" le projet
1. Créer un dossier avec le nom `stage` sur ton ordi, pour une question de simplicité créer le sur bureau.
2. Ensuite avec le terminal tu vas dans le dossier pour naviguer dans les dossiers avec le terminal tu utilises la commande `cd`. Normalement pour aller dans le dossier stage tu tapes `cd ~/Desktop/stage` (je ne me souviens plus de linux exactement)
3. Une fois dans le dossier tu tapes `git clone https://github.com/jMoulis/memory.git`
4. Ensuite tu dois rentrer dans le dossier crée qui s'appelle `memory` pour y naviguer, tu saisis `cd memory`
5. Ensuite tu dois ouvrir visual studio code (VS code pour les intimes). Si la commande terminal est dispo et si tu es bien dans le dossier `memory`, tu tapes `code .`, et là normalement vscode va s'ouvrir et tu verras tous les dossiers et fichiers. Si la commande `code .` ne fonctionne pas, ouvre vscode comme tu fais d'habitude et tu vas chercher le dossier dans `fichier -> ouvrir dossier` et tu choisis `memory`
6. Il faut que tu installes le plugin `Live server` dans vscode ([lien vers live server plugin](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)) et tu cliques sur le bouton vert `install`, qui devrait te demander d'ouvrir vscode.
7. Si tu veux tester le jeu, après avoir installer le plugin et redémarrer vsCode tu ouvres le dossier `End` et tu fais un clique droit sur le fichier `index.html` et tu devrais avoir une option `Open with Liver server`, ce qui devrait t'ouvrir ton navigateur.
8. Si tu n'arrives à faire tout ça, demandes à notre meilleur ami `ChatGPT`