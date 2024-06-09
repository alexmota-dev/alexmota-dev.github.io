import React from 'react';
import { Menu } from '../components/Menu';
import ListOfBooks from '../components/ListOfBooks';
import Container from '../components/Container';

export default function Home() {
  
  return (
    <Container>
      <ListOfBooks/>
    </Container>
  );
}