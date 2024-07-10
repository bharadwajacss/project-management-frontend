import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import UserHome from "./UserHome";

function Login({ setIsAuthenticated }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false); // Track login state
  const [user,setUser] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post("https://project-management-backend-1.onrender.com/userRoute/login", { email, password })
      .then(response => {
        if (response.status === 200) {
          alert("Login Successful");
          
          setLoggedIn(true); // Update login state
          setUser(response.data.user);
        }
      })
      .catch(error => {
        console.error("Login error:", error);
        alert("Invalid Credentials")
        // Handle login error (e.g., show error message to user)
      });
  };

  // Render UserHome conditionally based on loggedIn state
  if (loggedIn) {
    return <UserHome user = {user}/>;
  }

  return (
    <div className="form-container">
          <nav  style={{backgroundColor:"#a6e4e7",borderRadius:"15px",marginTop:"10px",marginBottom:"10px"}}  className="navbar">
            <Link to="/" className="navbar-brand mx-3">
              Brand Name
            </Link>
            <div  className="nav">
              <Link style={{color:"black",fontWeight:"500"}} to="/login" className="nav-link">
                Login
              </Link>
              <Link style={{color:"black",fontWeight:"500"}} to="/signup" className="nav-link">
                Signup
              </Link>
            </div>
          </nav>
          <h5>Login</h5>
          <div >
            <form style={{ width:"40%" ,marginLeft:"380px"}}  class="form-control" onSubmit={handleSubmit}>
            
              <label htmlFor="email">Email :</label>
              <input class="form-control my-3"
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            
          
              <label htmlFor="password">Password :</label>
              <input class="form-control my-3"
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            
              <button class="btn btn-primary d-block mx-auto my-3" type="submit" >
              Login
              </button>
              <p>
                  Don't have an account? <Link to="/signup">Signup</Link>
                </p>
              </form>
                
               
          </div>
    </div>
  );
}

export default Login;
