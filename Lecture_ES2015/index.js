class Fighter {
  constructor(name='fighter', power=1, health=100) {
    this.name = name;
    this.power = power;
    this.health = health;
  }
  
  setDemage(demage) {
    this.health -= demage;
    console.log(`${this.name} health: ${this.health}`);
  }
  
  hit(enemy, point) {
    let demage = point * this.power;
    enemy.setDemage(demage);
  }
}

class ImprovedFighter extends Fighter {
  doubleHit(enemy,point) {
    super.hit(enemy,point * 2);
  }
}

let fighter = new Fighter('Ganryu', 2);
let ultimateFighter = new ImprovedFighter('King', 2);


let fight = (first, second, ...points) => {
  while(first.health && second.health && points.length) {
    first.hit(second, points.shift());
    second.hit(first, points.shift());
  }
}

fight(fighter, ultimateFighter, 10, 10, 15, 12, 19);