class Game {
  constructor(turnleft = 10, currentturn = 0, players =[]){
    this.turnleft = turnleft;
    this.currentturn = currentturn;
    this.players = players;
  };

  skipTurn = () => {
    this.turnleft -= 1;
    this.currentturn += 1;
  };

  roundVerification = () =>{
    let roundedVerification = this.players.filter(player => player.roundplayed == false && player.hp > 0);
    return roundedVerification
  };

  pickPlayer =()=>{
    let randomplayer = this.roundVerification()[Math.floor(Math.random()*this.roundVerification().length)]
    return randomplayer
  };

  watchStats = () => {
    console.log(`-----Stats du tour-----`);
    this.players.map(function(player) {
      if (player.hp > 0) {
      console.log(`${player.name} est ${player.constructor.name} et a ${player.hp} pv, ${player.dmg} points d'attaque, ${player.mana} de mana, et ${player.armor} d'armure`);
      }
      else {
        console.log(`${player.name} est KO`);
      };
    })
  }

  roundPlayed = () =>{
    this.players.filter(player => player.roundplayed = false);
  }

  attackChoice = () => {
    let choice = ["A", "B"];
    let randomchoice = choice[Math.floor(Math.random()*choice.length)];
    return randomchoice
  }
  
  checkinLastTurn =() =>{
    let check = this.players.filter(player=> player.lastturn == true && player.hp > 0)
    return check
  }

  startTurn = () => {
    console.log(`-----C'est le tour ${this.currentturn}-----`);
    let check = this.checkinLastTurn();
    if (check.length > 0) {
      let fighterarmor = check[0];
      fighterarmor.armor = fighterarmor.armor*2
      fighterarmor.lastturn = false
    };
    console.log(`-----Début du tour-----`);
    this.watchStats();
    while (this.roundVerification().length > 0) {
      let round = this.roundVerification();
      let player = this.pickPlayer();
      player.roundplayed = true;
      console.log(`-------------------------`);
      console.log(`C'est au tour de ${player.name} qui est ${player.constructor.name} de jouer`);
      let victims = this.players.filter(victim => victim.hp > 0 && victim !== player);
      let randomvictim = victims[Math.floor(Math.random()*victims.length)]
      let choice = this.attackChoice();
      if (choice == "B" && player.mana > 0){
        player.special(randomvictim);
      }
      else {
        console.log(`${player.name} attaque ${randomvictim.name}`);
        randomvictim.takeDamage(player.dmg, randomvictim.armor);
      };
      player.dealDamage(randomvictim);
    }
    if (check.length > 0) {
      let fighterarmor = check[0];
      fighterarmor.armor = 1
    }
    this.watchStats();
    this.roundPlayed();
    console.log(`-----Fin du tour-----`);
  };

  winner = () =>{
    let playersArray = this.players
    let maxhp = Math.max(...playersArray.map(function(player){return player.hp}));
    let winner = playersArray.filter(
      player=>{
      if (player.hp == maxhp){
        player.status = "winner"
        return player;
      }
      }
    );
    return winner
  }

  octogon =() => {
    this.playersCreation();
    while(this.turnleft > 0 && this.roundVerification().length > 1 ) {
      this.skipTurn();
      this.startTurn();
    };
    const winner = this.winner();
    console.log(`${winner[0].name} finit Top 1 du battle royal c'est le ${winner[0].status}`)
  }

  playersCreation = () => {
    let player1 = new Fighter("Gloria");
    let player2 = new Paladin("Ulder");
    let player3 = new Monk("Moana");
    let player4 = new Berzerker("Draven");
    let player5 = new Assassin("Carl");
    this.players.push(player1, player2, player3, player4, player5);
  };
  
};


let game = new Game
game.octogon();