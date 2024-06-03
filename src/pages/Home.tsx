import React from 'react';
import { ThemeProvider } from '@mui/material';
import { Menu } from '../components/Menu';
import { theme } from '../Theme';

export default function Home() {
  
  return (
    <ThemeProvider theme={theme}>
      <Menu />
      <div style={{ width: '20%', margin: '10vh auto', display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
        <p>HOME</p>
      </div>
    </ThemeProvider>
  );
}