import './App.css';
//componentes de react
import { LandingPage } from './components/landingPage/landingPage';
import {NavBar} from './components/navBar/navBar'
import { CardsPage } from './components/cardsPage/cardsPage';
import { DetailPage } from './components/detailPage/detailPage';
//dependecias
import { Route, Routes, useLocation } from "react-router-dom";
import { FormPage } from './components/formPage/formPage';
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
        <Route path='/home' element={<CardsPage/>}/>
        <Route path='/detail/:id' Component={DetailPage}/>
        <Route path='/create' Component={FormPage}/>
      </Routes>
    </div>
  );
}

export default App;
