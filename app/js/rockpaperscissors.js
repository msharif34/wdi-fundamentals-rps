////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    return move = move || getInput();
}
getPlayerMove(move);

function getComputerMove(move) {
    move = randomPlay();
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
   return move = move || getComputerMove();
}

getComputerMove(move);

function getWinner(playerMove,computerMove) {
     var winner;
     // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
     // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
     // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
     /* YOUR CODE HERE */
    if (playerMove == "rock" && computerMove == "scissors") {
        winner = "player"
        console.log("Player wins!");
    }
    else if (playerMove == "scissors" && computerMove == "rock") {
        winner = "computer"
        console.log("Computer wins!");
    }
    else if (playerMove == "rock" && computerMove == "paper") {
        winner = "computer"
        console.log("Computer wins!");
    }
    else if (playerMove == "paper" && computerMove == "rock") {
        winner = "player"
        console.log("Player wins!");
    }
    else if (playerMove == "paper" && computerMove == "scissors") {
        winner = "computer"
        console.log("Computer wins!");
    }
    else if (playerMove == "scissors" && computerMove == "paper") {
        winner = "player"
        console.log("Player wins!");
    }
    else {
        winner = "tie"
        console.log("Tie!");
    }

     return winner;
 }
 getWinner(playerMove,computerMove);
 
function playToFive() {
  console.log('Let\'s play Rock Paper Scissors');
  var playerWins = 0;
  var computerWins = 0;
     // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
     /* YOUR CODE HERE */
    while (playerWins < 5 && computerWins < 5){
        getWinner(getPlayerMove(), getComputerMove());
        if (winner == "player") {
            playerWins += 1;
            console.log("Player" + playerWins + " " + "Computer" + computerWins);
        }
        else if (winner == "computer") {
            computerWins += 1;
            console.log("Player" + playerWins + " " + "Computer" + computerWins);
        }
        else {
            playerWins && computerWins;
            console.log("Player" + playerWins + " " + "Computer" + computerWins);
        }
    }
     return [playerWins, computerWins];
 }
 
playToFive(); 


