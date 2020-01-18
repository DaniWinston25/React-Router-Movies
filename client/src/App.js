import React, { useState } from 'react';

import SavedList from './Movies/SavedList';

import { Route, Link } from 'react-router-dom';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';


const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

  return (
    <div>
      <SavedList list={savedList} />

  <Route exact path="/" component={MovieList}/>

      <Route path="/moives/:id"
      render={props => <Movie {...props}/>}/>
      
      <Link to ='/movie/${movie.id}'></Link>
    </div>
  );
};

export default App;
