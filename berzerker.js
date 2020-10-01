class Berzerker extends Characters{
  constructor (name, hp = 12, mana = 1 , dmg = 4 , status="playing", roundplayed = false, armor = 1, lastturn = false){
    super(name, hp, mana, dmg, status, roundplayed, armor, lastturn)
  };

  special = () =>{
    let attackname = "Rage";
    console.log(`${this.name} lance ${attackname}`)
    console.log(`${this.name} gagne 1 points d'attaque`)
    this.dmg += 2;
    this.hp -= 1;
    console.log(`${this.name} perds 1 points de vie`)
    return attackname
  };
};