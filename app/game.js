let health = 100;
let targetName = "dude";
let hits = 0;

function slap() {
  health--;
  hits++
  update();
}
function punch() {
  health -= 5;
  hits++
  update();
}
function kick() {
  health -= 10;
  hits++
  update();
}

function update() {
  document.getElementById('health').innerText = `${health}`
  document.getElementById('hits').innerText = `${hits}`

}





update();