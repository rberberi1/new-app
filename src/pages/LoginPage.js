import { useState } from "react";
import { useNavigate } from "react-router-dom";

const user={
  name:'user',
  email:'user@gmail.com',
  password: 'user123'
}

const LoginPage =()=>{
  const [isLoggedIn, setIsLoggedIn]=useState(false)
  const navigate=useNavigate();

  const handleLogin=()=>{
      setIsLoggedIn(true);
      navigate('/store', {state:user});
  }

  return (
    <div className="login">
      <button onClick={()=>navigate('/')}>Home</button>
      <button onClick={handleLogin}>Login</button>
    </div>);
}

export default LoginPage;