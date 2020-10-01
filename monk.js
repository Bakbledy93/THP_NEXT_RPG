class Monk extends Characters{
  constructor (name, hp = 8, mana = 200 , dmg = 2 , status="playing", roundplayed = false, armor = 1){
    super(name, hp, mana, dmg, status, roundplayed, armor)
  };

  special = () =>{
    let attackname = "Healing";
    console.log(`${this.name} lance ${attackname}`)
    console.log(`${this.name} gagne 8 points de vie`)
    this.mana -= 25;
    console.log(`${this.name} consomme 25 points de mana`)
    this.hp += 8;
    return attackname
  };
}