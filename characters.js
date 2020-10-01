class Characters{
  constructor (name, hp, mana, dmg, status, roundplayed, armor){
    this.name = name;
    this.hp = hp;
    this.mana = mana;
    this.dmg = dmg;
    this.status = status;
    this.roundplayed = roundplayed;
    this.armor = armor;
  }

  takeDamage =(dmg, armor) => {
    console.log(`${this.name} reçoit ${dmg/armor} points de dégats`)
    this.hp -= dmg/armor;
    if (this.hp < 1) {
      console.log(`${this.name} est KO`);
      this.status = "loser";
  };
};

  dealDamage =(victim) => {
    if (victim.hp<1){
      this.mana +=20;
      console.log(`${this.name} reçoit 20 points de mana bonus`)
    };
  };

  played = () => {
    this.roundplayed = true;
  }
}
