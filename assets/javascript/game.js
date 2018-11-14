//trigger random number that is the target for the user to match
$(document).ready(function () {
    var targetRandom = Math.floor(Math.random() * 102 + 19)
    console.log(targetRandom)
    $('#target-number').html(targetRandom);

    //setting up an array of 4 random numbers that will each be assigned to one of the crystals
    //declaring total variable and printing the wins/losses variables	
    var crystalNumbers = []
    var total = 0;
    var wins = 0;
    var losses = 0;
    $('#win-count').append(wins);
    $('#lose-count').append(losses);


    //for loop that generates 4 random numbers between 1 and 12, then adds them to the crystalNumbers array
    function randomCrystalNumbers() {
        for (var i = 0; i < 4; i++) {
            var num = Math.floor(Math.random() * 12 + 1);
            crystalNumbers.push(num);
        }
        console.log(crystalNumbers)
    }

    randomCrystalNumbers();

    //game reset function
    function reset() {
        targetRandom = Math.floor(Math.random() * 102 + 19);
        console.log(targetRandom)
        $('#target-number').html(targetRandom);
        crystalNumbers = [];
        randomCrystalNumbers();
        total = 0;
        $('#score-count').html(total);
    }

    //win function that announces "You win" and counts win total
    function winRound() {
        $("#result").html("You Win!");
        wins++;
        $('#win-count').html("<p>Wins: " + wins + "</p>");
        reset();
    }

    //lose function that announces "You lose" and counts loss total
    function loseRound() {
        $("#result").html("You Lose!");
        losses++;
        $('#lose-count').html("<p>Losses: " + losses + "</p>");
        reset();
    }

    //creating on click events for crystals and win lose conditions
    $('#crystal-one').on('click', function () {
        total = total + crystalNumbers[0];
        $('#score-count').html(total);

        if (total == targetRandom) {
            winRound();
        }
        else if (total > targetRandom) {
            loseRound();
        }
    })

    $('#crystal-two').on('click', function () {
        total = total + crystalNumbers[1];
        $('#score-count').html(total);

        if (total == targetRandom) {
            winRound();
        }
        else if (total > targetRandom) {
            loseRound();
        }
    })

    $('#crystal-three').on('click', function () {
        total = total + crystalNumbers[2];
        $('#score-count').html(total);

        if (total == targetRandom) {
            winRound();
        }
        else if (total > targetRandom) {
            loseRound();
        }
    })

    $('#crystal-four').on('click', function () {
        total = total + crystalNumbers[3];
        $('#score-count').html(total);

        if (total == targetRandom) {
            winRound();
        }
        else if (total > targetRandom) {
            loseRound();
        }
    })
});	