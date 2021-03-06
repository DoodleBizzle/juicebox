import React, { useState } from "react";
import { useHistory } from "react-router";
import { userLogin } from "../api/users";

const LoginForm = ({setToken, setIsLoggedIn}) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const {token} = await userLogin(username, password);
    localStorage.setItem('token', token);
    setToken(token)
    setIsLoggedIn(true)
    history.push("/")
  }
  
  return(
    <div>
      <form className="inputForm" onSubmit={handleSubmit}>
      <input
          type="text"
          minLength = "4"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
          placeholder="Username">
        </input>
        <input 
          type="password" 
          minLength = "4"
          value={password}
          onChange={(event)=>setPassword(event.target.value)}
          placeholder="Password">
        </input>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default LoginForm;