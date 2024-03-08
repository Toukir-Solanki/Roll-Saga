"use strict";

//---------------Selecting the Elements-------------
const player_0 = document.querySelector(".player--0");
const player_1 = document.querySelector(".player--1");
const player_0_score = document.getElementById("score--0");
const player_1_score = document.getElementById("score--1");
const dice_img = document.querySelector(".dice");
const btn_new = document.querySelector(".btn--new");
const btn_roll = document.querySelector(".btn--roll");
const btn_hold = document.querySelector(".btn--hold");

//---------------Starting Conditions-----------------
function toggle_player() {
  [player_0, player_1].forEach((element) => {
    element.classList.toggle("player--active");
  });
}

//---------------Starting Conditions-----------------
player_0_score.textContent = 0;
player_1_score.textContent = 0;
dice_img.classList.add("hidden");

//---------------Rolling Dice Functionality-------------
btn_roll.addEventListener("click", function () {
  //1. Generating a random dise roll
  const dice_random_number = Math.trunc(Math.random() * 6 + 1);
  //2. display dice
  dice_img.classList.remove("hidden");
  dice_img.src = `DICE/dice-${dice_random_number}.png`;
  //3. Check for rolled 1 : if ture,switch player
  if (dice_random_number == 1) {
    toggle_player();
  }
});
