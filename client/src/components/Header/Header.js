import React from 'react'
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom'

export default function Header({isLoggedInState, authTypeState}) {
  // const [isSubmitting, setIsSubmitting] = useState(false); 

  const navigate = useNavigate()
  function handleAuthButtonClick(path, authType){
    navigate(path);
    authTypeState.setter(authType)
  }

  return (
    <div className='header'>
      <Button onClick={() => handleAuthButtonClick('/auth', 'login')}>Login</Button>
      <Button onClick={() => handleAuthButtonClick('/auth', 'signup')}>Sign Up</Button>
    </div>
  )
}

