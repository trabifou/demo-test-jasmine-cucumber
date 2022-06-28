const assert = require('assert');
const { Given, When, Then } = require('@cucumber/cucumber');
const { pendu, entrerUneLettre,checkPartieTerminee,initGame } = require("../../pendu");

Given('the word is {string}', function (string) {
    this.gameStatus = initGame(string);
  });

  When('I enter {string}', function (string) {
    entrerUneLettre(string, this.gameStatus);
  });

  Then('I win', function () {
    assert.equal(this.gameStatus.partieFinie, true);
    assert.equal(this.gameStatus.aGagne, true);
  });

  Then('I lose', function () {
    assert.equal(this.gameStatus.partieFinie, true);
    assert.equal(this.gameStatus.aGagne, false);
  });
