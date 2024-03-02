import axios from 'axios';
import { useEffect, useState } from 'react';
import MoveList from '../../components/MoveList/MoveList';

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMov = async () => {
      try {
        const response = await axios.get('https://api.themoviedb.org/3/trending/movie/week', {
          headers: {
            Authorization:
              'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzOWNhYWY0NzdmOWZhNjk4ZGUxOWMwNWNiMzBkZGYwZiIsInN1YiI6IjY1ZTJjMDg0Yzk5ODI2MDE0ODYwNDQwYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.IuNMdC-EeZb27g9018eMla7cSx0hOHOgdX6afBPOrZE',
          },
        });
        setMovies(response.data.results);
      } catch (err) {
        console.error(err);
      }
    };
    fetchMov();
  }, []);
  return (
    <div>
      <h1>Trending Movies</h1>
      <MoveList movies={movies} />
    </div>
  );
};

export default HomePage;
