import React from 'react';
import {  Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import TodoPage from './pages/TodoPage';
import AdminPage from './pages/AdminPage';
import Auth from './components/Auth';
import RegisterPage from './pages/Register';
import AppRoutes from './routes/AppRoutes';
import Navbar from './Navbar';

const App = () => {
  return (
 
      <>
      <Navbar/>
      <AppRoutes/>
      </>
 
  );
};

export default App;
