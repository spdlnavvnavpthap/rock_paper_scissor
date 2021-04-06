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
        computerWinCounter++; 
        return(`You Lose! ${computerSelection} beats ${playerSelectionStandardized}`);
    }

    if(resultIndex === 1){
        playerWinCounter++;
        return(`You Win! ${playerSelectionStandardized} beats ${computerSelection}`);
    }
}

let playerWinCounter = 0;
let computerWinCounter = 0;
let roundResult = "Let's start!";
let rockPaperScissorsEmojis = {Rock:"✊", Paper:"✋", Scissors:"✌"};
const buttons = document.querySelectorAll('button');
const computerChoice = document.querySelector('#computerChoice'); 
const yourChoice = document.querySelector('#yourChoice');

buttons.forEach(function(button){
    button.addEventListener('click', function(){

        let computerSelection = computerPlay();
        roundResult = playRound(button.id,computerSelection);
        counter.textContent = `You: ${playerWinCounter} vs Computer: ${computerWinCounter}`;
        announcer.textContent = roundResult;
        computerChoice.textContent = rockPaperScissorsEmojis[computerSelection];
        yourChoice.textContent = rockPaperScissorsEmojis[button.id];

        if (playerWinCounter === 5 || computerWinCounter === 5){
            counter.textContent = `You: ${playerWinCounter} vs Computer: ${computerWinCounter}`;

            if(playerWinCounter > computerWinCounter){
                alert("Player Wins!!!");
                announcer.textContent ="Player Wins, Press to restart";
            }
            else if (computerWinCounter > playerWinCounter){
                alert("Player Loses...");
                announcer.textContent ="Computer Wins Press to restart";
            }
            playerWinCounter = 0;
            computerWinCounter = 0;
            return;
        }
    });
});

