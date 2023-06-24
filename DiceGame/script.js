
var ranndomNumber1 = Math.floor(Math.random() * 6) + 1; // 1 - 6


var randomDiceImg = "dice" + ranndomNumber1 + ".png"; //  dice 1.png - dice 6.png

var randomImgSource = "images/" + randomDiceImg; //images/dice1.png - imagesdice.6png

var image1 = document.querySelectorAll("img")[0]

image1.setAttribute("src", randomImgSource)


var ranndomNumber2 = Math.floor(Math.random() * 6) + 1; // 1 - 6

var randomImgSource2 = "images/dice" + ranndomNumber2 + ".png"; //images/dice1.png - imagesdice.6png

 document.querySelectorAll("img")[1].setAttribute("src", randomImgSource2)


if (ranndomNumber1 > ranndomNumber2) {
    document.querySelector("h1").innerText = " 🏆 player 1 Wins!"
}
if (ranndomNumber2 > ranndomNumber1) {
    document.querySelector("h1").innerText = "player 2 Wins!  🏆 "
}
if (ranndomNumber1 === ranndomNumber2) {
document.querySelector("h1").innerText = "It's a Draw!"
}