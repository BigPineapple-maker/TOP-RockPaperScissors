// === The global constants ==== //

const choices = ["Rock", "Paper", "Scissors"];


// Let's just get user input and make that show in console.

function rockPaperScissors(input){
    console.log(`Your Choice: ${input}`);

    showComputerChoice();
}



//get computer choice

function getComputerChoice(){
    //have a random choice - therefore need a random function

    return choices[Math.floor(Math.random() * 3)]
}

function showComputerChoice(input){
    console.log("Computer Chose: " + getComputerChoice())

}




function determineWinner(input){
    
    // == logic == //
    // check if they're the same ... draw
    // rock beats scissors
    // paper beats rock
    // scissors beats paper

    

}