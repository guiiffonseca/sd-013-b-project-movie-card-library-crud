import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import MovieForm from '../components/MovieForm';
import { createMovie } from '../services/movieAPI';
// import * as movieAPI from '../services/movieAPI';

class NewMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(movie) {
    createMovie(movie);
    this.setState({ redirect: true });
  }

  render() {
    const { redirect } = this.state;
    return (
      <div data-testid="new-movie">
        {redirect && <Redirect to="/" />}
        <MovieForm onSubmit={ this.handleSubmit } />
      </div>
    );
  }
}
export default NewMovie;
