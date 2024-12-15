// script.js

/**
 * Création d'un jeu de mémoire simple
 * Etapes principales dans l'ordre:
 * 1. Sélectionner les éléments du DOM
 * 2. Initialiser les variables du jeu
 * 3. Créer les fonctions du jeu
 * 4. Ajouter les écouteurs d'événements
 * 5. Démarrer le jeu pour la première fois
 */

// Initialisation du jeu
document.addEventListener('DOMContentLoaded', () => {
  console.log('Le DOM est chargé !');

  /**
   * Sélection des éléments du DOM
   * @link https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Locating_DOM_elements_using_selectors
   */
  const gameContainer = document.getElementById('game-container');
  const moveCounter = document.getElementById('move-counter');
  const victoryMessage = document.getElementById('victory-message');
  const restartButton = document.getElementById('restart-button');
  const difficultySelector = document.getElementById('difficulty');
  const timerElement = document.getElementById('timer');

  // Liste des symboles disponibles
  const symbols = [
    '🍎',
    '🍌',
    '🍇',
    '🍓',
    '🍒',
    '🍑',
    '🍍',
    '🥝',
    '🍉',
    '🥥',
    '🥭',
    '🍋',
    '🍈',
    '🍐',
    '🍏',
    '🍊',
    '🍅',
    '🍆',
    '🥑',
    '🥦',
    '🥒',
    '🌶️',
    '🍄',
    '🥜',
    '🌰',
    '🍞',
    '🥐',
    '🥖',
    '🥨',
    '🧀',
    '🍗',
    '🍖'
  ];
  let cards = [];
  let firstCard = null;
  let secondCard = null;
  let lockBoard = false;
  let moves = 0;
  let matchedPairs = 0;
  let gridSize = 4; // Valeur par défaut
  let timerInterval = null;
  let timer = 0;
  /**
   * Fonction principale pour démarrer ou redémarrer le jeu
   * @link https://developer.mozilla.org/fr/docs/Web/API/Document/DOMContentLoaded_event
   */
  function startGame() {
    // Réinitialiser les variables de jeu
    // @link https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Statements/let
    // @link https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Statements/const
    cards = [];
    firstCard = null;
    secondCard = null;
    lockBoard = false;
    moves = 0;
    matchedPairs = 0;
    moveCounter.textContent = moves;
    victoryMessage.style.display = 'none';
    restartButton.style.display = 'none';
    gameContainer.innerHTML = '';

    // Définir la taille de la grille en fonction de la sélection
    // @link https://developer.mozilla.org/fr/docs/Web/API/HTMLElement/style
    gridSize = parseInt(difficultySelector.value);

    gameContainer.style.gridTemplateColumns = `repeat(${gridSize}, 100px)`;

    // Calculer le nombre de paires requises
    // @link https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Operators/arithmetic_operators#Division
    const requiredPairs = (gridSize * gridSize) / 2;

    // Vérifier qu'il y a suffisamment de symboles disponibles
    if (requiredPairs > symbols.length) {
      alert(
        `Pas assez de symboles pour créer ${requiredPairs} paires. Veuillez ajouter plus de symboles dans le script.`
      );
      return;
    }

    // Sélectionner les symboles nécessaires
    // @link https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
    let selectedSymbols = symbols.slice(0, requiredPairs);

    // Créer les paires en dupliquant les symboles sélectionnés
    // @link https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/concat
    cards = selectedSymbols.concat(selectedSymbols) || [];

    // Mélanger les cartes
    cards = shuffle(cards);

    // Créer les éléments de carte dans le DOM
    // @link https://developer.mozilla.org/fr/docs/Web/API/Document/createElement
    // @link https://developer.mozilla.org/fr/docs/Web/API/Element/classList
    // @link https://developer.mozilla.org/fr/docs/Web/API/Element/dataset
    // @link https://developer.mozilla.org/fr/docs/Web/API/Element/textContent
    cards.forEach((symbol) => {
      /**
       * A faire
       * 1. Créer un élément de carte
       * 2. Ajouter la classe 'card'
       * 3. Attribuer le symbole à la carte
       * 4. Afficher le symbole (sera caché par CSS)
       * 5. Ajouter la carte au conteneur de jeu
       */
    });

    // Sélectionner toutes les cartes nouvellement créées
    // @link https://developer.mozilla.org/fr/docs/Web/API/Document/querySelectorAll
    const allCards = document.querySelectorAll('.card');

    // Ajouter les écouteurs d'événements pour les cartes
    // @link https://developer.mozilla.org/fr/docs/Web/API/EventTarget/addEventListener
    allCards.forEach((card) => {
      /**
       * A faire
       * Ajouter un écouteur d'événement pour retourner la carte
       */
    });
    // Démarrer le chronomètre
    // @link https://developer.mozilla.org/fr/docs/Web/API/WindowOrWorkerGlobalScope/setInterval
    if (timerInterval) clearInterval(timerInterval);
    timerInterval = setInterval(() => {
      timer++;
      timerElement.textContent = timer;
    }, 1000);
  }

  /**
   * Fonction de mélange des cartes
   * @param {Array} array - Tableau des cartes
   * @returns {Array} - Tableau mélangé
   * @link https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
   * @link https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Math/random
   */
  function shuffle(array) {
    /**
     * A faire : Mélanger les cartes (indice de 0.5)
     * @link https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
     *
     */
    return [];
  }

  /**
   * Fonction pour retourner une carte lorsqu'elle est cliquée
   * @link https://developer.mozilla.org/fr/docs/Web/API/EventTarget/addEventListener
   * @link https://developer.mozilla.org/fr/docs/Web/API/Element/classList
   */
  function flipCard() {
    /**
     * A faire : Retourner la carte
     * 1- Empêcher de cliquer pendant le délai
     * 2- Empêcher de cliquer deux fois sur la même carte
     * 3- Empêcher de cliquer sur une carte déjà retournée
     * 4- Ajouter la classe 'flipped' à la carte
     * 5- Vérifier si c'est la première ou la deuxième carte
     * 6- Incrémenter le nombre de mouvements
     * 7- Mettre à jour le compteur de mouvements
     * 8- Vérifier si les cartes correspondent
     */
  }

  /**
   * Fonction pour vérifier si les deux cartes sélectionnées correspondent
   * @link https://developer.mozilla.org/fr/docs/Web/API/HTMLElement/dataset
   */
  function checkForMatch() {
    /**  A faire : Vérifier si les cartes correspondent
     * 1- Vérifier si les cartes correspondent (indice vérifier le dataset)
     * 2- Désactiver les cartes si elles correspondent
     * 3- Incrémenter le nombre de paires trouvées
     * 4- Afficher le message de victoire si toutes les paires sont trouvées
     * 5- Réinitialiser le tour
     * 6- Retourner les cartes si elles ne correspondent pas
     *
     */
  }

  /**
   * Fonction pour désactiver les cartes trouvées
   * @link https://developer.mozilla.org/fr/docs/Web/API/Element/removeEventListener
   */
  function disableCards() {
    /**
     * A faire : Désactiver les cartes trouvées
     * 1- Retirer l'écouteur d'événement pour la première carte
     * 2- Retirer l'écouteur d'événement pour la deuxième carte
     */
  }

  /**
   * Fonction pour retourner les cartes si elles ne correspondent pas
   * @link https://developer.mozilla.org/fr/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout
   */
  function unflipCards() {
    setTimeout(() => {
      /**
       * A faire : Retourner les cartes si elles ne correspondent pas
       * 1- Retirer la classe 'flipped' de la première carte
       * 2- Retirer la classe 'flipped' de la deuxième carte
       * 3- Réinitialiser le tour
       */
    }, 1000);
  }

  /**
   * Fonction pour réinitialiser les variables du tour
   */
  function resetBoard() {
    /**
     * A faire : Réinitialiser les variables du tour
     * 1- Réinitialiser les variables firstCard et secondCard
     * 2- Déverrouiller le tableau
     */
  }

  // Écouteur d'événement pour le bouton de redémarrage
  // @link https://developer.mozilla.org/fr/docs/Web/API/EventTarget/addEventListener
  restartButton.addEventListener('click', startGame);

  // Écouteur d'événement pour le sélecteur de difficulté
  // @link https://developer.mozilla.org/fr/docs/Web/API/EventTarget/addEventListener
  difficultySelector.addEventListener('change', startGame);

  // Démarrer le jeu pour la première fois
  // startGame();
});
