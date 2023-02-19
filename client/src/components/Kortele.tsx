import React from 'react'
import { Box, Typography, CardContent, Card, CardActions, Button, CardMedia } from '@mui/material'


const Kortele = () => {
  return (
    <div>
        <Box width='300px'>
        <Card>
            <CardMedia 
              component='img'
              height='200px'
              image='http://source.unsplash.com/random'
              alt='unsplash image'
            />
            <CardContent>
                <Typography gutterBottom variant='h5' component='div'>React</Typography>
                <Typography variant='body2' color='text.secondary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste pariatur ipsam totam. Voluptates voluptatem est, quia ipsum atque magni dolore amet adipisci vel repellendus ut vitae nulla pariatur ad perferendis!
                </Typography>
            </CardContent>
            <CardActions>
                <Button size='small' >Share</Button>
                <Button size='small' >learn more</Button>
            </CardActions>
        </Card>
        </Box>
    </div>
  )
}

export default Kortele