import './App.css';
//componentes de react
import { LandingPage } from './pages/landingPage/landingPage';
import {NavBar} from './components/navBar/navBar'
import { HomePage } from './pages/homePage/homePage';
import { DetailPage } from './pages/detailPage/detailPage';
import { CrearPokemonPage } from './pages/crearPokemonPage/crearPokemonPage';
//dependecias
import { Route, Routes, useLocation } from "react-router-dom";

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addTypes } from './redux/Actions/actions';


function App() {
  //logica de las rutas
  const {pathname} = useLocation();
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(addTypes())
  }, [dispatch])

  return (
    <div className="App">
       {pathname !== '/' && <NavBar/>}
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/home' element={<HomePage/>}/>
        <Route path='/detail/:id' Component={DetailPage}/>
        <Route path='/create' Component={CrearPokemonPage}/>
      </Routes>
    </div>
  );
}

export default App;
