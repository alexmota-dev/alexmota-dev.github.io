import './style.css';
import React, { useContext } from 'react';
import { theme } from '../../Theme';
import { useNavigate } from 'react-router-dom';
import { Button, Stack } from '@mui/material';
import logo from '../../assets/logo.png';
import InfoIcon from '@mui/icons-material/Info';
import LogoutIcon from '@mui/icons-material/Logout';
import { AuthContext } from '../../contexts/auth';

export function Menu() {
  const navigate = useNavigate();
  const context = useContext(AuthContext);

  function logout() {
    context.logout();
  }

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
        
        <Stack
          direction="row"
          spacing={2}
          style={{
            marginRight: '1vw',
          }}>
          <a href='/'>
            <img alt='HOME' src={logo} style={{ width: '2vw' }}/>
          </a>
          
          <Button
            onClick={() => navigate(`/about`)}
            variant="outlined"
            startIcon={<InfoIcon />}
            style={{
              marginRight: '1vw',
            }}>
            Sobre nós
          </Button>
        </Stack>

        {context.signed ? (
          <Button
            color='primary'
            variant="contained"
            endIcon={<LogoutIcon />}
            onClick={logout}>
              Sair
          </Button>
        ) : (
          <Stack
            direction="row"
            spacing={2}
            style={{
              marginRight: '1vw',
            }}>
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
        )}
        
        {/* <Button style={{backgroundColor: '#fff', color: 'var(--primary)'}} onClick={() => navigate(`/login`)}>Entrar</Button> */}
        {/* <Button style={{backgroundColor: '#fff', color: 'var(--primary)', marginLeft: '1vw'}} onClick={() => avigate(`/signup`)}>Cadastrar</Button> */}
      </div>
  );
}
