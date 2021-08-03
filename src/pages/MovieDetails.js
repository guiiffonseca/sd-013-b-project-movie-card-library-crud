import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      movie: {},
    };

    this.delete = this.delete.bind(this);
  }

  componentDidMount() {
    this.fetchAPI();
  }

  async fetchAPI() {
    const { match: { params } } = this.props;
    const { id } = params;
    this.setState({ loading: true });
    const data = await movieAPI.getMovie(id);
    this.setState(
      {
        loading: false,
        movie: data,
      },
    );
  }

  delete() {
    const { match: { params } } = this.props;
    const { id } = params;
    movieAPI.deleteMovie(id);
  }

  render() {
    const { movie, loading } = this.state;
    const { id, title, storyline, imagePath, genre, rating, subtitle } = movie;

    if (loading === true) return <Loading />;

    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{ `title: ${title}` }</p>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <Link to="/">VOLTAR</Link>
        <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
        <Link to="/" onClick={ this.delete }>DELETAR</Link>
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default MovieDetails;
