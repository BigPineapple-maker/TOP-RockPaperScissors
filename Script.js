// === The global constants ==== //

const choices = ["Rock", "Paper", "Scissors"];
let user = "";
let computer = "";

// ==== details //
/* 
    Using global variables so that I can run through the functions below without continuously re-running the functions that provide the choice for computer.
*/


// Let's just get user input and make that show in console.

function rockPaperScissors(input){

    updateUserChoice(input); //update global variable for what the user input
    
    console.log(`Your Choice: ${input}`);

    showComputerChoice();

    // at this stage the global variables have been updated

    determineWinner();
}



//get computer choice

function getComputerChoice(){
    //have a random choice - therefore need a random function
    //update the global variable
    
    computer = choices[Math.floor(Math.random() * 3)]
    
    return computer
}

function showComputerChoice(){
    console.log("Computer Chose: " + getComputerChoice())

}

    //Function to update teh user choice global variable
function updateUserChoice(input){
    user = input
    return 
}


function determineWinner(){
    
    // == logic == //
    // check if they're the same ... draw
    // rock beats scissors
    // paper beats rock
    // scissors beats paper

    //check for user first. Check if they are rock, then paper, then scissors.
 
    //import the user and computer using the global variable

    outcome = 
    user == "Rock" 
        ? computer == "Rock" ? "Draw"
        : computer == "Paper" ? "I Lost": "I won" 
    : user == "Scissors"
        ? computer == "Rock" ? "I lost" 
        : computer == "Paper" ? "I won" : "Draw"
        
    : computer == "Paper" ? "Draw" //I am definitely paper therefore just check what computer is
        : computer == "Scissors" ? "I lost": "I won"
    
    
    
    console.log(outcome)


}