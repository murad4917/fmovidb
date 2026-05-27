import React, { useState, useEffect } from "react";
import styles from "./DisplayRow.module.css";
import SlideShow from "./../SlideShow/SlideShow";
import MovieInstance from "../../Utility/MovieInstance";
import requests from "../../Utility/request_url";

function DisplayRow() {
  const [movies, setMovies] = useState({
    trading: [],
    netflixOriginals: [],
    topRatedMovies: [],
    actionMovies: [],
    comedyMovies: [],
    horrorMovies: [],
    romanceMovies: [],
    documentaries: [],
  });
  useEffect(() => {
    fetchMovies();
  }, []);
  const fetchMovies = async () => {
    try {
      const [
        trendingResponse,
        netflixOriginalsResponse,
        topRatedMoviesResponse,
        actionMoviesResponse,
        comedyMoviesResponse,
        horrorMoviesResponse,
        romanceMoviesResponse,
        documentariesResponse,
      ] = await Promise.all([
        MovieInstance.get(requests.fetchTrending),
        MovieInstance.get(requests.fetchNetflixOriginals),
        MovieInstance.get(requests.fetchTopRatedMovies),
        MovieInstance.get(requests.fetchActionMovies),
        MovieInstance.get(requests.fetchComedyMovies),
        MovieInstance.get(requests.fetchHorrorMovies),
        MovieInstance.get(requests.fetchRomanceMovies),
        MovieInstance.get(requests.fetchDocumentaries),
      ]);
      setMovies({
        trading: trendingResponse.data.results,
        netflixOriginals: netflixOriginalsResponse.data.results,
        topRatedMovies: topRatedMoviesResponse.data.results,
        actionMovies: actionMoviesResponse.data.results,
        comedyMovies: comedyMoviesResponse.data.results,
        horrorMovies: horrorMoviesResponse.data.results,
        romanceMovies: romanceMoviesResponse.data.results,
        documentaries: documentariesResponse.data.results,
      });
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  return (
    <div className={styles.mainWrapper}>
      <SlideShow
        title="Movies suggested for you"
        movies={movies.romanceMovies}
      />
      <SlideShow title="popular on Netflix" movies={movies.netflixOriginals} />
      <SlideShow title="Trending Now" movies={movies.trading} />
      <SlideShow title="Top Rated" movies={movies.topRatedMovies} />
      <SlideShow title="Action Movies" movies={movies.actionMovies} />
      <SlideShow title="Comedy Movies" movies={movies.comedyMovies} />
      <SlideShow title="Horror Movies" movies={movies.horrorMovies} />
      <SlideShow title="Documentaries" movies={movies.documentaries} />
    </div>
  );
}

export default DisplayRow;
