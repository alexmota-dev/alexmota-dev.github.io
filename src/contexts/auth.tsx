import React, { createContext, useEffect, useState } from 'react';
import { UserLogin } from '../services/types/UserLogin';
import { api } from '../api';

interface AuthContextData {
  signed: boolean;
  user: object | null;
  login: (userData: UserLogin) => Promise<any>;
  logout: () => void;
  // register: (name:string, email: string, password:string) => Promise<any>;
}

export const AuthContext = createContext<AuthContextData>({} as AuthContextData);

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<object | null>(null);

  useEffect(() => {
    const storagedUser = sessionStorage.getItem('@App:user');
    const storagedToken = sessionStorage.getItem('@App:token');

    if (storagedToken && storagedUser) {
      setUser(JSON.parse(storagedUser));
      defaults.headers.Authorization = `Bearer ${storagedToken}`;
    }
  }, []);

  async function login(userData: UserLogin){
    const response = await api.post('/auth/login', userData);

    if(response.status !== 200) return response.data
    if(response.status === 200 && response.data){
      setUser(response.data.user);
      api.defaults.headers.Authorization = `Bearer ${response.data.token}`;

      sessionStorage.setItem('@App:user', JSON.stringify(response.data.user));
      sessionStorage.setItem('@App:token', response.data.token);
    }
  }

  async function register(userData: UserLogin){
    const response = await api.post('/auth/register', userData);

    if(response.status !== 200) return response.data
    if(response.status === 200 && response.data){
      setUser(response.data.user);
      api.defaults.headers.Authorization = `Bearer ${response.data.token}`;

      sessionStorage.setItem('@App:user', JSON.stringify(response.data.user));
      sessionStorage.setItem('@App:token', response.data.token);
    }
  }

  function logout() {
    setUser(null);
    sessionStorage.removeItem('@App:user');
    sessionStorage.removeItem('@App:token');
  }

  return (
    <AuthContext.Provider value={{ signed: Boolean(user), user, login, logout}}>
      {children}
    </AuthContext.Provider>
  );
 };

 export const defaults = {
  headers: {
    Authorization: '',
  },
};