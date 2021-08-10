import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';
import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: [],
      rendered: true,
    };
  }

  componentDidMount() {
    movieAPI.getMovies().then((response) => {
      this.setState({
        movies: response,
        rendered: false,
      });
    });
  }

  render() {
    const { movies, rendered } = this.state;

    if (rendered) return <Loading />;

    return (
      <div data-testid="movie-list">
        <Link to="/movies/new">ADICIONAR CARTÃO</Link>
        {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
      </div>
    );
  }
}

export default MovieList;
