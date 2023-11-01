/*Board module*/
// board & user interaction with it.
const Gameboard = (() => {
  const board = [];

  const buttons = document.querySelectorAll(".btn-grid");

  const displayBoard = () => {
    buttons.forEach((button, i) => {
      button.textContent = Gameboard.board[i];
    });
  };

  const userMark = (symbol) => {
    buttons.forEach((button, i) => {
      button.addEventListener("click", () => {
        if (button.textContent != symbol) {
          Gameboard.board[i] = symbol;
          Gameboard.displayBoard();
        } else {
          alert('ILEGAL MOVE')
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

//Call to mark the board.
//Despues ponerlo para que se inicialice cada vez que startea el juego.
Gameboard.userMark("X");

/* Player factory */
// player creation.
const playerFactory = (name, symbol) => {};

/* Controller module */
// turns & checking result.
const Controller = () => {};
