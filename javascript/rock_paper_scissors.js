var playerOne = "Computer";
var playerTwo = "Brooke";

var weapons = ['rock' , 'paper', 'scissors'];

//var playerTwoWeapon = weapons[parseInt(Math.random()*weapons.length) %3];
//var playerOneWeapon = weapons[parseInt(Math.random()*weapons.length) %3];

var playerOneCount = 0
var playerTwoCount = 0

do {
  var playerTwoWeapon = weapons[parseInt(Math.random()*weapons.length) %3];
  var playerOneWeapon = weapons[parseInt(Math.random()*weapons.length) %3];
  if (playerOneWeapon=="rock")
    switch (playerTwoWeapon) {
      case "rock":
        console.log("tie!");
        break;
      case "paper":
        console.log(playerTwo + " wins!"); playerTwoCount += 1;
        break;
      case "scissors":
        console.log(playerOne + " wins!"); playerOneCount += 1;
        break;
    }
  else if (playerOneWeapon=="paper")
    switch (playerTwoWeapon) {
      case "rock":
        console.log(playerOne + " wins!"); playerOneCount += 1;
        break;
      case "paper":
        console.log("tie!");
        break;
      case "scissors":
        console.log(playerTwo + " wins!"); playerTwoCount += 1;
        break;
  }
  else if (playerOneWeapon=="scissors")
    switch (playerTwoWeapon) {
      case "rock":
        console.log(playerTwo + " wins!"); playerTwoCount += 1;
        break;
      case "paper":
        console.log(playerOne + " wins!"); playerOneCount += 1;
        break;
      case "scissors":
        console.log("tie!");
        break;
    }
  }

  while (playerOneCount <= 4 || playerTwoCount <= 4);

  console.log("Final Score! " + playerOne + ": " + playerOneCount +  " || " + playerTwo + ": " + playerTwoCount + ".");
