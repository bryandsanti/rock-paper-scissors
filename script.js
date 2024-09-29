// Computer's Choice //


function getComputerChoice(){
   let computerAnswer = Math.floor(Math.random() * 3);

    
    if (computerAnswer == 0){
        return 'Rock';
    } else if (computerAnswer == 1){
        return 'Paper';
    } else {
        return 'Scissors'
    }
}

const computerChoice = getComputerChoice();
// console.log(computerChoice)

// Human's Choice //

function getHumanChoice(){
let humanChoice = prompt('What is your choice?').toLowerCase();
 
if ( (humanChoice=== 'rock' || humanChoice === 'paper' || humanChoice === 'scissors') && humanChoice != null && humanChoice.length != 0 ){
    console.log('You chose:' , humanChoice.charAt(0).toLocaleUpperCase() + humanChoice.slice(1));
} else {
    alert('Please pick a valid choice!')
}
}
// Comparing answers //

let humanScore = 0;
let computerScore = 0;

console.log('Initial Score:');
console.log('Human Score: ', humanScore);
console.log('Computer Score: ', computerScore);

function playRound(humanChoice, computerChoice){

    if (humanChoice === 'Rock'){
        if (computerChoice === 'Scissors'){
            computerScore++;
            console.log('Computer Wins!');
        } else if (computerChoice === 'Paper'){
            humanScore++;
            console.log('You Win!');
        } else {
            console.log ("It's a tie!!");
        }
    } else if (humanChoice === 'Paper'){
        if (computerChoice === 'Rock'){
            humanScore++;
            console.log('You win!');
        } else if (computerChoice === 'Scissors'){
            computerScore++;
            console.log('Computer Wins!');
        } else {
            console.log("It's a tie!!");
        }
    } else {
        if (computerChoice === 'Paper'){
            humanScore++;
            console.log('You Win!');
        } else if (computerChoice === 'Rock'){
            computerScore++;
            console.log('Computer Wins!');
        } else {
            console.log("It's a tie!!");
        }
    }
    console.log('Human Score: ', humanScore);
    console.log('Computer Score: ', computerScore);
}

// Making the game 5 rounds //

function playGame(){
    for( let i = 0; i < 5; i++){
        const humanChoice = getHumanChoice();
        const computerChoice= getComputerChoice();
        
        playRound(humanChoice,computerChoice);
    }

    if(humanScore > computerScore){
        console.log('You Won!!');
    } else {
        console.log('You lost!! Better luck next time!')
    }
}

playGame();
