class Paladin extends Characters{
  constructor (name, hp = 13, mana = 160 , dmg = 3 , status="playing", roundplayed = false, armor =1, lastturn = false){
    super(name, hp, mana, dmg, status, roundplayed, armor, lastturn)
  };

  special = (victim) => {
    let attackname = "Healing Lightning";
    console.log(`${this.name} lance ${attackname}`)
    victim.hp -= (4/victim.armor);
    console.log(`${victim.name} reçoit 4 points de dégats`)
    this.mana -= 60;
    console.log(`${this.name} consomme 40 points de mana`)
    this.hp += 3;
    return attackname
  };
}