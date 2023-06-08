import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Auth from './components/Authentication/Authentication.js'
import Footer from './components/Footer/Footer';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  // States
  // Is user logged in?
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const isLoggedInState = {state: isLoggedIn, setter: setIsLoggedIn};

  // Is user trying to login or sign up?
  const [authType, setAuthType] = useState('login');
  const authTypeState = {state: authType, setter: setAuthType};

  return (
    <BrowserRouter>
    {/* Header for logo, navbar and auth buttons */}
      <Header isLoggedInState={isLoggedInState} authTypeState = {authTypeState} />

      <Routes>
        {/* Main for landing page and workspace */}
          <Route exact path='/' element={<Main isLoggedInState = {isLoggedInState}/>} />

        {/* Authentication for login and signup */}
          <Route path='/auth' element={<Auth isLoggedInState = {isLoggedInState} authTypeState = {authTypeState} />}/>
          
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
