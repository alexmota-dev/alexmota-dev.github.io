import './style.css';
import React from 'react';
import { theme } from '../../Theme';
import { useNavigate } from 'react-router-dom';
import { Button, Stack } from '@mui/material';
import logo from '../../assets/logo.png';

export function Menu() {
  const navigate = useNavigate();

  return (
      <div
        style={{
          backgroundColor: theme.palette.primary.main,
          width: '100%',
          height: '10vh',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          alignContent: 'center',
          flexWrap: 'wrap',
          padding: '0.5vw',
          borderBottom: '1px solid #fff'
        }}>
        <a href='/'>
          <img
            alt='HOME'
            src={logo}
            style={{ width: '4vw' }}/>
        </a>
        
        <Stack direction="row" spacing={2}>
          <Button
            color='primary'
            variant="contained"
            onClick={() => navigate(`/login`)}>
              Entrar
          </Button>

          <Button
            color='primary'
            variant="contained"
            onClick={() => navigate(`/register`)}>
              Cadastrar
          </Button>
        </Stack>
        {/* <Button style={{backgroundColor: '#fff', color: 'var(--primary)'}} onClick={() => navigate(`/login`)}>Entrar</Button> */}
        {/* <Button style={{backgroundColor: '#fff', color: 'var(--primary)', marginLeft: '1vw'}} onClick={() => avigate(`/signup`)}>Cadastrar</Button> */}
      </div>
  );
}
