var cpuChoices = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]

    var wins = 0;
    var winselement = document.getElementById ("wins-text");

    var losses = 0
    var losseselement = document.getElementById("losses-text");

    var guessesremaining = 9 
    var guessesleftElement = document.getElementById("remaining-text")
    
    var youguessed = [];
    var guessedletter = document.getElementById("youguessed-text");
    console.log("hi")
    
     
    document.onkeyup = function(event) {
        var guesses = event.key;
        
        youguessed.push(guesses);

        var cpuLetter = cpuChoices[Math.floor(Math.random()*cpuChoices.length)];
            console.log(cpuLetter);

    
    
        if (guesses === cpuLetter) {
            wins++;
            guessesremaining = 9;
            youguessed = [];
            cpuLetter = cpuChoices[Math.floor(Math.random()*cpuChoices.length)];
        }
        else {
            guessesremaining --;
            document.getElementById("remaining-text").innerHTML = guessesremaining;
            document.getElementById("youguessed-text").innerHTML = youguessed.join(",")

        }

        if(guessesremaining === 0){
            losses ++;
            guessesremaining = 9;
            youguessed = [];
            cpuLetter = cpuChoices[Math.floor(Math.random()*cpuChoices.length)];
        }

       
        losseselement.textContent = losses
        winselement.textContent = wins
        guessesleftElement.textContent = guessesremaining
        guessedletter.textContent = youguessed
        console.log("hi2")
     }

