import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import './App.css';

import MovieList from './pages/MovieList';
import MovieDetails from './pages/MovieDetails';
import NewMovie from './pages/NewMovie';
import EditMovie from './pages/EditMovie';
import NotFound from './pages/NotFound';

class App extends React.Component {
  render() {
    return (
      <Router>
        <header>
          <h1>Movie Card Library CRUD</h1>
        </header>

        <Switch>

          <Route exact path="/" component={ MovieList } />
          <Route path="/movies/new" component={ NewMovie } />
          <Route path="/movies/:id/edit" component={ EditMovie } />
          <Route path="/movies/:id" component={ MovieDetails } />

          {/* ref para criar essa rota https://ultimatecourses.com/blog/react-router-not-found-component */}
          <Route component={ NotFound } />

        </Switch>
        <Link to="/movies/new"> ADICIONAR CARTÃO </Link>
      </Router>
    );
  }
}

export default App;
