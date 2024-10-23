import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../components/auth";

const current_user={
  name:'Rosela',
  email:'rosela@gmail.com',
  password: '123'
}

const LoginPage =()=>{
  //const[user, setUser]=useState('')
  //const [isLoggedIn, setIsLoggedIn]=useState(false)
  const navigate=useNavigate();
  const auth= useAuth()

  const handleLogin=()=>{
      //setIsLoggedIn(true);
      //setUser(current_user)
      auth.login(current_user)
      //navigate('/store', {state:user});
      navigate('/store')
  }

  return (
    <div className="login">
      <button onClick={()=>navigate('/')}>Home</button>
      <button onClick={handleLogin}>Login</button>
    </div>);
}

export default LoginPage;