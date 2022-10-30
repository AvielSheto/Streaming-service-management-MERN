import React, { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react';

function AllMovies() {
    const [movies, setMovies] = useState()

  const MOVIES_URL = 'http://localhost:5000/api/movies';

  const getMovies = async () => {
    const { data } = await axios.get(MOVIES_URL);
    setMovies(data)
  }

  useEffect(() => {
    getMovies()
  }, [])
  // console.log(movies);
    return (
        <div className=''>
            <div className='row'>
                <h1 className='display-1 my-3'>Top show</h1>
                {movies && movies.map((movie) => {
                    return (
                        <div key={movie._id} className='col-6 col-md-3'>

                            <h1 className='display-5'>{movie.name}</h1>
                            <h1 className='display-6'>{movie.premiered}</h1>
                            <p>{movie.genres}</p>
                            <img src={movie.image} alt="show" />
                        </div>
                    )
                })}
            </div>
        </div>)
}

export default AllMovies