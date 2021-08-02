import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router';

import { Loading, MovieForm } from '../components';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 'loading',
      shouldRedirect: false,
      movie: [],
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.fetchUpdatedMovie = this.fetchUpdatedMovie.bind(this);
  }

  componentDidMount() {
    this.fetchUpdatedMovie();
  }

  handleSubmit(updatedMovie) {
    const updateMovie = movieAPI.updateMovie(updatedMovie);
    this.setState({
      movie: updateMovie,
      shouldRedirect: true,
    });
  }

  async fetchUpdatedMovie() {
    const { match } = this.props;
    const getMovie = await movieAPI.getMovie(match.params.id);
    this.setState({
      status: '',
      movie: getMovie,
    });
  }

  render() {
    const { status, shouldRedirect, movie } = this.state;
    if (shouldRedirect) {
      // Redirect
      return <Redirect to="/" />;
    }

    if (status === 'loading') {
      return <Loading />;
    }

    return (
      <div data-testid="edit-movie">
        <MovieForm movie={ movie } onSubmit={ this.handleSubmit } />
      </div>
    );
  }
}

EditMovie.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default EditMovie;
