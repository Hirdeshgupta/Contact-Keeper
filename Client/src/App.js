import React from 'react';
import Navbar from "./Components/Navbar";
import Form from  "./Components/Form"
import {BrowserRouter as Router , Switch , Route } from "react-router-dom"
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import ProfileEdit from "./Components/ProfileEdit";

function App() {
  return (
    <Router>
    <Navbar>
    <Switch>
      <Route path="/" exact  component={Form} />
      <Route path="/contact" exact  component={Contact} />
      <Route path="/profile/edit" exact  component={ProfileEdit} />

    </Switch>
    <Footer/>
    </Navbar> 
    </Router>

  );
}

export default App;
