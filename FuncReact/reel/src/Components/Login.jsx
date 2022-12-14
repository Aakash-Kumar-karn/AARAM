import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import insta from '../Assets/Instagram.JPG'
// import { makeStyles } from '@mui/material/styles';
import { makeStyles } from '@material-ui/core/styles';
import './Login.css'
import TextField from '@mui/material/TextField';
import Alert from '@mui/material/Alert';
// import { ClassNames } from '@emotion/react';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
// import { createUseStyles } from "react-jss";
import { Link,useNavigate } from 'react-router-dom';
import { CarouselProvider, Slider, Slide, Image } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import Img1 from '../Assets/img1.jpg'
import Img2 from '../Assets/img2.jpg'
import Img3 from '../Assets/img3.jpg'
import Img4 from '../Assets/img4.jpg'
import Img5 from '../Assets/img5.jpg'
import bg from "../Assets/insta.png"
import { useContext,useState } from 'react';
import { AuthContext } from '../Context/AuthContext';
export default function Login() {

  const store = useContext(AuthContext);
  console.log(store)
  const useStyles = makeStyles({
    text1 : {
      color :'grey' ,
      textAlign : 'center'
    },
    card2: {
      height : '6vh',
      marginTop: "1%",
    },
    text2:{
        textAlign:'center'
    }
  })
  const classes = useStyles();
  const [email , setEmail] = useState('')
  const [password , setPassword] = useState('')
  const [error , setError] = useState('')
  const [loading , setLoading] = useState(false)
  const {Login} = useContext(AuthContext)

  // const history = useHistory()
  const navigate = useNavigate()

  const handleClick = async ()=>{

    try {

      setError('')
      setLoading(true)

      let res = await Login(email , password)

      setLoading(false)
      navigate('/feed')
      
    } catch (error) {
       setError(true)
       setTimeout(()=>{
        setError('')
       } , 2000)

       setLoading(false)
    }
      
      
  }


  return (
    <div className="loginWrapper">
       <div className="imgcar" style={{ backgroundImage: `url(` + bg + `)`, backgroundSize: 'cover' }}>
        <div className="car">
        <CarouselProvider
         visibleSlides={1}
         totalSlides={5}
        //  step={3}
         naturalSlideWidth={238}
         naturalSlideHeight={423}
         hasMasterSpinner
         isPlaying={true}
         infinite={true}
         dragEnabled={false}
         touchEnabled={false}
      >
         <Slider>
              <Slide index={0}>
                <Image src={Img1} />
              </Slide>
              <Slide index={1}>
                <Image src={Img2} />
              </Slide>
              <Slide index={2}>
                <Image src={Img3} />
              </Slide>
              <Slide index={3}>
                <Image src={Img4} />
              </Slide>
              <Slide index={4}>
                <Image src={Img5} />
              </Slide>
            </Slider>
      </CarouselProvider>
        </div>
       </div>
        <div className="loginCard">
        
        <Card variant="outlined">
        <div className="insta-logo">
          <img src= {insta} alt="" />
        </div>
        <CardContent>
        {error != "" && <Alert severity = "error">{error}</Alert>}   
         <TextField id="outlined-basic" label="Enter Email" variant="outlined" fullWidth={true} margin="dense" size = "small" value={email} onChange={(e)=>setEmail(e.target.value)}  />
          <TextField id="outlined-basic" label="Password" variant="outlined" fullWidth={true} margin="dense" size = "small" value={password} onChange={(e)=>setPassword(e.target.value)} />
          <Typography  className={classes.text2}  variant="subtitle1" color="primary">
    Forget Password ? 
    </Typography>
        </CardContent>
        <CardActions>
         <Button fullWidth={true} variant="contained" color="primary" onClick={handleClick} disabled={loading}>
         LOG IN
        </Button>
       </CardActions>
      
    </Card>
<Card variant="outlined" className={classes.card2}>
  <CardContent >
    <Typography  className={classes.text1}  variant="subtitle1">
    Don't have an account? <Link to="/Signup" style={{textDecoration:'none'}}>Sign up</Link>
    </Typography>
  </CardContent>
</Card>

        </div>
    </div>
  );
}
