import axios from 'axios';
// url to make request to the movie database
const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3"
})

export default instance;



// {movies.map(movie => (<img src={`${base_url}${movie.poster_path}`} alt={movie.name} />)

// )}