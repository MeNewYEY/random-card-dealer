//import 'breathecode-dom'; //DOM override to make JS easier to use
import "../style/index.css";

window.onload = function() {
  let suit = getSuit();
  if (suit == "&#9829") {
    document.querySelector(".first").style.color = "red";
    document.querySelector(".last").style.color = "red";
  }
  document.querySelector(".first").innerHTML = suit;
  document.querySelector(".second").innerHTML = getNumber();
  document.querySelector(".last").innerHTML = suit;
};

function getNumber() {
  let number = ["A", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
  let random = Math.floor(Math.random() * number.length);
  return number[random];
}

function getSuit() {
  let suits = ["&#9829", "&#9827", "&#9830"];
  let random = Math.floor(Math.random() * suits.length);
  return suits[random];
}
