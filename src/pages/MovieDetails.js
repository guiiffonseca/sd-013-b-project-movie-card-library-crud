import React, { Component } from 'react';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  render() {
    componentDidMount() {
      movieAPI.getMovies().then((response) => response).then((movies) => {
        this.setState({ loading: false, movies });
      });
    }

    const { title, storyline, imagePath, genre, rating, subtitle } = {};

    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <h4>{`Title: ${title}`}</h4>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
      </div>
    );
  }
}

export default MovieDetails;
