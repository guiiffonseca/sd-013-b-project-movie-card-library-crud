import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';import './App.css';
import MovieList from './pages/MovieList';
import MovieDetails from './pages/MovieDetails';
import NewMovie from './pages/NewMovie';
import EditMovie from './pages/EditMovie';
import NotFound from './pages/NotFound';

function App() {
  return (
 <BrowserRouter>
    <div>Movie Card Library CRUD</div>
    <Route exact path="/" component={ MovieList } />
    <Route path="/movies/:id" component={ MovieDetails } />
    <Route path="/movies/new" component={ NewMovie } />
    <Route path="/movies/:id/edit" component={ EditMovie } />
    <Route exact path="/" component={ MovieList } /> 
    <Route component={ NotFound } />
  </BrowserRouter>
  );
}

export default App;
