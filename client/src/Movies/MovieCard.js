import React, { useEffect, useState } from 'react';

const MovieCard = props => {
  const {movie} = props
  const [title, getTitle] = useState([]);

  useEffect(() => {
    let id = props.match.params.id;
props.movie.find((movie)=>{
  getTitle (movie.id === id)
})}

  , [])
  
  return ;
};

export default MovieCard;
