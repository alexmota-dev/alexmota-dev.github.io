import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import ShareIcon from '@mui/icons-material/Share';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Book } from '../../services/types/Book';

interface BookCardProps {
  key: number,
  book: Book,
  handleDelete: (id: string) => void,
  handleUpdate: (id: string) => void
}

export default function BookCard({ book, handleDelete, handleUpdate}: BookCardProps) {

  return (
    <Card style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      width: '300px',
      height: '700px',
      margin:'1vw'
    }}>
      <CardActionArea>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center'
          }}>
          <img
            src={book.url} 
            width={300}
            height={450}
            alt={book.title}
            style={{
              objectFit: 'fill',
            }}>
          </img>
        </div>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {book.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {book.storyline}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions style={{
        display: 'flex',
        justifyContent: 'space-between',
      }}>
        <Button
          size="small"
          color="primary"
          onClick={() => handleUpdate(book.id)}>
          <EditIcon/>
        </Button>
        <Button size="small" color="primary"> 
          Adicionar ao carinho
        </Button>
        <Button
          size="small"
          color="primary"
          onClick={() => handleDelete(book.id)}> 
          <DeleteIcon/>
        </Button>
      </CardActions>
    </Card>
  )
}
