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
    timer = 0;
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
    cards = selectedSymbols.concat(selectedSymbols);

    // Mélanger les cartes
    cards = shuffle(cards);

    // Créer les éléments de carte dans le DOM
    // @link https://developer.mozilla.org/fr/docs/Web/API/Document/createElement
    // @link https://developer.mozilla.org/fr/docs/Web/API/Element/classList
    // @link https://developer.mozilla.org/fr/docs/Web/API/Element/dataset
    // @link https://developer.mozilla.org/fr/docs/Web/API/Element/textContent
    cards.forEach((symbol) => {
      const card = document.createElement('div');
      card.classList.add('card');
      card.dataset.symbol = symbol; // Attribuer le symbole à la carte
      card.textContent = symbol; // Afficher le symbole (sera caché par CSS)
      gameContainer.appendChild(card);
    });

    // Sélectionner toutes les cartes nouvellement créées
    // @link https://developer.mozilla.org/fr/docs/Web/API/Document/querySelectorAll
    const allCards = document.querySelectorAll('.card');

    // Ajouter les écouteurs d'événements pour les cartes
    // @link https://developer.mozilla.org/fr/docs/Web/API/EventTarget/addEventListener
    allCards.forEach((card) => {
      card.addEventListener('click', flipCard);
    });
    // Démarrer le chronomètre
    // @link https://developer.mozilla.org/fr/docs/Web/API/WindowOrWorkerGlobalScope/setInterval
    if (timerInterval) clearInterval(timerInterval);
    timerInterval = setInterval(() => {
      timer++;
      console.log(timer);
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
    return array.sort(() => Math.random() - 0.5);
  }

  /**
   * Fonction pour retourner une carte lorsqu'elle est cliquée
   * @link https://developer.mozilla.org/fr/docs/Web/API/EventTarget/addEventListener
   * @link https://developer.mozilla.org/fr/docs/Web/API/Element/classList
   */
  function flipCard() {
    if (lockBoard) return; // Empêcher de cliquer pendant le délai
    if (this === firstCard) return; // Empêcher de cliquer deux fois sur la même carte
    if (this.classList.contains('flipped')) return; // Empêcher de cliquer sur une carte déjà retournée

    this.classList.add('flipped');

    if (!firstCard) {
      firstCard = this;
      return;
    }

    secondCard = this;
    lockBoard = true;
    moves++;
    moveCounter.textContent = moves;

    checkForMatch();
  }

  /**
   * Fonction pour vérifier si les deux cartes sélectionnées correspondent
   * @link https://developer.mozilla.org/fr/docs/Web/API/HTMLElement/dataset
   */
  function checkForMatch() {
    const isMatch = firstCard.dataset.symbol === secondCard.dataset.symbol;

    if (isMatch) {
      disableCards();
      matchedPairs++;
      if (matchedPairs === (gridSize * gridSize) / 2) {
        victoryMessage.style.display = 'block';
        restartButton.style.display = 'inline-block';
      }
      resetBoard();
    } else {
      unflipCards();
    }
  }

  /**
   * Fonction pour désactiver les cartes trouvées
   * @link https://developer.mozilla.org/fr/docs/Web/API/Element/removeEventListener
   */
  function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
  }

  /**
   * Fonction pour retourner les cartes si elles ne correspondent pas
   * @link https://developer.mozilla.org/fr/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout
   */
  function unflipCards() {
    setTimeout(() => {
      firstCard.classList.remove('flipped');
      secondCard.classList.remove('flipped');
      resetBoard();
    }, 1000);
  }

  /**
   * Fonction pour réinitialiser les variables du tour
   */
  function resetBoard() {
    [firstCard, secondCard] = [null, null];
    lockBoard = false;
  }

  // Écouteur d'événement pour le bouton de redémarrage
  // @link https://developer.mozilla.org/fr/docs/Web/API/EventTarget/addEventListener
  restartButton.addEventListener('click', startGame);

  // Écouteur d'événement pour le sélecteur de difficulté
  // @link https://developer.mozilla.org/fr/docs/Web/API/EventTarget/addEventListener
  difficultySelector.addEventListener('change', startGame);

  // Démarrer le jeu pour la première fois
  startGame();
});
