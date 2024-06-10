import React from 'react';
import { createRoot } from "react-dom/client";
import { AuthProvider } from "./contexts/auth";
import Routes from './routes';
const rootElement = document.getElementById("root");

if (rootElement) {
  createRoot(rootElement).render(
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
} else {
  // Trate o caso em que o elemento "root" não é encontrado
  console.error('Elemento com ID "root" não foi encontrado.');
}