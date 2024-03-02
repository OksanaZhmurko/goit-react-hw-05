import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const MoviesPage = () => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleChange = e => {
    setQuery(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    navigate({ pathname: '/movies', search: `query=${query}` });
    setQuery('');
  };

  return <div>
    <h1>Search Movies</h1>
    <form onSubmit={handleSubmit}>
        <input type="text" value={query} onChange={handleChange} name="" id="" />
        <button type='submit'>Search</button>
    </form>
  </div>;
};

export default MoviesPage;
