import React, { useState } from 'react'
import Button from '@mui/material/Button';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


export default function Authentication({isLoggedInState, authTypeState}) {
    function handleFormSubmit(event){
        event.preventDefault();
        const userData = {email, password};
        // const authUrl = '/auth' + authTypeState.state === 'login' ? '/login' : '/signup'
        const authUrl = authTypeState.state === 'login' ? '/login' : '/signup'
        try{
            const response = await axios.post(authUrl, userData);
            console.log(response.data);
            isLoggedInState.setter(true);
            const navigate = useNavigate();
            navigate('/');
        }
        catch(erorr){
            console.log(error);
        }
    }

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

  return (
    <div>
        <h1>{authTypeState.state === 'login' ? 'Login' : 'Sign Up'}</h1>

        {/* Login/Sign up Form */}
        <form onSubmit={handleFormSubmit}>

            {/* Email input */}
            <input 
                type='email'
                placeholder='Email'
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
            />
            
            {/* Password input */}
            <input
                type='password'
                placeholder='Password'
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                required
            />

            <Button type='submit'>
                {authTypeState.state === 'login' ? 'Login' : 'Sign Up'}
            </Button>
        </form>
    </div>
  )
}
