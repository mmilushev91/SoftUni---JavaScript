function solve(data) {
  function movieExists(name, movies) {
      for (const obj of movies) {
        
        if (obj.name === name) {
          return obj;
        }
    }
    return false;
  }
  const restCommands = {
    "directedBy": "director",
    "onDate": "date",
  }
  const movies = [];
  
  for (const line of data) {
    
    if (line.startsWith("addMovie")) {
      const [command, ...movie] = line.split(" ");
      const movieObj = {name: movie.join(" ")};
      movies.push(movieObj);
      
    } else {
      
      const lineArr = line.split(" ");
      const command = lineArr.includes("directedBy") ? "directedBy" : "onDate";
      const commandStartIndex = lineArr.indexOf(command);
      const movie = lineArr.slice(0, commandStartIndex).join(" ");
      const info = lineArr.slice(commandStartIndex + 1).join(" ");
      const movieObj = movieExists(movie, movies);
      
      if (!movieObj) {
        continue;
      }

      movieObj[restCommands[command]] = info;

    }
  }
  
  for (const obj of movies) {
    
    if (obj.name && obj.director && obj.date) {
      const jsonObj = JSON.stringify(obj);
      console.log(jsonObj);
    }
  }
}
