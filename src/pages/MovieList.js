import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.renderMovies = this.renderMovies.bind(this);
    this.fetchMovies = this.fetchMovies.bind(this);

    this.state = {
      movies: [],
      loading: false,
    };
  }

  async fetchMovies() {
    this.setState(
      { loading: true },
      async () => {
        const movies = await movieAPI.getMovies();
        this.setState({
          movies,
          loading: false,
        });
      },
    );
  }

  renderMovies() {
    const { movies } = this.state;

    return (
      <div data-testid="movie-list">
        {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
        <Link to="/movies/new">Adicionar Cartão</Link>
      </div>
    );
  }

  render() {
    const { loading } = this.state;

    return (
      loading ? <Loading /> : renderMovies()
    );
  }
}

export default MovieList;
