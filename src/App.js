
import './App.css';
import React from 'react';
import Row from "./Row";
import requests from './Request';
import Banner from './Banner';
import Nav from './Nav';


function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <Row
        title="NETFLIX ORIGNALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated ++" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Romantic Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Horrer Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Documentry Movies" fetchUrl={requests.fetchDocumantaries} />



    </div>
  );
}

export default App;
