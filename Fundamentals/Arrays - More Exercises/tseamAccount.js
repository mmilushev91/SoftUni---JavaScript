function solve(arr) {
  const ifGameExists = (game, gameList) => gameList.includes(game);
  const [games, ...commands] = arr;
  const gamesArr = games.split(" ");

  const operations = {
    Install: function (game, gamesList) {
      if (!ifGameExists(game, gamesList)) {
        gamesList.push(game);
      }
    },
    Uninstall: function (game, gamesList) {
      if (ifGameExists(game, gamesList)) {
        const gameIndex = gamesList.indexOf(game);
        gamesList.splice(gameIndex, 1);
      }
    },
    Update: function (game, gamesList) {
      if (ifGameExists(game, gamesList)) {
        const gameIndex = gamesList.indexOf(game);
        gamesList.push(gamesList.splice(gameIndex, 1));
      }
    },
    Expansion: function (game, gamesList) {
      const [name, exp] = game.split("-");
      if (ifGameExists(name, gamesList)) {
        const gameIndex = gamesList.indexOf(name);
        const gameWithExp = `${name}:${exp}`;
        gamesArr.splice(gameIndex + 1, 0, gameWithExp);
      }
    },
  };

  for (const item of commands) {
    if (item === "Play!") {
      break;
    }

    const [command, game] = item.split(" ");
    operations[command](game, gamesArr);
  }
  console.log(gamesArr.join(" "));
}

solve([
  "CS WoW Diablo",
  "Install LoL",
  "Uninstall WoW",
  "Update Diablo",
  "Expansion CS-Go",
  "Play!",
]);
