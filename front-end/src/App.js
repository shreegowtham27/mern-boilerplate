import React from "react"
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router,Route} from "react-router-dom"
import CreateUser from "./components/createuser.component.js"
import LogOut from "./components/logout.component.js"
import UserList from "./components/userlist.component.js"
import Header from "./components/header.component.js"
import Login from "./components/login.component.js"

function App() {
  return (
    <Router>
      <div className="container">
      <Header/>
        <Route path="/" exact component={UserList}/>
        <Route path="/register" exact component={CreateUser}/>
        <Route path="/logout" exact component={LogOut}/>
        <Route path="/login" exact component={Login}/>
      </div>
    </Router>
  );
}

export default App;
