const { pendu, entrerUneLettre,checkPartieTerminee,initGame } = require("../pendu");

describe("InputValidation", function() {
  
    it("Should detect something different than a letter has been entered", function() {
        gameStatus = initGame();

        entrerUneLettre(1, gameStatus);
        entrerUneLettre('ab', gameStatus);
        entrerUneLettre(false, gameStatus);

        expect(gameStatus.compteurCoupFaux).toEqual(0);

    });
});