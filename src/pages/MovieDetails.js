import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: {},
      loading: true,
    };
  }

  componentDidMount() {
    this.fetchFunction();
  }

  funcDelete = async () => {
    const { match: { params: { id } } } = this.props;
    await movieAPI.deleteMovie(id);
  };

  fetchFunction = async () => {
    const { match: { params: { id } } } = this.props;
    const obj = await movieAPI.getMovie(id);
    this.setState({
      movie: obj,
      loading: false,
      id,
    });
  }

  returnDiv = () => {
    const { movie, id } = this.state;
    const { title, storyline, imagePath, genre, rating, subtitle } = movie;
    return (
      <>
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{ `title: ${title}` }</p>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
        <Link to="/">VOLTAR</Link>
        <Link to="/" onClick={ this.funcDelete }>DELETAR</Link>
      </>
    );
  }

  render() {
    const { loading } = this.state;
    return (
      <div data-testid="movie-details">
        { loading ? <Loading /> : this.returnDiv() }
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.arrayOf(
    PropTypes.shape(
      {
        id: PropTypes.string.isRequired,
      },
    ),
  ).isRequired,
};

export default MovieDetails;
