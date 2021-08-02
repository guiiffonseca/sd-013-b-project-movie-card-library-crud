import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import MovieList from './pages/MovieList';
import MovieDetails from './pages/MovieDetails';
import NotFound from './pages/NotFound';
import NewMovie from './pages/NewMovie';
import EditMovie from './pages/EditMovie';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Route exact path="/" component={ MovieList } />
        <Route exact path="/movies/:id" component={ MovieDetails } />
        <Route exact path="/movies/new" component={ NewMovie } />
        <Route exact path="/movies/:id/edit" component={ EditMovie } />
        <Route path="*" component={ NotFound } />
      </BrowserRouter>
    </div>
  );
}

export default App;
