class Assassin extends Characters{
  constructor (name, hp = 6, mana = 20 , dmg = 6 , status="playing", roundplayed = false, armor = 1){
    super(name, hp, mana, dmg, status, roundplayed, armor = 1)
  };

  special = (victim) =>{
    let attackname =" Shadow Hit";
    console.log(`${this.name} lance ${attackname}`)
    victim.hp -= (7/victim.armor);
    console.log(`${victim.name} reçoit 7 points de dégats`)
    if (victim.hp > 0){
      this.hp -=7
      console.log(`${this.name} perds 7 points de vie`)
    };
    this.mana -= 20;
    console.log(`${this.name} consomme 20 points de mana`)
    return attackname
  };
};