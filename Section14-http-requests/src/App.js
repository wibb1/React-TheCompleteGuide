import React, { useState, useEffect, useCallback } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // const fetchMoviesHandler = () => {
  //   fetch("https://swapi.dev//api/films/", {})
  //     .then((response) => {
  //       console.log(response.ok)
  //       if (!response.ok) throw new Error(response.status);
  //       else {
  //       return response.json()}
  //     })
  //     .then((data) => {

  //         const transformedMovies = data.results.map((movie) => {
  //           return {
  //             id: movie.episode_id,
  //             title: movie.title,
  //             openingText: movie.opening_crawl,
  //             releaseDate: movie.release_date,
  //           };
  //         });
  //         return setMovies(transformedMovies);
  //       }
  //     )

  //     .catch((err) => console.error(err));
  // };

  const fetchMoviesHandler = useCallback(async () => {
    setIsLoading(true);
    const response = await fetch("https://swapi.dev//api/films/", {});
    try {
      console.log(response.ok);
      if (!response.ok) throw new Error(response.status);

      const data = await response.json();

      const transformedMovies = data.results.map((movie) => {
        return {
          id: movie.episode_id,
          title: movie.title,
          openingText: movie.opening_crawl,
          releaseDate: movie.release_date,
        };
      });
      setMovies(transformedMovies);
    } catch (err) {
      console.error(err);
      setError(`Type ${err.message} error received from fetch call`);
    }
    setIsLoading(false);
  }, []);

  const content = () => {
    if (isLoading) {
      return <p>Loading...</p>;
    } else if (error) {
      return <p>{error}</p>;
    } else if (movies.length <= 0) {
      return <p>No movies found.</p>;
    } else if (movies.length > 0) {
      return <MoviesList movies={movies} />;
    } else {
      return <p></p>;
    }
  };

  useEffect(() => {
    fetchMoviesHandler();
  }, [fetchMoviesHandler]);

  // const dummyMovies = [
  //   {
  //     id: 1,
  //     title: 'Some Dummy Movie',
  //     openingText: 'This is the opening text of the movie',
  //     releaseDate: '2021-05-18',
  //   },
  //   {
  //     id: 2,
  //     title: 'Some Dummy Movie 2',
  //     openingText: 'This is the second opening text of the movie',
  //     releaseDate: '2021-05-19',
  //   },
  // ];

  // return (
  //   <React.Fragment>
  //     <section>
  //       <button onClick={fetchMoviesHandler}>Fetch Movies</button>
  //     </section>
  //     <section>
  //       {!isLoading && movies.length > 0 && <MoviesList movies={movies} />}
  //       {!isLoading && !error && movies.length <= 0 && <p>No movies found.</p>}
  //       {isLoading && <p>Loading...</p>}
  //       {!isLoading && error && <p>{error}</p>}
  //     </section>
  //   </React.Fragment>
  // );
  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>{content()}</section>
    </React.Fragment>
  );
}

export default App;
