import React, { useState } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Nav from "./Nav";
import Posts from "./Posts";
import LoginForm from "./LoginForm";

const App = () =>{
  const [posts, setPosts] = useState([]);
  const [token, setToken] = useState("")
  
  return(
    <main id="main" className="App" >
      <Router>
        <Nav/>
        <Switch>
          <Route exact path="/">
            <Posts posts={posts} setPosts={setPosts}/>
          </Route>
          <Route path="/login" >
            <LoginForm setToken={setToken} />
          </Route>
        </Switch>
      </Router>
    </main>
  )
}

export default App;