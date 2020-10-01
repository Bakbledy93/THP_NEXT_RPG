class Fighter extends Characters{
  constructor (name, hp = 12, mana = 40 , dmg = 4 , status="playing", roundplayed = false, armor = 1){
    super(name, hp, mana, dmg, status, roundplayed, armor)
  };

  special = (victim) => {
    let attackname = "Dark Vision"
    console.log(`${this.name} lance ${attackname}`)
    victim.hp -= (5/victim.armor);
    console.log(`${victim.name} reçoit 5 points de dégats`)
    this.mana -= 20;
    console.log(`${this.name} consomme 20 points de mana`)
    return attackname
  };

}