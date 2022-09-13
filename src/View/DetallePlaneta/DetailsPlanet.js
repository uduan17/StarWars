import React, { useEffect } from "react";
import { Button, NavLink } from "react-bootstrap";
import { usePlanet } from "../../Hooks/usePlanet";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";
import '../DetallePersonaje/style.css'
import klk from '../../components/Imagen/klk.jpg'



export const DetailsPlanet = () => {

  const {getAllPlanet, dataPlanet} = usePlanet();


  const params = useParams();
  const listParams = [params];

  const mapeo = listParams.map((list) => list.detalle);
 

  var nombre = mapeo[0];
  


  useEffect(() => {

    getAllPlanet();

  }, []);


  const buscar = dataPlanet.filter((inFilter) => inFilter.name === nombre);

  return (
    <div>
       <Link  to="/planetas" >
      <Button className="btn-warning shadow mt-5 ms-5">
         <AiOutlineArrowLeft size={30} />  Volver 
      </Button> 
      </Link>
      <h1 className="text-center bg-white mb-5 mt-3">Details planet</h1>
      <center>
      <div className="center">
      <div className="contemedor flex-wrap">
        <div className="card mb-4 shadow bg-success flex-wrap">
        <div className="ms-4 text-white"><h3 className="card-title">{nombre}</h3></div>
            <center>
              <img src={klk} className="image mt-2" alt="General"/>
              </center>
              <div className="card-body text-white">
                {buscar.map((planet) => (
                  <div key={planet.name}  className='row ms-4' >  
                  <hr className="text-white"></hr>    
                  <div className="col-md-6">                                 
                        <strong>Periodo orbital: </strong>{planet.orbital_period}<br></br>
                        <strong>Periodo de rotacion: </strong>{planet.rotation_period}<br></br>
                        <strong>Diámetro: </strong>{planet.diameter}<br></br>
                        <strong>Gravedad: </strong>{planet.gravity}<br></br>
                        <strong>Poblacion: </strong>{planet.population}<br></br>
                        <strong>Superficie del agua: </strong>{planet.surface_water}
                      </div>
                      <div className="col-md-6">
                      <strong>Terreno: </strong>{planet.terrain}<br></br>
                      <strong>Clima: </strong>{planet.climate}<br></br>
                      <strong>Editado: </strong>{planet.edited} <br></br>
                      <strong>Creado: </strong>{planet.created} <br></br>
                      </div>
                    </div>                 
                ))}
              </div>
          </div>
      </div>
    </div>
    </center>
    </div>
  );
};
