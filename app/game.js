let ken = {
  health: 120,
  hits: 0,
  attacks: {
    kick: 20,
    punch: 15,
    uppercut: 30,
    hadouken: 40
  },
  mobility: 35,
  items: []
}

let ryu = {
  health: 100,
  hits: 0,
  attacks: {
    kick: 15,
    punch: 10,
    uppercut: 25,
    hadouken: 60
  },
  mobility: 55,
  items: []
}

let items = {
  fire: {
    name: 'Fire',
    modifier: 4,
    description: 'IT BURNS!'
  },
  ice: {
    name: 'Hammer',
    modifier: 2,
    description: 'Ouch!!'
  },
  thunder: {
    name: 'Thunder',
    modifier: 3,
    description: 'Its so LOUD!!'
  }
}

function giveItem() {
  ryu.items.push(items.fire)

}

function addMods() {
  let modTotal = 0;
  for (let i = 0; i < ryu.items.length; i++) {
    modTotal += ryu.items[i].modifier
  }
  return modTotal;
}




function slap() {
  ryu.health -= (1 + addMods());
  ryu.hits++
  update();
}
function punch() {
  ryu.health -= (5 + addMods());
  ryu.hits++
  update();
}
function kick() {
  ryu.health -= (10 + addMods());
  ryu.hits++
  update();
}

function update() {
  document.getElementById('health').innerText = `${ryu.health}`
  document.getElementById('hits').innerText = `${ryu.hits}`

}





update();