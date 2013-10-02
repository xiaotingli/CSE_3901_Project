function updateBoard(node, player) {
  var marker = node.value;
  var color = node.style.backgroundColor;

  if (Number(player) === 0) {
    marker = 'X';
    color = 'gray';
  } else if (Number(player) === 1) {
    marker = 'O';
    color = 'red';
  }
  
  node.value += marker;
  node.style.backgroundColor = color;
}

function userTurn(node) {
	playerTurn = 1;
	updateBoard(node, playerTurn);
	checkWin();
	}

function computerTurn()
{
}

function checkWin()
{
	if(b00.style.backgroundColor === b01.style.backgroundColor === b02.style.backgroundColor === 'red')
		{
		turn.InnerHTML = 'PLAYER WINS!'
		}
}

var turn = document.getElementById('turn');
var node = null;
var playerTurn = 0;
var gameOver = false;
while (gameOver === false) {
  // switch players
  playerTurn = (playerTurn + 1) % 2;

  // output which player's turn it is
  turn.innerHTML = 'Player ' + player + ', it is your turn.';
  
  if (player === 0) {
    // make computer's move
	turn.innerHTML = 'The Computer is thinking.';
	setTimeout(computerTurn(), 2);
	
  } else if (player === 1) {
    // wait for user's move
    userTurn();
  }

  node = null;

  //test all winning cases
}
