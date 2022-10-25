import React, { useState, useEffect } from "react";
import axios from './axios';
import './Row.css';
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

const base_url = "http://image.tmdb.org/t/p/original/";
function Row({ title, fetchUrl, isLargeRow }) {
    const [movies, SetMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("")
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            SetMovies(request.data.results);
            return request;
        }
        fetchData()
    }, [fetchUrl]);

    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
        },
    };

    const handleClick = (movie) => {
        console.log('hi')
        if (trailerUrl) {
            setTrailerUrl("");

        } else {
            movieTrailer(movie?.name || "")
                .then((url) => {
                    // const urlParams = new URLSearchParams(new URL(url).search);
                    const urlParams = new URLSearchParams(new URL(url).search)
                    console.log(urlParams.get("v"))
                    console.log(url)
                    console.log(new URL(url).search)


                    // console.log(urlParams.get('v'))
                    setTrailerUrl(urlParams.get("v"))

                })
                .catch((error) => console.log(error))
            // console.log('no')
        }
    };
    return (
        <div className="row">
            <h2>{title}</h2>
            <div className="row__posters">
                {
                    movies.map(movie => (
                        <img
                            onClick={() => handleClick(movie)}
                            key={movie.id}
                            className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                            src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path
                                }`} alt={movie.name}
                        />)


                    )
                }

            </div>
            {/* <YouTube videoId='XtMThy8QKqU' opts={opts} /> */}
            {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
        </div >
    );
}

export default Row;
