import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      loading: true,
    };
  }

  componentDidMount() {
    this.fetchMovies();
  }

  fetchMovies = async () => {
    const data = await movieAPI.getMovies();
    if (data) {
      this.setState({ movies: data, loading: false });
    }
  }

  render() {
    const { movies, loading } = this.state;

    // Render Loading here if the request is still happening
    if (loading === true) {
      return <Loading />;
    }

    return (
      <div data-testid="movie-list">
        {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
      </div>
    );
  }
}

export default MovieList;
