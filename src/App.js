import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { MovieList, MovieDetails, NewMovie, EditMovie, NotFound } from './pages';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" render={ () => <MovieList /> } />
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
      <Route exact path="" render={ () => <NotFound /> } />
      <Route exact path="/movies/new" component={ NewMovie } />
    </BrowserRouter>
  );
}

export default App;
