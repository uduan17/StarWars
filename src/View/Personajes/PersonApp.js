import React, { useEffect} from 'react';
import { usePeople } from '../../Hooks/usePeople';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


export const PersonApp = () => {

  const {getAllPerson, dataPeople} =  usePeople();

  useEffect(()=>{

    getAllPerson();

    console.log(dataPeople);

  }, [])
  return (
    <div>
    <div className='text-center'><h1>LOS PERSONAJES</h1></div> 
    <div className='d-flex flex-wrap ' >
      {dataPeople.map((people) => (
         <div className='card d-flex'>
         <Card style={{ width: '18rem'}}>
           {/* <Card.Img variant="top" src={image} /> */}
           <div className='bg-success text-light'>
           <Card.Body>
             <Card.Title></Card.Title>
             <Card.Text>
              <strong>Name:</strong>{people.name} <br></br>
              <strong>Altura:</strong>{people.height}
             </Card.Text>
             <Button  className='m-auto' variant="dark">Ver mas...</Button>
           </Card.Body>
           </div>
         </Card>
      </div>
        // <div className='card' key={people.birth_year}>
        //   <h1> {people.name} </h1>
        //   <p> {people.height} </p>
        // </div>
        
      ))}
    </div>
    </div>
  )
}