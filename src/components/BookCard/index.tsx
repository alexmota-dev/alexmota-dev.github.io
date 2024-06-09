import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

export default function BookCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        {/* <CardMedia
          component="img"
          height="300"
          image="https://cdn.rickriordan.com/wp-content/uploads/2016/03/11223943/1368051472-215x300.png"
          alt="green iguana"
        /> */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center'
          }}>
          <img
            src='https://cdn.rickriordan.com/wp-content/uploads/2016/03/11223943/1368051472-215x300.png' 
            style={{
              objectFit: 'cover',
            }}>
          </img>
        </div>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Book Percy Jackson [Title]
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Book Percy Jackson [Paragraph]
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
    </Card>
  )
}
