// Computer's Choice //

function getComputerChoice(min , max){
    return Math.floor(Math.random() * (max-min) + min);
}

let computerAnswer = getComputerChoice(1,4);

console.log(computerAnswer);

if (computerAnswer ==  1){
    console.log('Rock');
} else if (computerAnswer == 2){
    console.log('Paper');
} else {
    console.log('Scissors');
}

// Human's Choice //

let humanChoice = prompt('What is your choice?').toLowerCase();
 
if ( (humanChoice == ('rock' || 'paper' || 'scissors')) && humanChoice != null && humanChoice.length != 0 ){
    console.log(humanChoice.charAt(0).toLocaleUpperCase() + humanChoice.slice(1));
} else {
    alert('Please pick a valid choice!')
}

// Comparing answers //

