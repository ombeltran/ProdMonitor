import './App.css';
import React from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import Login from './pages/login/login';
import Signup from './pages/signup/signup';
import Register from './pages/register/register';
import Reports from './pages/reports/reports';
import Navigation from './pages/navigation/navigation';
// import { useState } from 'react';
import { useAuth } from "./context/AuthContext";
import ProtectedRoute from './pages/protectedRoute/ProtectedRoute';
import { ReportProvider } from './context/ReportContext';

function App() {

  const { isAuth } = useAuth();
  console.log(isAuth);

  return (
    <>
      <Navigation />
      <Routes>
        <Route element={<ProtectedRoute isAllowed={!isAuth} redirectTo="/register" />} >
          <Route path='/*' element={<Login />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/logout' element={<Login />} />
        </Route>

        <Route element={<ProtectedRoute isAllowed={isAuth} redirectTo="/login" />}>
          <Route element={
            <ReportProvider>
              <Outlet />
            </ReportProvider>
          } >
            <Route path='/register' element={<Register />} />
            <Route path='/reports' element={<Reports />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
