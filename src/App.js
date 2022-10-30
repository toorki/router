import { Data } from './Data';
import './App.css';

import {useState} from 'react';
import NavBar from './Component/NavBar';
import { Route, Routes } from 'react-router-dom';
import Home from './Component/Home';
import MovieList from './Component/MovieList';
import Trailer from './Component/Trailer';

function App() {
  const [movie, setMovie]=useState(Data)
  const [search, setSearch]=useState("")
  const [rate, setRate]=useState(0)

  const add=(newMovie)=>{
    setMovie([...movie, newMovie])
  }
  const handleRate=(e)=>{
    setRate(e)
  }
  const handleSearch=(e)=>{
    setSearch(e.target.value)
  }
  return (
    <div className="App">
      <NavBar handleSearch={handleSearch} handleRate={handleRate}/>
     
     <Routes>
      <Route path='/'element={<Home/>}/>
      <Route path='/movielist'element={<MovieList movies={movie} search={search} rate={rate} add={add}/>}/>
      <Route path='/trailer/:id'element={<Trailer movies={Data}/>}/>
     </Routes>
    </div>
  );
}

export default App;
