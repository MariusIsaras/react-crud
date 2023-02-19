import React from 'react'
import Plants   from '../../../server/db.json'
import './plants.css'
// import box from '../components/box'
import { Box, Typography, CardContent, Card, CardActions, Button, CardMedia } from '@mui/material'
import Kortele from 'components/Kortele'

const PlantsPage = () => {
    // console.log(Plants)
  return (
    <div>
        <div className='plants-body'>
        <Kortele/>
        <Kortele/>
        <Kortele/>
        <Kortele/>
        <Kortele/>
        <Kortele/>
    </div>
    </div>
  )
}

export default PlantsPage