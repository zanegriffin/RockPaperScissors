//choice options for the game
const choices = ["Lapis", "Papyrus", "Scalpellus"];

//game players
let player = {
  choice: null,
  points: 0
};
let opponent = {
  choice: null,
  points: 0
};


//computers choice process
function computerChoice (){
  const randomChoice = Math.floor(Math.random() * choices.length);
  console.log(randomChoice); 
  opponent.choice = choices[randomChoice];
}

//how match is decided
function compareChoice(){
  computerChoice();
  switch (true) {
      //player chooses rock
  case (player.choice === choices[0] && opponent.choice === choices[1]):
    display("Player chose " + player.choice + " and Computer chose " + opponent.choice + ". Papyrus beats Lapis. You lose!");
     
    break;
  case (player.choice === choices[0] && opponent.choice === choices[2]):
    display("Player chose " + player.choice + " and Computer chose " + opponent.choice + ". Lapis beats Scalpellus. You win!");
      
    break;
  case (player.choice === choices[0] && opponent.choice === choices[0]):
    display("Player chose " + player.choice + " and Computer chose " + opponent.choice + ". It's a tie!");
    break;
      //player chooses paper
  case (player.choice === choices[1] && opponent.choice === choices[1]):
    display("Player chose " + player.choice + " and Computer chose " + opponent.choice + ". It's a tie!");
    break;
  case (player.choice === choices[1] && opponent.choice === choices[2]):
    display("Player chose " + player.choice + " and Computer chose " + opponent.choice + ". Scapellus beats Papyrus. You lose!");
     
    break;
  case (player.choice === choices[1] && opponent.choice === choices[0]):
    display("Player chose " + player.choice + " and Computer chose " + opponent.choice + ". Papyrus beats Lapis. You win!");
      
    break;
      //player chooses scissors
  case (player.choice === choices[2] && opponent.choice === choices[1]):
    display("Player chose " + player.choice + " and Computer chose " + opponent.choice + ". Scalpellus beats Papyrus. You win!");
     
    break;
  case (player.choice === choices[2] && opponent.choice === choices[2]):
    display("Player chose " + player.choice + " and Computer chose " + opponent.choice + ". It's a tie!");
    break;
  case (player.choice === choices[2] && opponent.choice === choices[0]):
    display("Player chose " + player.choice + " and Computer chose " + opponent.choice + ". Lapis beats Scalpellus. You lose!");
      
    break;
  default:
    display("Your move.")
    break;
  }
}

//how player choice is determined
function rock(){
  player.choice = choices[0];
  compareChoice();
}
function paper(){
  player.choice = choices[1];
  compareChoice();
}
function scissors(){
  player.choice = choices[2];
  compareChoice();
}
document.getElementById('rock').addEventListener('click', rock);
document.getElementById('paper').addEventListener('click', paper);
document.getElementById('scissors').addEventListener('click', scissors);




//connection to html; displays result
function display(result){
  let resultArr = document.querySelector('#results');
  let finalResult = document.createElement('li');
  finalResult.setAttribute('id', 'display')
  finalResult.innerText = result;
  resultArr.appendChild(finalResult); 
}

//reset; get rid of text

function deleteText(){
  let text = document.getElementById('display');
  text.remove();
  player.points = 0;
  opponent.points = 0;
}
document.getElementById('reset').addEventListener('click', deleteText);

