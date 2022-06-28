const { pendu, entrerUneLettre,checkPartieTerminee,initGame } = require("./pendu");

function testPerdre() {
    gameStatus = initGame();

    entrerUneLettre('d',gameStatus);
    entrerUneLettre('d',gameStatus);
    entrerUneLettre('d',gameStatus);
    entrerUneLettre('d',gameStatus);
    entrerUneLettre('d',gameStatus);
    entrerUneLettre('d',gameStatus);
    entrerUneLettre('d',gameStatus);
    entrerUneLettre('d',gameStatus);
    entrerUneLettre('d',gameStatus);
    entrerUneLettre('d',gameStatus);

    if(gameStatus.partieFinie == true && gameStatus.aGagne == false) {
        console.log("test Perdu -  OK !");
    } else {
        console.log("Test perdu KO");
        console.log(gameStatus);
    }
}

function testGagne() {
    gameStatus = initGame();

  entrerUneLettre('a', gameStatus);
  entrerUneLettre('b', gameStatus);
  entrerUneLettre('r', gameStatus);
  entrerUneLettre('i', gameStatus);
  entrerUneLettre('c', gameStatus);
  entrerUneLettre('o', gameStatus);
  entrerUneLettre('t', gameStatus);

  if (gameStatus.partieFinie && gameStatus.aGagne) {
    console.log('Test Gagne - OK');
  } else {
    console.log('Test Gagne - KO');
  } 
}

function testEntreeIncorrect() {
    gameStatus = initGame();

  entrerUneLettre(1, gameStatus);

  entrerUneLettre('ab', gameStatus);

  entrerUneLettre(false, gameStatus);
}


testPerdre();
testGagne();
testEntreeIncorrect();