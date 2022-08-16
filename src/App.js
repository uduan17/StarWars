import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './View/Home';
import NavScrollExample from './components/Navbar/NavbarO'
import {PersonApp} from './View/Personajes/PersonApp';
import {PlanetApp} from './View/Planetas/PlanetApp';

function App() {
  return (
    <>
      <NavScrollExample />
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="personajes" element={<PersonApp />}/>
      <Route path="planetas" element={<PlanetApp />}/>
    </Routes>

    </>      
  );
}

export default App;
