import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../../assets/css/register.css";
import { useState, useRef ,useEffect} from "react";
const Register = () => {
  const inputRef = useRef();
  const nav = useNavigate();

  const [users, setUsers] = useState([]);

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  useEffect(()=>{
    setUsers(JSON.parse(localStorage.getItem("Users"))) 
  },[])

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password === confirmPassword && username.length>3 && email.length>3) {
      const newuser = { username, email, password };
      const listuser = [...users, newuser];
      setUsers(listuser);
      localStorage.setItem("Users", JSON.stringify(listuser));
      nav("/agrofunds/user/home");
    } else {
      alert("Enter Proper Details");
    }
  };

  return (
    <div className="reg_container">
      <div className="ima"></div>
      <div className="heading">
        <span className="top">Register</span>
      </div>
      <form className="form" onSubmit={handleSubmit}>
        <div className="input">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={username}
            ref={inputRef}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="input">
          <label htmlFor="username">Email</label>
          <input
            type="text"
            id="username"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="input">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="input">
          <label htmlFor="con_password">Confirm Password</label>
          <input
            type="password"
            id="con_password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <div className="loginButton">
          <button
            className="button"
            type="submit"
            onClick={() => inputRef.current.focus()}
          >
            Register
          </button>
        </div>
      </form>
      <div className="last">
        <p>
          Already have an account ?{" "}
          <Link to="/agrofunds/login" className="link">
            <span>Login</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
