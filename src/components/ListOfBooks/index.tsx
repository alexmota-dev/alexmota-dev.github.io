import React from 'react';
import BookCard from '../BookCard';
import imageBook from '../../assets/percy-jackson-and-the-lightning-thief.png';

interface Book {
  title: string;
  paragraph: string;
}

const books: Book[] = [
  {
    title: 'Percy Jackson and the Lightning Thief',
    paragraph: 'In this book, Percy Jackson discovers he is a demigod son of Poseidon.',
  },
  {
    title: 'Harry Potter and the Philosopher\'s Stone',
    paragraph: 'Harry Potter, a young wizard, discovers his magical heritage and attends Hogwarts School of Witchcraft and Wizardry.',
  },
  {
    title: 'Harry Potter and the Philosopher\'s Stone',
    paragraph: 'Harry Potter, a young wizard, discovers his magical heritage and attends Hogwarts School of Witchcraft and Wizardry.',
  },
  {
    title: 'Harry Potter and the Philosopher\'s Stone',
    paragraph: 'Harry Potter, a young wizard, discovers his magical heritage and attends Hogwarts School of Witchcraft and Wizardry.',
  },
];

export default function ListOfBooks() {
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
          image={imageBook}
          title={book.title}
          paragraph={book.paragraph}
        />
      ))}
    </div>
  );
}
