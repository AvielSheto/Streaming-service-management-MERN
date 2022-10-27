import React, { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react';

function Movies() {
  const [movies, setMovies] = useState()

  const MOVIES_URL = 'http://localhost:5000/api/movies';

  const getMovies = async () => {
    const { data } = await axios.get(MOVIES_URL);
    setMovies(data)
  }

  useEffect(() => {
    getMovies()
  }, [])
  console.log(movies);

  return (
    <div>Movies</div>
  )
}

export default Movies