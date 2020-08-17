import React ,{useState,useEffect}from 'react';
import Navbar from "./Components/Navbar";
import Home from  "./Components/Home"
import {BrowserRouter as Router , Switch , Route } from "react-router-dom"
import AddContacts from './Components/AddContacts';
import Footer from './Components/Footer';
import ProfileEdit from "./Components/ProfileEdit";
import LogIn from "./Components/LogIn";
import Register from "./Components/Register";
import axios from "axios";
import setAuthToken from './utils/setAuthToken';


function App() {
  useEffect(()=>{
    if(localStorage.token!=' '){
      setIsLoggedIn(true);
    }
    },[]);
  const loadUser = token =>{
    setAuthToken(token);
    try {
      const res = axios.get("http://localhost:5000/api/users");
      console.log(res);
    } catch (error) {
      console.error(error);
    }
  }
  const [isLoggedIn,setIsLoggedIn] = useState(false);
  const [user,setUser] = useState(null);

  if(isLoggedIn){
    return (
      <Router>
        <Navbar setIsLoggedIn={setIsLoggedIn}>
      <Switch>
        <Route path="/register" exact  component={Home} />
        <Route path="/contacts/add" exact  component={AddContacts} />
        <Route path="/profile/edit" exact  component={ProfileEdit} />
        <Route path="/"  component={Home} />
      </Switch>
      <Footer/>
      </Navbar>
      </Router>
  
    );
  }
  else{
    return (
      <Router>
      <Switch>
      <Route path="/" exact render={props=>{
          return(
            <LogIn setIsLoggedIn={setIsLoggedIn}/>
          )
        }} />
        <Route path="/register" exact render={props=>{
          return(
            <Register setIsLoggedIn={setIsLoggedIn}/>
          )
        }} />
      </Switch>
      </Router>
  
    );
  }

}

export default App;
