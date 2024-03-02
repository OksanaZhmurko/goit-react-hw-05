import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const MoviesDetailsPage = () => {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchMovDet = async () => {
        try {
            const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}`, {
                headers: {
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzOWNhYWY0NzdmOWZhNjk4ZGUxOWMwNWNiMzBkZGYwZiIsInN1YiI6IjY1ZTJjMDg0Yzk5ODI2MDE0ODYwNDQwYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.IuNMdC-EeZb27g9018eMla7cSx0hOHOgdX6afBPOrZE'
                }
            })
            setMovie(response.data)
        } catch(error) {
            console.error(error)
        }
    }
    fetchMovDet()
  }, [movieId])

  if(!movie) {
    return <div>Loading...</div>
  }

  return <div>
    <h1>{movie.title}</h1>
    <p>{movie.overview}</p>
  </div>;
};

export default MoviesDetailsPage;
