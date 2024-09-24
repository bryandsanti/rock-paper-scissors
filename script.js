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