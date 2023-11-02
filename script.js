/*Board module*/
// board & user interaction with it.
const Gameboard = (() => {
  const board = [];

  const buttons = document.querySelectorAll(".btn-grid");

  // Show the board on screen
  const displayBoard = () => {
    buttons.forEach((button, i) => {
      button.textContent = Gameboard.board[i];
    });
  };

  // Every time the buttons are clicked they change the Board array with the symbol of the User clicker. An if statement so it's not posible to rewrite the board once its clicked.
  const userMark = (symbol) => {
    buttons.forEach((button, i) => {
      button.addEventListener("click", () => {
        if (button.textContent != symbol) {
          Gameboard.board[i] = symbol;
          Gameboard.displayBoard();
          GameController.checkWin(symbol);
          GameController.turnGame(symbol);
        } else {
          alert("ILEGAL MOVE");
        }
      });
    });
  };

  return {
    displayBoard,
    board,
    userMark,
  };
})();

//Call to mark the board. Defining the Symbol.
//Despues ponerlo para que se inicialice en cada turno dependiendo el Player y su Simbolo.

Gameboard.userMark("O"); // CADA VEZ QUE CLICKEES VA A SER CON EL SIMBOLO 'X'.

/* Player factory */
// player creation.
const PlayerFactory = (name, symbol) => {};

/* Controller module */
// turns & checking result.
const GameController = (() => {
  // Checking if theres a win or a tie
  const checkWin = (symbol) => {
    const board = Gameboard.board;

    // winning combinations (the numbers are index for board)
    const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    // For each combination inside the array it separates every index(or mark) of the combination
    winningCombinations.forEach((combination) => {
      //console.log(board)
      console.log(board.includes(undefined) === false, board.length === 9);
      const [firstMark, secondMark, thirdMark] = combination;
      // if the board has in its indexes defined by combination three equal symbols then finish the game, theres a winner.
      // if the entire board is full then finish the game, its a tie
      // if not then do nothing, go on.
      if (
        board[firstMark] !== undefined &&
        board[firstMark] === board[secondMark] &&
        board[secondMark] === board[thirdMark]
      ) {
        // Hay un ganador
        console.log("There is a Winner");
      } else if (board.includes(undefined) === false && board.length === 9) {
        // Hay un empate
        console.log("There is a Tie");
      }
    });
  };

  // Turn logic function.
  // Arranca el player 1
  // Si player1 hace su movimiento entonces turnPlayer = player2
  // Loopear??
  // Si a board se le ???agrega??? una 'X' entonces turnPlayer = player2 ('O')
  // Cambia el userMark('O')

  const turnGame = (player1, player2) => {
    const board = Gameboard.board;
    let turnPlayer = player1;


  };
  return {
    checkWin,
    turnGame,
  };
})();

// Funcion para hacer los turnos
// Funcion para FINALIZAR el juego
// REFACTOREAR userMark a dos funciones addUserMark y handleUserMark

// turnGame('X', 'O')
