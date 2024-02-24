import { useState } from "react";
import { Link } from "react-router-dom";
import "../../assets/css/login.css";
import { useNavigate } from "react-router-dom";
const Login = () => {

  const nav = useNavigate();
  
  const[email,setEmail] = useState('');
  const[password,setPassword] = useState('');


    const handleSubmit=(e)=>
    {
      
      e.preventDefault();
      // nav("/agrofunds/user/home");.
      const users = JSON.parse(localStorage.getItem("Users")) || [];
      const user = users.find(user=>user.email===email && user.password===password)
      console.log(user);
      if(user)
      {
        nav("/agrofunds/user/home");
      }
      else{
        alert("No user exists or password dosent match");
      }
      
    }

  return (
    <div className="login_container">
      <div className="ima">
      </div>
      <div className="heading">
        <span className="top">LOGIN</span>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="input">
          <label htmlFor="username">Email</label>
          <input type="text" id="username" value={email} onChange={(e)=>setEmail(e.target.value)}/>
        </div>
        <div className="input">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
        </div>
      <div className="loginButton">
        <button className="button" type="submit">Login</button>
      </div>
      </form>
      <div className="last">
        <p>Dont have an account ? <Link to="/agrofunds/signup" className="link"><span>Register</span></Link></p>
      </div>
    </div>
  );
};

export default Login;
