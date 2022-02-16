console.log("Hello World");
//Make a veriable for player choices    1
//make a verible for computer choices   2 
//Let player chose a veriable           5
//Let computer make a choices           3
//Comper if player or computer won      4
//Output the winner                     6
//Repet game 5 times                    7

//Comper if player or computer won      
//By cheking if player 
function playRound(playerChoice, computerChoice){
    if(computerChoice == playerChoice){return "Draw";}
    else{
        switch(computerChoice){
            case "rock": 
                 if(playerChoice == "scissors"){return "Lose";}
                 if(playerChoice == "paper"){return "Win";}
                  break;
             case "paper":
                 if(playerChoice == "rock"){return "Lose";}
                 if(playerChoice == "scissors"){return "Win";}
                 break;
            case "scissors":
                 if(playerChoice == "paper"){return "Lose";}
                 if(playerChoice == "rock"){return "Win";}
                 break;
        }
    }
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
//Make a veriable for player choices 
const playerChoice = "rock";
//make a verible for computer choices
const computerChoice = computerPlay();
console.log(computerChoice);
console.log(playRound(playerChoice,computerChoice));
