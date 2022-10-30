import React from 'react'
import AddMovie from './AddMovie'
import MovieCard from './MovieCard'

const MovieList = ({movies, search, rate, add}) => {
  return (
    <div>
   <AddMovie add={add}  />
    <div className='mov'>
    {movies.filter((el)=>el.rate>=rate && el.title.toLowerCase().includes(search)).map((movie)=> <MovieCard movie={movie}/>)}
    </div>
    </div>
  )
}

export default MovieList