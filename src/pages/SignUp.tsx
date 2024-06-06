import React from 'react';
import { Button } from '@mui/material';
import { useState } from 'react';
// import { useNavigate } from 'react-router';
import * as yup from 'yup';
import { register } from '../api/auth';
import { validateFields } from '../validation';
import { Menu } from '../components/Menu';
import { InputTextField } from '../components/Inputs/InputTextField';

export default function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [errorsValidation, setErrorsValidation] = useState<any>({});
  // const navigate = useNavigate();

  const loginSchema = yup.object().shape({
    name: yup.string().required('O nome é obrigatório'),
    email: yup.string().required('O email é obrigatório').email('Informe um email válido'),
    password: yup.string().required('A senha é obrigatória'),
    
});

  const handleSignUp = async () => {
    setErrorsValidation({});
    const error = validateFields(loginSchema, {email, password, name});
    if (!error){
      const response = await register(name, email, password);
      if (!response){

        // navigate('/verify-email')
      }else {
        setError(response.errorMessage);
      }
    }else {
      const errors = error as unknown as yup.ValidationError[];
      console.log(errors);
      setErrorsValidation(errors);
    }
  }
  return (
    <>
      <Menu />
      <div style={{ width: '20%', margin: '10vh auto', display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
        <InputTextField onChange={setName} label='Digite seu nome' error={errorsValidation.name}/>
        <InputTextField onChange={setEmail} label='Digite seu email' error={errorsValidation.email}/>
        <InputTextField type='password' onChange={setPassword} label='Digite sua senha' error={errorsValidation.password}/>
        {error && <span style={{color: 'red'}}>{error}</span>}
        <Button onClick={handleSignUp} style={{backgroundColor: '#fff', color: 'var(--primary)', width: '50%'}} >Cadastrar</Button>
      </div>
    </>
  );
}