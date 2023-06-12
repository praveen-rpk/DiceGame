const button = document.querySelector('button');
const player1Score = {
  wins: 0,
  draws: 0
};
const player2Score = {
  wins: 0,
  draws: 0
};

button.addEventListener('click', rollDice);

function rollDice() {
  var dicenum = Math.floor(Math.random() * 6) + 1;
  var passimage = "dice" + dicenum + ".png";
  var randomImage = "images/" + passimage;
  var player1 = document.querySelectorAll("img")[0];
  player1.setAttribute("src", randomImage);

  var dicenum2 = Math.floor(Math.random() * 6) + 1;
  var passimage2 = "dice" + dicenum2 + ".png";
  var randomImage2 = "images/" + passimage2;
  var player2 = document.querySelectorAll("img")[1];
  player2.setAttribute("src", randomImage2);


  if (dicenum > dicenum2) {
    document.querySelector("h1").innerHTML = "🚩Player1 wins";
    player1Score.wins++;
  } else if (dicenum < dicenum2) {
    document.querySelector("h1").innerHTML = " 🚩Player2 wins";
    player2Score.wins++;
  } else {
    document.querySelector("h1").innerHTML = " 🚩DRAWN 🚩";
    player1Score.draws++;
    player2Score.draws++;
  }
  updateScoreTable();
  button.textContent = "Roll Again";
}

function updateScoreTable()
{
  const player1Wins = document.querySelector('#player1-wins');
  const player1Draws = document.querySelector('#player1-draws');
  const player2Wins = document.querySelector('#player2-wins');
  const player2Draws = document.querySelector('#player2-draws');

  player1Wins.textContent = player1Score.wins;
  player1Draws.textContent = player1Score.draws;
  player2Wins.textContent = player2Score.wins;
  player2Draws.textContent = player2Score.draws;
}
