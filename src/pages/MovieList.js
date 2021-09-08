import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MovieCard from '../components/MovieCard';
import * as movieAPI from '../services/movieAPI';
import Loading from '../components/Loading';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      loading: true,
    };
    this.requireMovieList = this.reqMovieList.bind(this);
  }

  componentDidMount() {
    this.reqMovieList();
  }

  async reqMovieList() {
    const returnedMovies = await movieAPI.getMovies();
    this.setState({ movies: returnedMovies, loading: false });
  }

  render() {
    const { movies, loading } = this.state;

    return (
      <div data-testid="movie-list">
        {loading ? <Loading />
          : movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
        <Link to="/movies/new">ADICIONAR CARTÃO</Link>
      </div>);
  }
}

export default MovieList;
