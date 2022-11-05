const brokenButton = document.getElementById("button-broken");
const yesButton = document.getElementById("button-yes");
const pad = 6;



brokenButton.addEventListener("mouseover", function() {
  brokenButton.className = "free-broken";
  moveButton(brokenButton);
});

brokenButton.addEventListener("click", function() {
  brokenButton.className = "free-broken";
  moveButton(brokenButton);
});

yesButton.addEventListener("click", function() {
  window.alert("Escolha fácil né :) \n \nVamos ser felizes")
});


function moveButton(element) {
  let vw = window.innerWidth;
  let vh = window.innerHeight;

  let left = randomInt(pad, vw - 60);
  let top = randomInt(pad, vh - 40);

  element.style.left = left + "px";
  element.style.top = top + "px";
}

function randomInt(min, max) {
  if (max == null) { max = min; min = 0; }
  if (min > max) { var tmp = min; min = max; max = tmp; }
  return Math.floor(min + (max - min + 1) * Math.random());
}
