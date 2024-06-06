import React from 'react';
import { ThemeProvider } from '@mui/material';
import { Menu } from '../components/Menu';
import { theme } from '../Theme';
import ListOfBooks from '../components/ListOfBooks';

export default function Home() {
  
  return (
    <ThemeProvider theme={theme}>
      <Menu />
      <div
        style={{
        width: '100%',
        height: '100%',
        margin: '10vh auto',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        backgroundColor: 'red'
      }}>
        <p>HOME</p>

        <ListOfBooks></ListOfBooks>
      </div>
    </ThemeProvider>
  );
}