function computerPlay() {
    let outputValue = Math.random();

    if (outputValue <= 0.33)
        return ("Rock");
    else if (outputValue > 0.33 && outputValue <= 0.66)
        return ("Paper");
    else if (outputValue > 0.66)
        return ("Scissors");
}


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