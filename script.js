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

Gameboard.userMark("X"); // CADA VEZ QUE CLICKEES VA A SER CON EL SIMBOLO 'X'.

/* Player factory */
// player creation.
const playerFactory = (name, symbol) => {};

/* Controller module */
// turns & checking result.
const Controller = (() => {
  //Build the logic that checks for when the game is over! Should check for 3-in-a-row and a tie.
  const checkWin = (symbol) => {
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
    // SI BOARD TIENE ALGUNA DE LAS COMBINACIONES(INDEX) CON EL MISMO SIMBOLO ENTONCES VICTORIA
    // encontrar forma de asociar los index de los array al board y a simbolo.
    // foreach array dentro de winningcombination... 
    // desestructurar cada array?
    winningCombinations.forEach(combination => {
      const [firstMark,secondMark,thirdMark] = combination

     if(Gameboard.board[combination] === 'X') {
      console.log('HOLA')
     }
    })

  };
  return {
    checkWin,
  };
})();


Controller.checkWin(symbol);