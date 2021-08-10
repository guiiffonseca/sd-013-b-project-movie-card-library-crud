// Initial Commit
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MovieList from './pages/MovieList';
import MovieDetails from './pages/MovieDetails';
import NewMovie from './pages/NewMovie';
import EditMovie from './pages/EditMovie';
import NotFound from './pages/NotFound';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/"
            component={ MovieList }
          />
          <Route
            exact
            path="/movies/new"
            component={ NewMovie }
          />
          <Route
            exact
            path="/movies/:id"
            render={ (props) => <MovieDetails { ...props } /> }
          />
          <Route
            exact
            path="/movies/:id/edit"
            render={ (props) => <EditMovie { ...props } /> }
          />
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
