import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loadingState: true,
      movie: {},
    };
  }

  componentDidMount() {
    this.fetchMovie();
  }

  fetchMovie = async () => {
    const { match: { params } } = this.props;
    const movie = await movieAPI.getMovie(params.id);
    this.setState({
      movie,
      loadingState: false,
    });
  }

  render() {
    const { movie, loadingState } = this.state;
    const { title, storyline, imagePath, genre, rating, subtitle, id } = movie;

    if (loadingState) return <Loading />;

    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{ `Title: ${title}` }</p>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <Link to="/">VOLTAR</Link>
        <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default MovieDetails;
