import axios from "axios";
const MovieInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3"})
export default MovieInstance;

//'https://api.themoviedb.org/3/discover/movie?api_key=${import.meta.env.VITE_TMDB_API_KEY}&with_genres=28&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate'