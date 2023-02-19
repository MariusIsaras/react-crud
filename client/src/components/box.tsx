import React from 'react'
import axios from 'axios'
import {useEffect, useState} from 'react'

interface Plants {
    id: number;
    latin_name: string;
    lt_name: string;
  }

const box = () => {
    const [plants, setPlants] = useState<Plants[]>([]);
    useEffect(() => {
        axios.get<Plants[]>('http://localhost:3001/users')
          .then(response => setPlants(response.data))
          .catch(error => console.error(error));
      }, []);
  return (
    <div>
        {plants.map(plant => (
        <li key={plant.id}>
          {plant.latin_name} ({plant.lt_name})
        </li>
      ))}
    </div>
  )
}

export default box