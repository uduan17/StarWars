import React, { useEffect } from "react";
import { Button, NavLink } from "react-bootstrap";
import { usePeople } from "../../Hooks/usePeople";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";
import '../DetallePersonaje/style.css'
import Personaje from '../../components/Imagen/Personaje.jpg'



export const DetailsPerson = () => {

  const {getAllPerson, person} = usePeople();


  const params = useParams();
  const listParams = [params];

  const mapeo = listParams.map((list) => list.detalle);
  // const mapeo2 = listParams.map((list) => list.per);

  var nombre = mapeo[0];
  // var numero = mapeo2[0];


  useEffect(() => {

    getAllPerson();

  }, []);


  const buscar = person.filter((inFilter) => inFilter.name === nombre);

  return (
    <div>
       <Link  to="/personajes" >
      <Button className="btn-warning shadow mt-5 ms-5">
         <AiOutlineArrowLeft size={30} to="/personajes"/>  Volver 
      </Button> 
      </Link>
      <h1 className="text-center bg-white mb-5 mt-3">Details Person</h1>
      <center>
      <div className="center">
      <div className="contemedor flex-wrap">
        <div className="card mb-4 shadow bg-success flex-wrap">
        <div className="ms-4 text-white"><h3 className="card-title">{nombre}</h3></div>
            <center>
              <img src={Personaje} className="image mt-2" alt="General"/>
              </center>
              <div className="card-body text-white">
                {buscar.map((people) => (
                  <div key={people.name}  className='row ms-4' >  
                  <hr className="text-white"></hr>    
                  <div className="col-md-6">                                 
                      <p><b>Año de nacimiento:</b> {people.birth_year}</p>
                      <p><b>Altura:</b> {people.height} cm</p>
                      <p><b>Peso:</b> {people.mass} kg</p>
                      <p><b>Genero:</b> {people.gender}</p>                                    
                      <p><b>Color de piel:</b> {people.skin_color}</p>
                      </div>
                      <div className="col-md-6">
                      <p><b>Color de ojos:</b> {people.eye_color}</p>
                      <p><b>Color de cabello:</b> {people.hair_color}</p>
                      <p><b>Editado:</b> {people.edited}</p>
                      <p><b>Creado:</b> {people.created}</p>
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


export default DetailsPerson