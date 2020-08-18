import React, { Fragment , useState } from 'react'
import LockOpenSharpIcon from '@material-ui/icons/LockOpenSharp';
import Particles from "react-tsparticles";
import {Link } from "react-router-dom";
import { Alert } from '@material-ui/lab';
import axios from "axios";
import setAuthToken from "../utils/setAuthToken";
function LogIn(props) {
    const [alerts,setAlerts] = useState(null);
    const [login,setLogin] = useState({
        password:"",
        password1:"",
        name:"",
        email:"",
    })
    const setIsLoggedIn = x=>{
      props.setIsLoggedIn(x);
    }
    const onChange = e=>{
        setLogin({...login,[e.target.name]:e.target.value})
    }
    const handleSubmit = async e=>{
        e.preventDefault();
        if(login.password.length<6){
          return setAlerts("Password must be aleast 6 characters long");
      }
        if(login.password!==login.password1){
            return setAlerts("Password and Confirm Password doesn't matched");
        }
        else{
            setAlerts(null);
            try {
              console.log("hi")
              const config = {
                headers:{
                  ContentType:"application/json"
                }
              }
              const res  = await axios.post('http://localhost:5000/api/users',{
                name:login.name,
                email:login.email,
                password:login.password
              },config);
              localStorage.setItem("token",res.data.token);
              setAuthToken(localStorage.getItem('token'));
              try {
                const res = axios.get("http://localhost:5000/api/auth");
                setIsLoggedIn(true);
                res.then(data=>console.log(data));

              } catch (error) {
                console.error(error);
              }
            } catch (error) {
              console.error(error)
              return setAlerts("Email already exists ")
            }
        }
    }
    return (
        <Fragment>
            <Particles
            style={{
                width: "100vw",
                height:"120vh",
                zIndex: 1,
                position:"absolute",
            }}
        id="tsparticles"
        options={ {
            fpsLimit: 60,
            particles: {
              number: {
                value: 60,
                density: {
                  enable: true,
                  value_area: 1000
                }
              },
              color: {
                value: ["#344455", "#ffffff"]
              },
              shape: {
                type: "edge",
                stroke: {
                  width: 0,
                  color: "#000000"
                },
                polygon: {
                  nb_sides: 5
                },
                image: {
                  src: "img/github.svg",
                  width: 100,
                  height: 100
                }
              },
              opacity: {
                value: 0.5,
                random: false,
                anim: {
                  enable: false,
                  speed: 1,
                  opacity_min: 0.1,
                  sync: false
                }
              },
              size: {
                value: 4,
                random: true,
                anim: {
                  enable: false,
                  speed: 40,
                  size_min: 0.1,
                  sync: false
                }
              },
              line_linked: {
                enable: true,
                distance: 50,
                color: "#fff",
                opacity: 0.5,
                width: 1
              },
              move: {
                enable: true,
                speed: 3,
                direction: "none",
                random: false,
                straight: false,
                out_mode: "out",
                bounce: false,
                attract: {
                  enable: false,
                  rotateX: 600,
                  rotateY: 1200
                }
              }
            },
            retina_detect: true
          }}
      />
<div className="container2 login" >
  <div className="container mt-5 pt-4 pt-lg-0 mt-lg-0" style={{position:"absolute",zIndex:2,left:"50%",top:"55%",transform:"translate(-50%,-50%)"}}>
    <div className="login-container-wrapper clearfix">
      <div className="logo">
          <LockOpenSharpIcon fontSize="large"/>
      </div>
      <h1 className="text-center text-white">Contact Keeper </h1>
      <div className="welcome"><strong>Welcome,</strong> please Regsiter</div>
        {alerts && <Alert severity="error">{alerts}</Alert>}
      <form className="form-horizontal login-form mt-3" onSubmit={handleSubmit}>
      <div className="form-group relative">
          <input id="login_username" className="form-control input-lg" type="text" name="name" value={login.name} onChange={onChange} placeholder="Name" required />
          <i className="fa fa-user"></i>
        </div>
        <div className="form-group relative">
          <input id="login_username" className="form-control input-lg" type="email" name="email" value={login.email} onChange={onChange}  placeholder="Email" required />
          <i className="fa fa-user"></i>
        </div>
        <div className="form-group relative password">
          <input id="login_password" className="form-control input-lg" type="password" name="password" value={login.password} onChange={onChange} placeholder="Password" required />
          <i className="fa fa-lock"></i>
        </div>
        <div className="form-group relative password">
          <input id="login_password" className="form-control input-lg" type="password" name="password1" value={login.password1} onChange={onChange} placeholder="Confirm Password" required />
          <i className="fa fa-lock"></i>
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-success btn-lg btn-block">Register</button>
        </div>
        </form>
        <hr className="hr-text" data-content="OR" />
        <button className="loginBtn loginBtn--facebook" style={{height:52,width:"100%",paddingLeft:"25%"}} >
                Register with Facebook
        </button>
        <div className="checkbox text-center mt-3">
          <label> <Link className="forget" to="/" title="forget">Already have an account ? Log In</Link> </label>
        </div>
    </div>
  </div>

</div>
        </ Fragment>
    )
}

export default LogIn
