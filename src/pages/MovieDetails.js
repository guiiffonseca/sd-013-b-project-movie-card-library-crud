import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Loading } from '../components';
import * as movieAPI from '../services/movieAPI';

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      movie: {},
    };
  }

  async componentDidMount() {
    this.fetchApi();
  }

fetchApi = async () => {
  const { match } = this.props;
  const { params } = match;
  const { id } = params;
  const movie = await movieAPI.getMovie(id);
  this.setState({
    movie,
    loading: false,
  });
};

render() {
  const { movie, loading } = this.state;
  const { title, storyline, imagePath, genre, rating, subtitle, id } = movie;

  if (loading) {
    return <Loading />;
  }
  const delet = () => { movieAPI.deleteMovie(id); };

  return (
    <div data-testid="movie-details">
      <img alt="Movie Cover" src={ `../${imagePath}` } />
      <h2>{`title: ${title}`}</h2>
      <p>{ `Subtitle: ${subtitle}` }</p>
      <p>{ `Storyline: ${storyline}` }</p>
      <p>{ `Genre: ${genre}` }</p>
      <p>{ `Rating: ${rating}` }</p>
      <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
      <Link to="/">VOLTAR</Link>
      <Link to="/" onClick={ delet }>DELETAR</Link>
    </div>
  );
}
}
MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};
export default MovieDetails;
