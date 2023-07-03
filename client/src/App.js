import './App.css';
//componentes de react
import { LandingPage } from './components/landingPage/landingPage';
import {NavBar} from './components/navBar/navBar'
import { CardsPage } from './components/cardsPage/cardsPage';
//dependecias
import { Navigate, Route, Routes, useLocation, useNavigate } from "react-router-dom";


function App() {
  //logica de las rutas
  const {pathname} = useLocation();

  return (
    <div className="App">
       {pathname !== '/' && <NavBar/>}
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/home' element={<CardsPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
