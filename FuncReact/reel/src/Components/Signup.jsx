import * as React from 'react';
import  {useState, useContext} from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import insta from '../Assets/Instagram.JPG'
// import { makeStyles } from '@mui/material/styles';
import { makeStyles } from '@material-ui/core/styles';
import './Signup.css'
import TextField from '@mui/material/TextField';
import Alert from '@mui/material/Alert';
// import { ClassNames } from '@emotion/react';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
// import { createUseStyles } from "react-jss";
import { Link,useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context/AuthContext';
import { database, storage } from '../firebase';
export default function Signup() {
  const useStyles = makeStyles({
    text1 : {
      color :'grey' ,
      textAlign : 'center'
    },
    card2: {
      height : '6vh',
      marginTop: "1%",
    },
  })
  const classes = useStyles();
 
  const [email , setEmail] = useState('')
  const [password , setPassword] = useState('')
  const [name , setName] = useState('')
  const [file , setFile] = useState(null)
  const [error , setError] = useState('')
  const [loading , setLoading] = useState(false)
  const {signup} = useContext(AuthContext)
  // const history = useHistory()
  const navigate = useNavigate()

   //onst handleClick=async()=>{
    const handleClick=async()=>{
      if(file==null)
      {
          // error show
          // remove
          setError("Please upload your profile Image");
          setTimeout(()=>{
              setError('')
          },2000)
          return;
      }
      try {
          setError("");
          setLoading(true);
         let userCredential= await signup(email, password);
         let uid = userCredential.user.uid;
      //    console.log(uid);
      // put 
          const uploadTask = storage.ref(`/users/${uid}/ProfileImage`).put(file);
      //    eventlistener
          uploadTask.on('state_changed', 
          // progress
(snapshot) => {
  // Observe state change events such as progress, pause, and resume
  // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
  var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
  console.log("Upload is " + progress + "% done");
}, 
(error) => {
  // Handle unsuccessful uploads
  setError("Failed to upload File")
},
//   success 
() => {
  uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
  //   console.log('File available at', downloadURL);
    database.users.doc(uid).set({
        email:email,
        userId:uid,
        fullName:name,
        createdAt:database.getTimeStamp(),
        profileUrl:downloadURL
    })
  });
}
);
          navigate("/feed")
        } catch(e) {
          setError("Failed to create an account "+e)
        }
  }
  return (
    <div className="signupWrapper">
        <div className="signupCard">
        
        <Card variant="outlined">
        <div className="insta-logo">
          <img src= {insta} alt="" />
        </div>
        <CardContent>
          <Typography className={classes.text1}  variant="subtitle1">
          Sign up to see photos and videos from your friends.
          </Typography>
          {error != "" && <Alert severity = "error">{error}</Alert>}
          <TextField id="outlined-basic" label="Email" variant="outlined" fullWidth={true} margin="dense" size = "small" value={email} onChange={(e)=>setEmail(e.target.value)}  />
          <TextField id="outlined-basic" label="Password" variant="outlined" fullWidth={true} margin="dense" size = "small" value={password} onChange={(e)=>setPassword(e.target.value)}/>
          <TextField id="outlined-basic" label="Full Name" variant="outlined" fullWidth={true} margin="dense" size = "small" value={name} onChange={(e)=>setName(e.target.value)}/>
          <Button color="secondary" fullWidth={true} varient = 'outlined' margin='dense' startIcon={<CloudUploadIcon/>} component = 'label'>
         Upload Profile Image
         <input type="file" accept = "image/*" hidden onChange={(e) => setFile(e.target.files[0])}/>
        </Button>
        </CardContent>
     
      <CardActions>
        <Button fullWidth={true} variant="contained" color="primary" disabled ={loading} onClick={handleClick}>
         Sign UP
        </Button>
      </CardActions>
      <CardContent>
          <Typography className={classes.text1}  variant="subtitle1">
          By signing up, you agree to our Terms , Data Policy and Cookies Policy .
          </Typography>
        </CardContent>
    </Card>
<Card variant="outlined" className={classes.card2}>
  <CardContent >
    <Typography  className={classes.text1}  variant="subtitle1">
  Having an account ? <Link to="/login" style={{textDecoration:'none'}}>Login</Link>
    </Typography>
  </CardContent>
</Card>

        </div>
    </div>
  );
}
