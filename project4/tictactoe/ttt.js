function changeBoard(node, player) {
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

var player = 0;
for (i = 0; i < 3; i++) {
  for (j = 0; j < 3; j++) {
    var id = 'b' + i + j;
    node = document.getElementById(id);
    changeBoard(node, player);
    player = (player + 1) % 2;
  }
}

var player = 0
var gameOver = false;
while (gameOver === false) {
  // switch players
  player = (player + 1) % 2;

  // output which person's turn it is
  
  if (player === 0) {
    // make computer's move
  } else if (player === 1) {
    // wait for user's move
  }

  //test all winning cases
}
