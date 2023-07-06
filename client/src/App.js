import './App.css';
//componentes de react
import { LandingPage } from './components/landingPage/landingPage';
import {NavBar} from './components/navBar/navBar'
import { CardsPage } from './components/cardsPage/cardsPage';
import { DetailPage } from './components/detailPage/detailPage';
//dependecias
import { Navigate, Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { FormPage } from './components/formPage/formPage';


function App() {
  //logica de las rutas
  const {pathname} = useLocation();

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
