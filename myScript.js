
function game(){
    for (let i = 0; i < 5; i++) {
        //Make a veriable for player choices 
        const playerChoice = playerPlay();
        //make a verible for computer choices
        const computerChoice = computerPlay();
        //Repet game 5 times 
        let outcome = playRound(playerChoice,computerChoice);
        //Output the winner 
        console.log(outcome);
     }     
}

//Comper if player or computer won      
//By cheking if its draw or the player or computer has better hand 
function playRound(playerChoice, computerChoice){
    let X;
    if(computerChoice == playerChoice){X = "Draw";}
    else{
        switch(computerChoice){
            case "rock": 
                 if(playerChoice == "scissors"){X = "Lose";}
                 if(playerChoice == "paper"){X = "Win";}
                  break;
             case "paper":
                 if(playerChoice == "rock"){X = "Lose";}
                 if(playerChoice == "scissors"){X = "Win";}
                 break;
            case "scissors":
                 if(playerChoice == "paper"){X = "Lose";}
                 if(playerChoice == "rock"){X = "Win";}
                 break;
        }
    }
    return X +" the computer had "+ computerChoice;
}

//Let computer make a choices           
//By randomizing a number from 1 - 3 and tying each number with a choice
function computerPlay(){
    let rand = Math.floor(Math.random() * 3) + 1;
    //console.log(rand);
    if(rand == 1){return "rock";}
    if(rand == 2){return "paper";}
    if(rand == 3){return "scissors";}
}
//Let player chose a veriable     
function playerPlay(){
    let choice;
    let keepgoing = true; 
    while (keepgoing) {
        choice = prompt("rock, paper or scissors").toLowerCase();
        if (choice == "rock" || choice == "scissors"|| choice == "paper" ){
            keepgoing = false;
        }
       if(keepgoing){console.log("Invalid option try again");}
    }
    return choice;
}

game();