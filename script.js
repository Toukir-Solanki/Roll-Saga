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
const player_0_current = document.getElementById("current--0");
const player_1_current = document.getElementById("current--1");

//---------------Starting Conditions-----------------
player_0_score.textContent = 0;
player_1_score.textContent = 0;
const big_score = [0, 0];
let alpha_current_score = 0;
let active_player = 0;

//---------------Reloading the whole game-----------------
btn_new.addEventListener("click", () => {
  location.reload();
});

//---------------Player won the game funcion-----------------
function player_won_badass_way() {
  document
    .querySelector(`.player--${active_player}`)
    .classList.add("player--winner");
  document
    .querySelector(`.player--${active_player}`)
    .classList.remove("player--active");
  btn_hold.classList.add("hidden");
  btn_roll.classList.add("hidden");
  dice_img.classList.add("hidden");
}

//---------------HOLD Button Functionality-----------------
btn_hold.addEventListener("click", function () {
  big_score[active_player] += alpha_current_score;
  document.getElementById(`score--${active_player}`).textContent =
    big_score[active_player];
  if (big_score[active_player] >= 100) {
    player_won_badass_way();
  }
  toggle_player();
});

//---------------Switching the player-----------------

function toggle_player() {
  [player_0, player_1].forEach((element) => {
    element.classList.toggle("player--active");
  });
  alpha_current_score = 0;
  document.getElementById(`current--${active_player}`).textContent = 0;
  active_player = active_player === 0 ? 1 : 0;
}

//---------------Rolling Dice Functionality-------------
btn_roll.addEventListener("click", function () {
  dice_img.classList.remove("hidden");
  const dice_random_number = Math.trunc(Math.random() * 6 + 1);
  dice_img.src = `DICE/dice-${dice_random_number}.png`;
  if (dice_random_number !== 1) {
    alpha_current_score = alpha_current_score + dice_random_number;
    document.getElementById(`current--${active_player}`).textContent =
      alpha_current_score;
  } else {
    toggle_player();
  }
});
