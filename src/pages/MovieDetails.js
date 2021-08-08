import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();

    this.state = {
      movie: [],
      exibir: 'carregando',
    };
    this.requisitId = this.requisitId.bind(this);
  }

  async componentDidMount() {
    this.requisitId();
  }

  async requisitId() {
    const { match: { params: id } } = this.props;
    const respons = await movieAPI.getMovie(id.id);
    this.setState({
      movie: respons,
      exibir: 'carregado',
    });
  }

  render() {
    // Change the condition to check the state
    // if (true) return <Loading />;
    const { movie: { id, title, storyline, imagePath, genre, rating,
      subtitle } } = this.state;
    const { exibir } = this.state;
    if (exibir === 'carregando') {
      return <Loading />;
    }

    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <h1>{`Título: ${title}`}</h1>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <div className="link">
          <Link to="/">VOLTAR</Link>
          <Link to={ `/movies/${id}/edit ` }>EDITAR</Link>
        </div>
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.oneOfType([PropTypes.object])
    .isRequired,
};

export default MovieDetails;
