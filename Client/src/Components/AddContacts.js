
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
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber:''
      });
    
      const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
      };
      const handleMouseDownPassword = (event) => {
        event.preventDefault();
      };
    const [profile,setProfile] = useState({
        file: '',
        imagePreviewUrl: 'https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png',
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
      const handleChanges =event=>{
          setValues({...values,[event.target.name]:event.target.value})
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
    <h2 className="mt-4">{`${values.firstName } ${values.lastName}`}</h2>
        			</div>
        		</div>
            </div>
        </div>
        <div className="col-md-8 well" id="rightPanel">
            <div className="row">
    <div className="col-md-12 pb-4">
    	<form role="form ">
			<h2 className="text-center mt-5">Add Contact</h2>
			<hr className="colorgraph" />
			<div className="row">
				<div className="col-xs-12 col-sm-6 col-md-6">
					<div className="form-group">
                        <TextField   id="outlined-basic" label="First Name" name="firstName" variant="outlined" size="large"  style={{width:"100%"}}  onChange={handleChanges} />
                        {/* <input type="text" name="first_name" id="first_name" className="form-control input-lg" placeholder="First Name" tabindex="1" /> */}
					</div>
				</div>
				<div className="col-xs-12 col-sm-6 col-md-6">
					<div className="form-group">
                    <TextField value={values.lastName} id="outlined-basic" type="email"  name="lastName"  label="Last Name" variant="outlined" size="large"  style={{width:"100%"}} onChange={handleChanges}/>

						{/* <input type="text" name="last_name" id="last_name" className="form-control input-lg" placeholder="Last Name" tabindex="2" /> */}
					</div>
				</div>
			</div>
			<div className="form-group">
            <TextField value={values.email} id="outlined-basic" name="email"  label="Email" variant="outlined" size="large" style={{width:"100%"}} onChange={handleChanges}/>

				{/* <input type="email" name="email" id="email" className="form-control input-lg" placeholder="Email Address" tabindex="4" /> */}
			</div>
            <div className="form-group">
            <TextField value={values.phoneNumber} id="outlined-basic" name="phoneNumber"  label="Phone Number" variant="outlined" size="large" style={{width:"100%"}} onChange={handleChanges}/>

				{/* <input type="email" name="email" id="email" className="form-control input-lg" placeholder="Email Address" tabindex="4" /> */}
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





