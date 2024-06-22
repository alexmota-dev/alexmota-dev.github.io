import React from 'react';
import BookCard from '../BookCard';
import { Book } from '../../services/types/Book';

export default function ListOfBooks({books, handleDelete, handleUpdate}: {books: Book[], handleDelete: (id: string) => void, handleUpdate: (id: string) => void}) {
  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        padding: '1vw',
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: '100%',
        height: '100%',
      }}
    >
      {books.map((book, index) => (
        <BookCard
          key={index}
          book={book}
          handleDelete={handleDelete}
          handleUpdate={handleUpdate}
        />
      ))}
    </div>
  );
}
