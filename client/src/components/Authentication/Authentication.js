import React, { useState } from 'react'
import Button from '@mui/material/Button';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


export default function Authentication({isLoggedInState, authTypeState}) {
    const navigate = useNavigate();

    async function handleFormSubmit(event){
        event.preventDefault();
        const userData = {email, password};
        const SERVER = 'http://localhost:3001/';

        // Dev
        const authType = authTypeState.state === 'login' ? '/login' : '/signup';
        const reqUrl = SERVER + 'auth' + authType;

        // Test
        // const authType= '/test'
        // const reqUrl = SERVER + 'auth' + authType;

        try{
            console.log(`Authentication: \n${reqUrl} \n[${userData.email},${userData.password}]`);
            const response = await axios.post(reqUrl, userData);
            console.log(response.data);
            isLoggedInState.setter(true);
            navigate('/'); // goto '/'
        }
        catch(error){
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
