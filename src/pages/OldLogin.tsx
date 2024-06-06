import React from 'react';
import { Button, ThemeProvider } from '@mui/material';
import { useState } from 'react';
import * as yup from 'yup';
import { InputTextField } from '../components/Inputs/InputTextField';
import InputPassword from '../components/Inputs/InputPassword';
import { login } from '../api/auth';
import { validateFields } from '../validation';
import { Menu } from '../components/Menu';
import { theme } from '../Theme';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [errorsValidation, setErrorsValidation] = useState<any>({});

  const loginSchema = yup.object().shape({
    email: yup.string().required('O email é obrigatório').email('Informe um email válido'),
    password: yup.string().required('A senha é obrigatória'),
    
});

  const handleLogin = async () => {
    setErrorsValidation({})
    const error = validateFields(loginSchema, {email, password});
    if (!error){
      const response = await login(email, password);

      if (!response){
        // navigate('/');
      }else {
        console.log(response)
        if (response.isNotVerified){
          // navigate('/verify-email');
        }else {
          setError(response.errorMessage);
        }
      }
    }else {
      const errors = error as unknown as yup.ValidationError[];
      console.log(errors);
      setErrorsValidation(errors);
    }
  }
  return (
    <ThemeProvider theme={theme}>
      <Menu />
      <div style={{ width: '20%', margin: '10vh auto', display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
        <InputTextField
          onChange={setEmail}
          label='Digite seu email'
          error={errorsValidation.email}/>
        <InputPassword
          onChange={setPassword}
          error={errorsValidation.password}/>
        {error && <span style={{color: 'red'}}>{error}</span>}
        <Button
          color='primary'
          onClick={handleLogin}
          style={{backgroundColor: '#fff', width: '50%', marginTop: '2vh'}} >
            Entrar
        </Button>
        {/* <p style={{textDecoration: 'underline', textAlign: 'center', marginTop: '2vh', cursor: 'pointer'}} onClick={() => navigate('/recovery-password')}>Esqueceu sua senha?</p> */}
        <p style={{textDecoration: 'underline', textAlign: 'center', marginTop: '2vh', cursor: 'pointer'}} onClick={() => console.log("Deveria levar para a rota /recovery-password")}>Esqueceu sua senha?</p>

      </div>
    </ThemeProvider>
  );
}

export default Login;