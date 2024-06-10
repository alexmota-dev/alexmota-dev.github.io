import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import ShareIcon from '@mui/icons-material/Share';

interface BookCardProps {
  key: number,
  image: string,
  title: string,
  paragraph: string
}

export default function BookCard({ image, title, paragraph}: BookCardProps) {
  return (
    <Card sx={{ maxWidth: 310, margin:'1vw'}}>
      <CardActionArea>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center'
          }}>
          <img
            src={image} 
            alt={"Book-"+image?.toString()}
            style={{
              objectFit: 'cover',
            }}>
          </img>
        </div>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {paragraph}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions style={{
        display: 'flex',
        justifyContent: 'space-between',
      }}>
        <Button size="small" color="primary">
          <ShareIcon/>
        </Button>
        <Button size="small" color="primary"> 
          Adicionar ao carinho
        </Button>
        <Button size="small" color="primary"> 
          Comprar agora
        </Button>
      </CardActions>
    </Card>
  )
}
