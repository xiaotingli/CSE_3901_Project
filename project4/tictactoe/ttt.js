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

