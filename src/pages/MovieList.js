import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.carregafilmes = this.carregafilmes.bind(this);

    this.state = {
      movies: [],
      loading: true,
    };
  }

  componentDidMount() {
    this.carregafilmes();
  }

  async carregafilmes() {
    const movies = await movieAPI.getMovies();

    this.setState({
      movies,
      loading: false,
    });
  }

  render() {
    const { movies, loading } = this.state;
    const loadingElement = <span>Carregando...</span>;

    // Render Loading here if the request is still happening

    return (
      <main>
        <div data-testid="movie-list">
          {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
        </div>
        <p>{loading ? loadingElement : '' }</p>
      </main>
    );
  }
}

export default MovieList;
