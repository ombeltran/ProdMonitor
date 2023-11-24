import './App.css';
import React from 'react';
import  { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/login/login';
import Signup from './components/signup/signup';
import Register from './components/register/register';
import Reports from './components/reports/reports';
import Home from './components/home/home';
import Navigation from './components/navigation/navigation';
import { useState } from 'react';
import ProtectedRoute from './components/protectedRoute/ProtectedRoute';

function App() {

  const [user, setUser] = useState(null);

  const login = () => {
    setUser({
    id: 1,
    name: 'John'
    })
  }

  const logout = () => setUser(null);

  return (
    <BrowserRouter>

      <Navigation />
      {/* { user ? ( <button onClick={logout}>Logout</button>) : (<button onClick={login}>Login</button>) } */}
      <Routes>
        <Route path='/' element= {<Home />} />
        <Route path='/login' element= {<Login />} />
        <Route path='/signup' element= {<Signup />} />
        {/* <Route element={<ProtectedRoute user={user} />}> */}
          <Route path='/register' element= {<Register />} />
          <Route path='/reports' element= {<Reports />} />
        {/* </Route> */}
      </Routes>
    </BrowserRouter>
  ); 
}

export default App;
