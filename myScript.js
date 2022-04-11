var playerPoints = 0;
var computerPoints = 0;
function game(playerChoice){

    //const playerChoice = playerPlay();
    //make a verible for computer choices
    const computerChoice = computerPlay();
    //Repet game 5 times 
    let outcome = playRound(playerChoice,computerChoice);
    //Output the winner 
    results(outcome);     
    if (playerPoints == 5 || computerPoints == 5){end()};
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
    if (X == "Lose"){computerPoints++;}
    if (X == "Win"){playerPoints++;}
    return X +" the computer had "+ computerChoice +" you had "+ playerChoice;
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
/*  
function playerPlay(){

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
*/
const buttons = document.querySelector('#buttons');

  // buttons is a node list. It looks and acts much like an array.
const buttond = document.querySelectorAll('button');

  // we use the .forEach method to iterate through each button
buttond.forEach((button) => {
  
    // and for each one we add a 'click' listener
    button.addEventListener('click', () => {
      
      game(button.id);
    });
  });
  const result = document.querySelector('#result');
  const score = document.querySelector('#score');
  function results(outcome){
      //print out result 
      //Manipulating div
    //creating new element
    const content = document.createElement('h1');
    //adding the new element to class 
    content.classList.add('content');
    //adding text to element 
    content.textContent = outcome;
    //adding element to document 
    result.appendChild(content);
  }
  