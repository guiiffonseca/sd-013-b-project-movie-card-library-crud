import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Redirect } from 'react-router';
import { Loading, MovieForm } from '../components';
import * as movieAPI from '../services/movieAPI';

export default class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 'loading',
      shouldRedirect: false,
      movie: { },
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.updateMovie();
  }

  async handleSubmit(updatedMovie) {
    await movieAPI.updateMovie(updatedMovie);
    this.setState({
      shouldRedirect: true,
    });
  }

  updateMovie = async () => {
    const { match: { params: { id } } } = this.props;
    const data = await movieAPI.getMovie(id);
    this.setState({
      status: '',
      movie: data,
    });
  }

  render() {
    const { status, shouldRedirect, movie } = this.state;
    if (shouldRedirect) {
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

EditMovie.propTypes = ({
  match: PropTypes.objectOf(PropTypes.string).isRequired,
});
