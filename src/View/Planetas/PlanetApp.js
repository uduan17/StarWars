import React, { useEffect} from 'react';
import { usePlanet } from '../../Hooks/usePlanet';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import '../Personajes/Person.css'
import {Link} from 'react-router-dom'
import lothal from '../../components/Imagen/Lothal.jpg'



export const PlanetApp = () => {
  const {getAllPlanet, dataPlanet, siguiente, anterior, page} =  usePlanet();

  useEffect(()=>{
    getAllPlanet();
    console.log(dataPlanet);
  }, [page])

  return (
    <div>
    <div className='text-center bg-white'><h1>All Planets</h1></div> 
    <div className='content d-flex flex-wrap'>

      {dataPlanet.map((planet) => (

         <div className='card mb-4'>
         <Card style={{ width: '15rem'}}>
           <div className='bg-dark text-light'>
           <Card.Img variant="top" src={lothal}/>
           <Card.Body>
             <Card.Title></Card.Title>
             <Card.Text>
              <strong>Nombre:</strong> {planet.name} <br></br>
              <strong>Periodo de orbital: </strong>{planet.orbital_period}<br></br>
              <strong>Periodo de rotacion: </strong>{planet.rotation_period}<br></br>
              <strong>Clima: </strong>{planet.climate}<br></br>
              <strong>Diámetro: </strong>{planet.diameter}<br></br>
              <strong>Gravedad: </strong>{planet.gravity}<br></br>
              <strong>Terreno: </strong>{planet.terrain}<br></br>
              <strong>Superficie del agua: </strong>{planet.surface_water}<br></br>
              <strong>Poblacion: </strong>{planet.population}
             </Card.Text>
             <Link className='nav-link text-light' to={`/detailsplanet/${planet.name}/${page}`}  href=""><Button variant="light">Ver mas...</Button></Link>
           </Card.Body>
           </div>
         </Card>
      </div>
      ))}
    </div>
     <div className='d-flex mb-4  justify-content-center ' >
     <Button className="page-link bg-warning text-dark p-2" onClick={anterior}>Anterior</Button>
       <h1 className="page-link p-3">{page}</h1>
     <Button className="page-link bg-warning text-dark p-2"  onClick={siguiente}>Siguiente</Button>
     </div>
    </div>
  )
}