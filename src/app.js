/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
// write your code here
window.onload = function() {
  let randomMid = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "K",
    "Q",
    "A"
  ];
  // randomMid.forEach(item => console.log(item));
  let randomMidIndex = Math.floor(Math.random() * randomMid.length);
  let midPart = randomMid[randomMidIndex];

  // suit.forEach(item => console.log(item));
  let suit = ["♦", "♥", "♠", "♣"];
  let randSuitIndex = Math.floor(Math.random() * suit.length);
  let suitPart = suit[randSuitIndex];

  if (suitPart == "♦" || suitPart == "♥") {
    document.querySelectorAll(".suit-color").forEach(item => {
      item.style.color = "red";
    });
  }

  document.getElementById("suitTop").innerHTML = suitPart;
  document.getElementById("suitBot").innerHTML = suitPart;
  document.getElementById("midFace").innerHTML = midPart;
};
