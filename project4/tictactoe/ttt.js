function updateBoard(node, player) {
  var marker = node.innerHTML;
  var color = node.style.backgroundColor;

  if (player === 0) {
    marker = 'X';
    color = 'gray';
  } else if (player === 1) {
    marker = 'O';
    color = 'red';
  }
  node.innerHTML = marker;
  node.style.backgroundColor = color;
}

function userTurn(node) {
}


var turn = document.getElementById('turn');
var node = null;
var player = 0;
var gameOver = false;
while (gameOver === false) {
  // switch players
  player = (player + 1) % 2;

  // output which player's turn it is
  turn.innerHTML = 'Player ' + player + ', it is your turn.';
  
  if (player === 0) {
    // make computer's move
  } else if (player === 1) {
    // wait for user's move
    userTurn();
  }

  updateBoard(node, player);
  node = null;

  //test all winning cases
}
