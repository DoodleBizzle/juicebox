import React, { useState } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Nav from "./Nav";
import Posts from "./Posts";
import Post from "./Post";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import CreatePost from "./CreatePost";
import EditPost from "./EditPost";


const App = () =>{
  const [posts, setPosts] = useState([])
  const [token, setToken] = useState("")
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  return(
    <main id="main" className="App" >
      <Router>
        <Nav/>
        <Switch>
          <Route exact path="/">
            <Posts posts={posts} setPosts={setPosts} />
          </Route>
          <Route path="/login" >
            <LoginForm setToken={setToken} setIsLoggedIn={setIsLoggedIn} />
          </Route>
          <Route path="/register">
            <RegisterForm setToken={setToken} />
          </Route>
          <Route exact path="/posts/:postId" >
            <Post/>
          </Route>
          <Route path="/createpost">
            <CreatePost token={token} />
          </Route>
          <Route path="/posts/:postId/editpost">
            <EditPost/>
          </Route>
        </Switch>
      </Router>
    </main>
  )
}

export default App;