
import EditSharpIcon from '@material-ui/icons/EditSharp';
import React ,{Fragment,useState} from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import FilledInput from '@material-ui/core/FilledInput';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Visibility from '@material-ui/icons/Visibility';
import Button from '@material-ui/core/Button';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing(1),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    width: '25ch',
  },
}));
const ImgUpload =({
    onChange,
    src
  })=>{
      
      return(
    <Fragment>
        <label htmlFor="photo-upload" className="custom-file-upload fas" style={{position:"absolute",left:150,zIndex:1000000}} >
            <EditSharpIcon />
            <input id="photo-upload" type="file" style={{display:"none"}} onChange={onChange}/> 
        </label>
        <div className="img-wrap img-upload" >
          <img htmlFor="photo-upload" src={src} style={{height:"100%",width:"100%"}} />
        </div>
      </Fragment>
      )
  }


function ProfileEdit() {
    const classes = useStyles();
    const [values, setValues] = React.useState({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
      });
    
      const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
      };
    
      const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
      };
      const handleMouseDownPassword = (event) => {
        event.preventDefault();
      };
    const [profile,setProfile] = useState({
        file: '',
        imagePreviewUrl: require("../images/profilepic.png"),
    });
    const {imagePreviewUrl } = profile;
    const photoUpload = e =>{
        e.preventDefault();
        const reader = new FileReader();
        const file = e.target.files[0];
        reader.onloadend = () => {
          setProfile({
            file: file,
            imagePreviewUrl: reader.result
          });
        }
        if(file){
            if(file.type==="image/png"||file.type==="image/jpeg"){
                reader.readAsDataURL(file);
            }
        }

      }
    return (

<div className="container mt-5" >
<br />
<br />
	<div className="row mainedit" id="main" >
        <div className="col-md-4 well d-flex" id="leftPanel">
            <div className="row align-items-center " style={{margin:"auto"}}>
                <div className="col-md-12 ">
                	<div className="mt-2" >
                    <ImgUpload onChange={photoUpload} src={imagePreviewUrl}/>
        				{/* <img src="http://lorempixel.com/200/200/abstract/1/" alt="Texto Alternativo" className="img-circle img-thumbnail" style={{borderRadius:"50%"}} /> */}
        				<h2 className="mt-4">Gopinath Perumal</h2>
        			</div>
        		</div>
            </div>
        </div>
        <div className="col-md-8 well" id="rightPanel">
            <div className="row">
    <div className="col-md-12 pb-4">
    	<form role="form ">
			<h2 className="text-center mt-5">Edit your profile</h2>
			<hr className="colorgraph" />
			<div className="row">
				<div className="col-xs-12 col-sm-6 col-md-6">
					<div className="form-group">
                        <TextField id="outlined-basic" label="First Name" variant="outlined" size="large"  style={{width:"100%"}} />
                        {/* <input type="text" name="first_name" id="first_name" className="form-control input-lg" placeholder="First Name" tabindex="1" /> */}
					</div>
				</div>
				<div className="col-xs-12 col-sm-6 col-md-6">
					<div className="form-group">
                    <TextField id="outlined-basic" type="email" label="Last Name" variant="outlined" size="large"  style={{width:"100%"}} />

						{/* <input type="text" name="last_name" id="last_name" className="form-control input-lg" placeholder="Last Name" tabindex="2" /> */}
					</div>
				</div>
			</div>
			<div className="form-group">
            <TextField id="outlined-basic" label="Email" variant="outlined" size="large" style={{width:"100%"}} />

				{/* <input type="email" name="email" id="email" className="form-control input-lg" placeholder="Email Address" tabindex="4" /> */}
			</div>
			<div className="row">
				<div className="col-xs-12 col-sm-6 col-md-6">
					<div className="form-group">
                    <FormControl className={clsx(classes.textField)} variant="outlined" style={{width:"100%"}}>
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={handleChange('password')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
            labelWidth={70}
          />
        </FormControl>
            {/* <TextField id="outlined-basic" label="Password" variant="outlined" size="large" style={{width:"100%"}} /> */}
                        
						{/* <input type="password" name="password" id="password" className="form-control input-lg" placeholder="Password" tabindex="5" /> */}
					</div>
				</div>
				<div className="col-xs-12 col-sm-6 col-md-6">
					<div className="form-group">
                    <FormControl className={clsx(classes.textField)} variant="outlined" style={{width:"100%"}}>
          <InputLabel htmlFor="outlined-adornment-password">Confirm Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={handleChange('password')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
            labelWidth={150}
          />
        </FormControl>

						{/* <input type="password" name="password_confirmation" id="password_confirmation" className="form-control input-lg" placeholder="Confirm Password" tabindex="6" /> */}
					</div>
				</div>
			</div>
			<hr className="colorgraph" />
			<div className="row justify-content-center">
            <div className="col-xs-12 col-md-6">
                <Button style={{width:"100%", background:"#28A745",color:"white",outline:"none"}} >
				    Save
                </Button>
                </div>
			</div>
		</form>
	</div>
</div>
</div>
        </div>
     </div>       

    )
}

export default ProfileEdit





