import React, {useState} from "react";
import { useHistory } from "react-router";
import { registerUser } from "../api/users";

const RegisterForm = ({setToken}) =>{
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [doPasswordsMatch, setDoPasswordsMatch] = useState(true)
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const history = useHistory();

  const handleSubmit = async (event) =>{
    event.preventDefault();
    if(password === confirmPassword){
      setDoPasswordsMatch(true);
      const {token} = await registerUser(username, password, name, location)
      localStorage.setItem('token', token)
      setToken(token)
      history.push('/')
    } else {
      setDoPasswordsMatch(false)
    }
  }

  return(
    <div>
      <form className="inputForm" onSubmit={handleSubmit}>
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
        <input 
          type="password"
          value={confirmPassword}
          onChange={(event)=>setConfirmPassword(event.target.value)}
          placeholder="Confirm Password">
        </input>
        <input
        type="text"
        value={name}
        onChange={(event)=>setName(event.target.value)}
        placeholder="Name">
        </input>
        <input
        type="text"
        value={location}
        onChange={(event)=>setLocation(event.target.value)}
        placeholder="Location">
        </input>
        <button type="submit">Submit</button>
      </form>
      {
        doPasswordsMatch ? null : <h1>Passwords Do Not Match!</h1>
      }
    </div>
  )
}

export default RegisterForm