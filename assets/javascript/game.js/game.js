$(document).ready(function () {
    var Random = Math.floor(Math.random() * 101 + 19)
    // Selects a random number to be shown at the start of the game
    // Number should be should be between 19 - 120
    $('#randomNumber').text(Random);
    // Appending random number to the randomNumber id in the html doc
    //
    var num1 = Math.floor(Math.random() * 11 + 1)
    var num2 = Math.floor(Math.random() * 11 + 1)
    var num3 = Math.floor(Math.random() * 11 + 1)
    var num4 = Math.floor(Math.random() * 11 + 1)
    // Setting up random numbers for each jewel
    // Random number has to be between 1 - 12
    // 
    var userTotal = 0;
    var wins = 0;
    var losses = 0;
    //  Decaring variables for tallies
    $('#numberWins').text(wins);
    $('#numberLosses').text(losses);
    //resets the game
    function reset() {
        Random = Math.floor(Math.random() * 101 + 19);
        console.log(Random)
        $('#randomNumber').text(Random);
        num1 = Math.floor(Math.random() * 11 + 1);
        num2 = Math.floor(Math.random() * 11 + 1);
        num3 = Math.floor(Math.random() * 11 + 1);
        num4 = Math.floor(Math.random() * 11 + 1);
        userTotal = 0;
        $('#finalTotal').text(userTotal);
    }
    //adds the wins to the userTotal
    function yay() {
        alert("You won!");
        wins++;
        $('#numberWins').text(wins);
        reset();
    }
    //addes the losses to the userTotal
    function loser() {
        alert("You lose!");
        losses++;
        $('#numberLosses').text(losses);
        reset()
    }
    //sets up click for jewels
    $('#one').on('click', function () {
        userTotal = userTotal + num1;
        console.log("New userTotal= " + userTotal);
        $('#finalTotal').text(userTotal);
        //sets win/lose conditions
        if (userTotal == Random) {
            yay();
        }
        else if (userTotal > Random) {
            loser();
        }
    })
    $('#two').on('click', function () {
        userTotal = userTotal + num2;
        console.log("New userTotal= " + userTotal);
        $('#finalTotal').text(userTotal);
        if (userTotal == Random) {
            yay();
        }
        else if (userTotal > Random) {
            loser();
        }
    })
    $('#three').on('click', function () {
        userTotal = userTotal + num3;
        console.log("New userTotal= " + userTotal);
        $('#finalTotal').text(userTotal);
        //sets win/lose conditions
        if (userTotal == Random) {
            yay();
        }
        else if (userTotal > Random) {
            loser();
        }
    })
    $('#four').on('click', function () {
        userTotal = userTotal + num4;
        console.log("New userTotal= " + userTotal);
        $('#finalTotal').text(userTotal);

        if (userTotal == Random) {
            yay();
        }
        else if (userTotal > Random) {
            loser();
        }
    });

// pseudo coding
// There will be four crystals displayed as buttons on the page.
// The player will be shown a random number at the start of the game.
// When the player clicks on a crystal, it will add a specific amount of points to the player's total score. 
// Game will hide this amount until the player clicks a crystal.
// When they do click one, update the player's score counter.
// The player wins if their total score matches the random number from the beginning of the game.
// The player loses if their score goes above the random number.
// The game restarts whenever the player wins or loses.
// When the game begins again, the player should see a new random number. Also, all the crystals will have four new hidden values. Of course, the user's score (and score counter) will reset to zero.
// The app should show the number of games the player wins and loses. To that end, do not refresh the page as a means to restart the game
