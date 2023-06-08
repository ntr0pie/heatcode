import React, { useState } from 'react'
import Button from '@mui/material/Button';

export default function Authentication({isLoggedInState, authTypeState}) {
    function handleFormSubmit(){
        
    }

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

  return (
    <div>
        <h1>{authTypeState.state === 'login' ? 'Login' : 'Sign Up'}</h1>
        <form onSubmit={handleFormSubmit}>
            <input 
                type='email'
                placeholder='Email'
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
            />
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
