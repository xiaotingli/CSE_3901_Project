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
	turn.innerHTML = 'The Computer is Thinking';
	setTimeout(function(){computerTurn()}, 2000);
	}

function computerTurn()
{
	playerTurn = 0;
	var compNode = 'b11';
	updateBoard(b11, playerTurn);
}

function checkWin()
{
	if(document.b00.style.backgroundColor === document.b01.style.backgroundColor === document.b02.style.backgroundColor === 'red')
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
  turn.innerHTML = 'Player ' + playerTurn + ', it is your turn.';
  
  if (player === 0) {
    // make computer's move
	turn.innerHTML = 'The Computer is thinking.';
	setTimeout(computerTurn(), 2000);
	
  } else if (player === 1) {
    // wait for user's move
	// We might want to implement somthing like this. http://stackoverflow.com/questions/2221836/how-can-i-make-a-program-wait-for-a-button-press-in-javascript
	// Or we just have the screen run based on when a user presses a button it reacts
	// rather than having a main function.  but idk
    userTurn();
  }

  node = null;

  //test all winning cases
}
