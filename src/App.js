import axios from 'axios';
import React, { useEffect } from 'react';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Authtentication from './Components/Authtentication';
import BookingTicket from './Components/BookingTicket';
import HomePage from './Components/HomePage';
import MovieDetails from './Components/MovieDetails';
import { BASE_URL } from './constant';
import { DataState } from './context/Provider';
import SearchBar from './miniComponents/SearchBar';


function App() {
  const {user,setUser,selectedMovie,setSelectedmovie,tickets,setTickets,movies,setMovies}=DataState();
  useEffect(()=>{
    getData()
  },[])
  let getData = async()=>{
    let respon = await axios.get(`${BASE_URL}movies`)
    setMovies(respon.data)
  }
  return <>
  <Router>
    <Routes>
      <Route path='/' element={<Authtentication/>}/>
      <Route path='/home' element={<HomePage/>}/>
      <Route path='/details/:id' element={<MovieDetails/>}/>
      <Route path='/search' element={<SearchBar/>}/>
      <Route path='/booking' element={<BookingTicket/>}/>
    </Routes>
  </Router>
  </>
}

export default App;
