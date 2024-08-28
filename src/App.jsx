import './App.css';
import { useState,useEffect } from 'react';
import SearchIcon from './Components/search.svg';
import MovieCard from './Components/MovieCard';
//cea13de2
const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=cea13de2";

const App = () => {
  const [movies,setMovies] = useState([]);
  const [searchTerm,setSearchTerm] = useState('');
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
    console.log(response)
  }
  useEffect = (() => {
    searchMovies('SPIDERMAN');
  },[]);
  return (
    <div className="app">
        <h1>MovieMafia</h1>
        <div className='search'>
          <input 
            placeholder='search for movies'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <img 
            src={SearchIcon}
            alt="search"
            onClick={() => searchMovies(searchTerm)}
          />
        </div>      
        { movies?.length > 0
           ? (
            <div className='container'>
              {movies.map((movie) => (
                <MovieCard movie={movie} />
              ))}
           </div>
          ) : (
            <div className='empty'>
              <h2>No movies found</h2>
            </div>
          ) }
       
    </div>
  );
}

export default App;
