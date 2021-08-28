import React, { Component } from 'react';
import Loading from '../components/Loading';
import MovieCard from '../components/MovieCard';

import { getMovies } from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      loading: true,
    };
  }

  getMovieApi = async () => {
    const moviesApi = await getMovies();
    this.setState({ loading: false, movies: moviesApi });
  }

  componentDidMount = () => {
    this.getMovieApi();
  }

  render() {
    const { movies, loading } = this.state;

    // Render Loading here if the request is still happening
    if (loading) return <Loading />;

    return (
      <div data-testid="movie-list">
        {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
      </div>
    );
  }
}

export default MovieList;
