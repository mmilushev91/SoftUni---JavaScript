function solve(arr) {
  class Song {
    constructor(typelist, name, time) {
      this.typelist = typelist;
      this.name = name;
      this.time = time;
    }
  }
  const lastIndex = arr.length - 1;
  const songsArr = arr.slice(1, lastIndex);
  const inputType = arr[lastIndex];
  const songTypes = { all: [] };
  let logKey = "all";

  for (const songInfo of songsArr) {
    const [type, name, time] = songInfo.split("_");
    const song = new Song(type, name, time);

    if (!songTypes[type]) {
      songTypes[type] = [];
    }

    songTypes[type].push(song);
    songTypes.all.push(song);
  }

  if (inputType !== logKey) {
    logKey = inputType;
  }

  for (const song of songTypes[logKey]) {
    console.log(song.name);
  }
}

solve([
  3,
  "favourite_DownTown_3:14",
  "favourite_Kiss_4:16",
  "favourite_Smooth Criminal_4:01",
  "favourite",
]);

solve([
  4,
  "favourite_DownTown_3:14",
  "listenLater_Andalouse_3:24",
  "favourite_In To The Night_3:58",
  "favourite_Live It Up_3:48",
  "listenLater",
]);

solve([2, "like_Replay_3:15", "ban_Photoshop_3:48", "all"]);
