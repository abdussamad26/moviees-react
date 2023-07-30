import React from 'react'
import { useState, useEffect } from 'react';
import './Movie.css';
import Axios from 'axios';
import MovieCards from './MovieCards'
import { GiPopcorn } from 'react-icons/gi';



const Movie = () => {
    const [movies, setMovies] = useState([]);
    const [query, setQuery] = useState('batman');
    const [search, setSearch] = useState("");

    useEffect(() => {
        fetchMovie(query);
    }, [query]);

    const fetchMovie = async (searchQuery) => {
        const url = `http://www.omdbapi.com/?s=${query}&apikey=8e258249`;

        const response = await fetch(url);
        const responseJSON = await response.json();

        if (responseJSON["Search"] != undefined) {
            setMovies(responseJSON["Search"]);
        }
    }

    const updateSearch = event => {
        setSearch(event.target.value);
        // console.log(search);
    }
    const getSearch = event => {
        event.preventDefault();
        setQuery(search);
        setSearch("");
    }

    return (
        <div>
            <section className='text-white'>
                <div className="container-fluid py-5">
                    <h1 className='webflix' style={{fontSize:"100px"}}>WEBFl<GiPopcorn className='popcorn-icon text-danger' />X</h1>
                </div>
                
                <div className="container-fluid pb-5">
                    <div className="row">
                        <div className="col-lg-12">
                            <div class="box">
                                <form onSubmit={getSearch} name="search">
                                    <input onChange={updateSearch} type="text" class="input" name="txt" onmouseout="this.value = ''; this.blur();" />
                                </form>
                                

                            </div>
                        </div>
                    </div>
                </div>

            </section>
            <section>
                <div className="container-fluid">
                    <div className="row">
                        <div className="movies col-lg-12 d-flex flex-wrap justify-content-center">
                            {movies.map((movie) => (
                                <MovieCards
                                    key={movie.id}

                                    Poster={movie.Poster}
                                    Title={movie.Title}
                                    Year={movie.Year}
                                    Type={movie.Type}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>


        </div>
    )
}

export default Movie