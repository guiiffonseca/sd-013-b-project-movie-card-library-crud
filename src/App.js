import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import MovieList from './pages/MovieList';
import MovieDetails from './pages/MovieDetails';
import NewMovie from './pages/NewMovie';
import EditMovie from './pages/EditMovie';
import NotFound from './pages/NotFound';
import DeleteMovie from './pages/DeleteMovie';

function App() {
  return (
    <Router>
      <Switch>
        <Route
          exact
          path="/"
          component={ MovieList }
        />
        <Route exact path="/movies/new" render={ (props) => <NewMovie { ...props } /> } />
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
        <Route
          exact
          path="/movies/:id/delete"
          render={ (props) => <DeleteMovie { ...props } /> }
        />
        <Route path="/" component={ NotFound } />
      </Switch>
    </Router>
  );
}

export default App;
