import React, { useState } from "react";
import { useHistory } from "react-router";
import { userLogin } from "../api/users";

const LoginForm = ({setToken}) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const handleSubmit = () => {

  }
  
  return(
    <div>
      <form onSubmit={handleSubmit}>
      <input
          type="text"
          minLength = "6"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
          placeholder="Username">
        </input>
        <input 
          type="password" 
          minLength = "8"
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