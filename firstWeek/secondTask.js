const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('', (firstLine) => {
  rl.question('', (secondLine) => {
    rl.question('', (thirdLine) => {
        const [a, b] = firstLine.split(':').map(Number);
        const [c, d] = secondLine.split(':').map(Number);
        console.log(checkGoals([a, b], [c, d], thirdLine));
        rl.close()
    });
  });
});

function checkGoals(firstGame, secondGame, position){
    let team1, team2;
    if (position == 1) {
      team1 = [firstGame[0] + secondGame[0], secondGame[0]];
      team2 = [firstGame[1] + secondGame[1], firstGame[1]];
    } else {
      team1 = [firstGame[0] + secondGame[0], firstGame[0]];
      team2 = [firstGame[1] + secondGame[1], secondGame[1]];
    }

    let neededGoalsForFirstTeam = 0;
    let toWinByTotal = 0;
    let toWinByAwayGoals = 0;
  
    if (team1[0] > team2[0]) {
      // do nothing
    } else if (team1[0] === team2[0]) {
      if (team1[1] > team2[1]) {
        // do nothing
      } else {
        toWinByTotal = 1;
        toWinByAwayGoals = 1;
      }
    } else if (team1[0] < team2[0]) {
      toWinByTotal = team2[0] - team1[0] + 1;
      if (position == 1) {
        if (team1[1] >= team2[1]) {
          toWinByAwayGoals = toWinByTotal - 1;
        } else if (team1[1] < team2[1]) {
          toWinByAwayGoals = Math.max(team2[1] - team1[1] + 1, toWinByTotal - 1);
        }
      } else {
        if (team1[1] <= team2[1]) {
          toWinByAwayGoals = toWinByTotal;
        } else if (team1[1] > team2[1]) {
          toWinByAwayGoals = toWinByTotal - 1;
        }
      }
    }
    neededGoalsForFirstTeam = Math.min(toWinByTotal, toWinByAwayGoals);
  
    return neededGoalsForFirstTeam;
}