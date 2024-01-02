class Movie {
  //a) Write a constructor for the class Movie, which takes a String representing the title of the movie, a String representing the studio, and a String representing the rating as its arguments, and sets the respective class properties to these values.

  //b) The constructor for the class Movie will set the class property rating to "PG" as default when no rating is provided.
  constructor(title, studio, rating = "PG") {
    this.title = title;
    this.studio = studio;
    this.rating = rating;
  }

  //c) Write a method getPG, which takes an array of base type Movie as its argument, and returns a new array of only those movies in the input array with a rating of "PG". You may assume the input array is full of Movie instances. The returned array need not be full.
  static getPG(movies) {
    let pgMovies = [];
    for (let movie of movies) {
      if (movie.rating === "PG") {
        pgMovies.push(movie);
      }
    }

    return pgMovies;
  }
}

//d)  Write a piece of code that creates an instance of the class Movie with the title “Casino Royale”, the studio “Eon Productions”, and the rating “PG­13”
const casinoMovie = new Movie("Casino Royale", "Eon Productions", "PG");
console.log(casinoMovie);

// Using the getPG method below
// const pg = Movie.getPG([
//   { title: "Jailer", studio: "Lyca", rating: "U/A" },
//   { title: "Vikram", studio: "RK film studios", rating: "PG" },
//   { title: "Thupakki", studio: "AGS", rating: "U" },
//   { title: "Ratchasan", studio: "Greenwood", rating: "PG" },
// ]);
// console.log(pg);
