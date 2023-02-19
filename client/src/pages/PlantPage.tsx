import React from 'react'
import Plants   from '../../../server/db.json'
import './plants.css'
import box from '../components/box'
import { Box, Typography, CardContent, Card, CardActions, Button, CardMedia } from '@mui/material'
import Kortele from 'components/Kortele'



const PlantPage = () => {
    console.log(Plants)
  return (
    <div className='plants-body'>
        <Kortele/>
        <Kortele/>
    </div>
  )
}

export default PlantPage