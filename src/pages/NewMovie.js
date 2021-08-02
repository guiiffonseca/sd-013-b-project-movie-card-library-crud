import React, { Component } from 'react';
import { Redirect } from 'react-router';

import MovieForm from '../components/MovieForm';
import * as movieAPI from '../services/movieAPI';

class NewMovie extends Component {
  constructor(props) {
    super(props);

    this.state = {
      redirect: false,
    };
  }

  handleSubmit = async (newMovie) => {
    await movieAPI.createMovie(newMovie);
    this.setState({ redirect: true });
  }

  render() {
    const { redirect } = this.state;
    return (
      <div data-testid="new-movie">
        {redirect ? <Redirect to="/" />
          : <MovieForm onSubmit={ this.handleSubmit } />}
      </div>
    );
  }
}
export default NewMovie;
