import { useState } from 'react';

export const usePlanet = () => {
    const [page, setPage] = useState(1)
    const [dataPlanet, setDataPlanet] = useState([])


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

    const getAllPlanet= () =>{   
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };     
          fetch(`https://swapi.dev/api/planets/?page=${page}`, requestOptions)
            .then(response => response.json())
            .then(result => setDataPlanet(result.results))
            .catch(error => console.log('error', error));
    }

    return{
        getAllPlanet, dataPlanet, siguiente, anterior, page
    }

}
