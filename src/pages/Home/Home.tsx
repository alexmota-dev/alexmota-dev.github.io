import React, { useEffect, useState } from 'react';
import ListOfBooks from '../../components/ListOfBooks';
import Container from '../../components/Container';
import { findAll, remove } from '../../services/book';
import { useNavigate } from 'react-router-dom';

interface Book {
  id: string;
  title: string;
  storyline: string;
  url: string;
}

export default function Home() {
  const [books, setBooks] = useState<Book[]>([]);
  const navigate = useNavigate();

  const handleListBook = async () => {

    try {
      const findBooks = await findAll();
      setBooks(findBooks);
    } catch (error) {
      throw error;
    }
  }

  const handleDelete = async(id: string) => {
    const response = await remove(id);
    console.log(response);
    console.log(response.data);
    console.log(response.status);

    if(response != null && response.status === 204) {
      setBooks(books.filter(book => book.id !== id));
    }
  }

  const handleUpdate = async(id: string) => {
    navigate(`/update-book/${id}`);
  }

  useEffect(() => {
    handleListBook();
  }, []);
  
  return (
    <Container>
      <ListOfBooks
        key={books.length}
        books={books}
        handleDelete={handleDelete}
        handleUpdate={handleUpdate}/>
    </Container>
  );
}