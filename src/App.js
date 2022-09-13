import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './View/Home';
import Footer from './components/Footer/Footer';
import NavScrollExample from './components/Navbar/NavbarO'
import {PersonApp} from './View/Personajes/PersonApp';
import {PlanetApp} from './View/Planetas/PlanetApp';
import DetailsPerson from './View/DetallePersonaje/DetailsPerson';
import { DetailsPlanet } from './View/DetallePlaneta/DetailsPlanet';

function App() {
  return (
    <>
    <NavScrollExample/>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="personajes" element={<PersonApp />}/>
      <Route path="/detailsperson/:detalle/:per" element={<DetailsPerson />}/>
      <Route path="/detailsplanet/:detalle/:per" element={<DetailsPlanet />}/>
      <Route path="planetas" element={<PlanetApp />}/>
    </Routes>
    <Footer/>
    </>      
  );
}

export default App;
