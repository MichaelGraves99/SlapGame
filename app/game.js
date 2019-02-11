let ryu = {
  health: 100,
  hits: 0,
  attacks: {
    Kick: 6,
    Punch: 3,
    Slap: 1
  },
  modifiers: {
    Fire: 3,
    Power: 1,
    Thunder: 2
  },
  mobility: 55,
  modDamageT: 0
}

function modDamageA(damage) {
  ryu.modDamageT += damage;
}

function action(baseDamage) {
  ryu.health -= (baseDamage + ryu.modDamageT);
  ryu.hits++;
  ryu.modDamageT = 0;
  if (ryu.health < 0) {
    ryu.health = 0;
  }
  update();
}

function update() {
  $('.progress-bar').css('width', ryu.health + '%').attr('aria-valuenow', ryu.health);
  document.getElementById('health').innerText = `${ryu.health}`
  document.getElementById('hits').innerText = `${ryu.hits}`
}

function drawButtons() {
  let attackBtns = '';
  let modifierBtns = '';
  let attacks = (Object.keys(ryu.attacks));
  let attackDamage = (Object.values(ryu.attacks));
  let modifiers = (Object.keys(ryu.modifiers));
  let modDamage = (Object.values(ryu.modifiers));
  console.log(attacks);
  console.log(attackDamage);
  console.log(modifiers);
  console.log(modDamage);
  for (let a = 0; a < attacks.length; a++) {
    attackBtns += `<button type="button" class="btn btn-lg btn-danger mx-2" onclick="action(${attackDamage[a]})">${attacks[a]}</button>`
    modifierBtns += `<button type="button" class="btn btn-lg btn-success mx-2" onclick="modDamageA(${modDamage[a]})">${modifiers[a]}</button>`
  }
  document.getElementById('attackButtons').innerHTML = attackBtns;
  document.getElementById('modifierButtons').innerHTML = modifierBtns;
}

update();
drawButtons();