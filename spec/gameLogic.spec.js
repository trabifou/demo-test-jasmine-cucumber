const { pendu, entrerUneLettre,checkPartieTerminee,initGame } = require("../pendu");

describe("GameLogic", function() {
  
    it("Should win if enter all word letters", function() {
        gameStatus = initGame();

        entrerUneLettre('a', gameStatus);
        entrerUneLettre('b', gameStatus);
        entrerUneLettre('r', gameStatus);
        entrerUneLettre('i', gameStatus);
        entrerUneLettre('c', gameStatus);
        entrerUneLettre('o', gameStatus);
        entrerUneLettre('t', gameStatus);
      
        expect(gameStatus.partieFinie).toBe(true, "partieFinie should have been true");
        expect(gameStatus.aGagne).toBe(true, "aGagne should be false");
        
    });

    it("Should lose if enter ", function() {
        gameStatus = initGame();

        entrerUneLettre('z', gameStatus);
        entrerUneLettre('q', gameStatus);
        entrerUneLettre('f', gameStatus);
        entrerUneLettre('u', gameStatus);
        entrerUneLettre('j', gameStatus);
        entrerUneLettre('m', gameStatus);
        entrerUneLettre('p', gameStatus);
        entrerUneLettre('k', gameStatus);
        entrerUneLettre('v', gameStatus);
        entrerUneLettre('w', gameStatus);

        expect(gameStatus.partieFinie).toBe(true, "partieFinie should have been true");
        expect(gameStatus.aGagne).toBe(false, "aGagne should be false");
    });
  });