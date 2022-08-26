import React from 'react'
import { useState } from 'react';

export const usePeople = () => {
    const [page, setPage] = useState(1)
    const [person, setPerson] = useState([])


    const anterior = () => {
      if (page <= 1) {
        setPage(1);
       
      } else {
        setPage(page - 1);
      }
    };
    const siguiente = () => {
      if(page >=9){ 
      }
      else{
        setPage(page + 1);
      }
  
    };
  

    const getAllPerson= () =>{   
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };
          fetch(`https://swapi.dev/api/people/?page=${page}`, requestOptions)
            .then(response => response.json())
            .then(result => setPerson(result.results))
            .catch(error => console.log('error', error));
    }
    
    return{
        getAllPerson, page, person,siguiente,
        anterior,
    }
}
