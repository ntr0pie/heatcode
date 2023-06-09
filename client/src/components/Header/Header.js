import React from 'react'
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom'
import axios from 'axios';

export default function Header({isLoggedInState, authTypeState}) {
  // const [isSubmitting, setIsSubmitting] = useState(false); 

  const navigate = useNavigate()
  function handleAuthButtonClick(path, authType){
    navigate(path);
    authTypeState.setter(authType)
  }

  async function handleLogoutBtnClick(){
    const userData = {email: '', password: '', status: true};
    const SERVER = 'http://localhost:3001/';
    const reqUrl = SERVER + 'auth/logout';
    try{
        const response = await axios.post(reqUrl, userData);
        console.log(response.data);
        isLoggedInState.setter(response.data.user.status);
        navigate('/'); // Go to workspace
    } catch(error){
        console.log(error);
        const errorMessage = error.response.data.message
        alert(errorMessage + ' Please try again.');
    }

}

  return (
    <div className='header'>
      {
        !isLoggedInState.state ? (
          <div>
            <Button onClick={() => handleAuthButtonClick('/auth', 'login')}>Login</Button>
            <Button onClick={() => handleAuthButtonClick('/auth', 'signup')}>Sign Up</Button>
          </div>
        ) : (
          <div>
            <Button onClick={handleLogoutBtnClick}>Log Out</Button>
          </div>
        )
      }

    </div>
  )
}

