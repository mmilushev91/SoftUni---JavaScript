function solve(band, album, song) {
  const songDuration = (album.length * band.length) * song.length / 2;
  const rotations = Math.ceil(songDuration / 2.5);
  
  console.log(`The plate was rotated ${rotations} times.`)
}
