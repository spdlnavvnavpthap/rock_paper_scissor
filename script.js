//function to genarate a random R P S output from the computer using 
//the Math.random() function

function computerPlay() {
    let outputValue = Math.random();

    if (outputValue <= 0.33)
        return ("Rock");
    else if (outputValue > 0.33 && outputValue <= 0.66)
        return ("Paper");
    else if (outputValue > 0.66)
        return ("Scissors");
}

//a function for a round of play. 
//a selection array is used to contain the possible R P S choices.
//a 3 by 3 matrix is create to assign the result between different player and computer output
// where player wins is 1, computer winds is 0, draw is 0.
 
function playRound (playerSelection, computerSelection) {
    let playerSelectionStandardized = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();
    let selectionArray = ["Rock", "Paper", "Scissors"];
    let resultArray =  [[0,-1,1], [1,0,-1], [-1,1,0]];

    if(selectionArray.indexOf(playerSelectionStandardized) === -1) {
        console.log("incorrect input");
        return;
    }

    let resultIndex = resultArray[selectionArray.indexOf(playerSelectionStandardized)][selectionArray.indexOf(computerSelection)];
    if (resultIndex === 0){
        return ("Draw");
    }

    if(resultIndex === -1){
        return(`You Lose! ${computerSelection} beats ${playerSelectionStandardized}`);
    }

    if(resultIndex === 1){
        return(`You Win! ${playerSelectionStandardized} beats ${computerSelection}`);
    }
}

//a function for 5 rounds of games
//it will stop if either player or computer reaches 3 wins
//the game result will be alerted on the page at last

function game(){
    let playerWins = 0;
    let computerWins = 0;

    for (var i = 0; i < 5; i++){

        if(playerWins === 3 || computerWins === 3)
            break;

        let playerSelection = window.prompt("Rock/Paper/Scissors?");
        let computerSelection = computerPlay();
        let roundResult = playRound(playerSelection,computerSelection);

        console.log(roundResult);

        if(roundResult.match(/Win/)){
            playerWins++;
        }
        else if(roundResult.match(/Lose/)){
            computerWins++;
        }
    }

    if(playerWins > computerWins)
        alert(`${playerWins} vs ${computerWins}, you win!`);
    else if (playerWins < computerWins)
        alert(`${playerWins} vs ${computerWins}, you lose!`);
    else if (playerWins === computerWins)
        alert(`${playerWins} vs ${computerWins}, draw game!`);

}

game();