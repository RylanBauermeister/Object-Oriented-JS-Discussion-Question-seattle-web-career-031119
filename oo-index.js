class Unicorn {
  constructor(name, occupation) {
    this.name = name;
    this.occupation = occupation;
    this.health = 1000

    this.eventArea = document.getElementById('event_area')
    this.imageArea = document.getElementById('image_area')
  }

  restart() {
    while (this.eventArea.hasChildNodes()) {
        this.eventArea.removeChild(this.eventArea.lastChild);
    }
    var div = document.createElement("div");
    div.appendChild(document.createTextNode("Out on the street, ready to go!"));
    this.eventArea.prepend(div);
    this.imageArea.className = 'new';
  }

  attack() {
    var div = document.createElement("div");
    div.appendChild(document.createTextNode("'ATTAAAAAAAAAK!''"));
    this.eventArea.prepend(div);
    this.imageArea.className = 'attack';
  }

  defend() {
    var div = document.createElement("div");
    div.appendChild(document.createTextNode("You put sunglasses on."));
    this.eventArea.prepend(div);
    this.imageArea.className = 'defend';
  }

  heal() {
    var div = document.createElement("div");
    div.appendChild(document.createTextNode("You feel refreshed after yoga."));
    this.eventArea.prepend(div);
    this.imageArea.className = 'heal';
  }

  breakdance() {
    var div = document.createElement("div");
    div.appendChild(document.createTextNode("It's really spinning class"));
    this.eventArea.prepend(div);
    this.imageArea.className = 'breakdance';
  }

  eatCronut() {
    var div = document.createElement("div");
    div.appendChild(document.createTextNode("You've gained 1000 health points."));
    this.health += 1000
    this.updateHealth()
    this.eventArea.prepend(div);
    this.imageArea.className = 'eat';
  }

  updateHealth() {
    const health = document.getElementById('health')
    health.textContent = this.health
  }

}

function setFeatured(unicorn){
  const nameH = document.getElementById('name')
  nameH.textContent = unicorn.name

  const titleH = document.getElementById('occupation')
  titleH.textContent = unicorn.occupation

  const health = document.getElementById('health')
  health.textContent = unicorn.health
}


const CHARLES_LE_CROIX = new Unicorn("Charles Le Croix", "Fuckin' beast")
function main(){
  this.restartButton = document.getElementById('restart').addEventListener("click",()=> CHARLES_LE_CROIX.restart())
  this.attackButton = document.getElementById('attack').addEventListener("click",()=> CHARLES_LE_CROIX.attack())
  this.defendButton = document.getElementById('defend').addEventListener("click",()=> CHARLES_LE_CROIX.defend())
  this.healButton = document.getElementById('heal').addEventListener("click",()=> CHARLES_LE_CROIX.heal())
  this.breakdanceButton = document.getElementById('breakdance').addEventListener("click",()=> CHARLES_LE_CROIX.breakdance())
  this.eatButton = document.getElementById('eat').addEventListener("click",()=> CHARLES_LE_CROIX.eatCronut())
  setFeatured(CHARLES_LE_CROIX)
  CHARLES_LE_CROIX.restart();
}

document.addEventListener('DOMContentLoaded', main)
