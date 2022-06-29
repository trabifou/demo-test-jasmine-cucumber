exports.initGame = function(word) {
    return {
        mot: word,
        motLettres: {
            "a": false,
            "b": false,
            "r": false,
            "i": false,
            "c": false,
            "o": false,
            "t": false
        },
        lettresTrouvees: 0,
        compteurCoupFaux: 0,
        compteurCoupMax: 10,
        partieFinie: false, // true si la partie est terminée
        aGagne: false // valable uniquement lorsque partieFinie = true
    };    
}
exports.pendu = function() {

    var gameStatus = initGame("abricot");

    while(mot.length != lettresTrouvees){
        let userLetter = prompt('Donner une lettre')
        entrerUneLettre(userLetter,gameStatus);
        console.log(`Lettres trouvées : ${lettresTrouvees}`)
    }

    if(mot.length == lettresTrouvees){
        console.log("Vous avez bien trouvé le mot")
        console.log(`Le mot était ${mot}`)
    }
}

exports.checkPartieTerminee = function(gameStatus) {
    if (gameStatus.compteurCoupFaux === gameStatus.compteurCoupMax) {
        console.log('Partie terminée');
        gameStatus.partieFinie = true;
        gameStatus.aGagne = false;
        return true;
    }
    let aGagne = true;
    for(let letter in gameStatus.motLettres) {
        if(!gameStatus.motLettres[letter]) {
            aGagne = false;
            break;
        }
    }
    if(aGagne) {
        gameStatus.partieFinie = true;
        gameStatus.aGagne = false;
    }
    return false;
}

exports.entrerUneLettre = function(userLetter,gameStatus) {
    if (typeof userLetter === "string" && userLetter.length === 1) {
        if(gameStatus.mot.includes(userLetter) && gameStatus.motLettres[userLetter] != true){
            gameStatus.lettresTrouvees++
            gameStatus.motLettres[userLetter] = true
        } else {
            // La lettre n'est pas dans le mot
            gameStatus.compteurCoupFaux++;
        }
        exports.checkPartieTerminee(gameStatus);
    } else {
        console.log('Une erreur d\'entrée à été détectée sur le tour:', userLetter);
    }
    return gameStatus;
}

