<!DOCTYPE html>


<html>

<body>
    <h1>Guess what letter i'm thinking of</h1>

<div id= "game">

    <h2>Wins:<span id="wins-text"></span></h2>
    <h2>Losses:<span id="losses-text"></span></h2>
    <h2>Guesses Left:<span id="remaining-text"></span></h2>
    <h2>Your Guesses So Far:<span id="youguessed-text"></span></h2>

</div>

<script type="text/javascript">
    
    var cpuChoices = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]

    var wins = 0;
    var winselement = document.getElementById ("wins-text");

    var losses = 0
    var losseselement = document.getElementById("losses-text");

    var guessesRemaining = 9 
    var guessesleftElement = document.getElementById("remaining-text")
    
    var guesses = document.getElementById("youguessed-text")
    document.onkeyup = function(event) {

        guesses.textContent = event/key

    document.onkeypress = function(event) {
        guesses.textContent = event.key;

        var cpuLetter = cpuChoices
        [Math.floor(Math.random()*cpuChoices.length)];
            console.log(cpuLetter);

    
    
        if (guesses === cpuLetter) {
            wins++;
        }
        else {
            guessesRemaining --;
        }

        if(guessesRemaining === 0){
            losses ++
        }

        guessesleftElement.textContent = guessesRemaining
    }
</script>
</body>
</html>
