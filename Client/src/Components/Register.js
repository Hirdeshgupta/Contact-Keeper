import React, { Fragment } from 'react'
import LockOpenSharpIcon from '@material-ui/icons/LockOpenSharp';
import Particles from "react-tsparticles";
function LogIn() {
    return (
        <Fragment>
            <Particles
            style={{
                width: "100%",
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
<div class="container2 login" >
  <div class="container mt-5 mt-lg-0" style={{position:"absolute",zIndex:2,left:"50%",top:"55%",transform:"translate(-50%,-50%)"}}>
    <div class="login-container-wrapper clearfix">
      <div class="logo">
          <LockOpenSharpIcon fontSize="large"/>
      </div>
      <h1 className="text-center text-white">Contact Keeper </h1>
      <div class="welcome"><strong>Welcome,</strong> please Regsiter</div>

      <form class="form-horizontal login-form">
      <div class="form-group relative">
          <input id="login_username" class="form-control input-lg" type="text"  placeholder="Name" required />
          <i class="fa fa-user"></i>
        </div>
        <div class="form-group relative">
          <input id="login_username" class="form-control input-lg" type="email"  placeholder="Email" required />
          <i class="fa fa-user"></i>
        </div>
        <div class="form-group relative password">
          <input id="login_password" class="form-control input-lg" type="password" placeholder="Password" required />
          <i class="fa fa-lock"></i>
        </div>
        <div class="form-group relative password">
          <input id="login_password" class="form-control input-lg" type="password" placeholder="Confirm Password" required />
          <i class="fa fa-lock"></i>
        </div>
        <div class="form-group">
          <button type="submit" class="btn btn-success btn-lg btn-block">Login</button>
        </div>
        <div class="checkbox pull-left">
          <label><input type="checkbox" /> Remember</label>
        </div>
        <div class="checkbox pull-right">
          <label> <a class="forget" href="" title="forget">Forgot your password</a> </label>
        </div>
      </form>
    </div>
  </div>

</div>
        </ Fragment>
    )
}

export default LogIn
