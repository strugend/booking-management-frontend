import React from 'react';
import {AppBar,Box,Toolbar,Typography,Button,IconButton,Card,CardActions,CardContent,Container,TextField} from '@mui/material';
import { alpha, rgbToHex, styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import Radio from '@mui/material/Radio';
import {useNavigate} from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';


//the below code is for the input box we have and to make that input box glow we have this BootstrapInput component
//which is one of the Material UI component
const BootstrapInput = styled(InputBase)(({ theme }) => ({
    'label + &': {
      marginTop: theme.spacing(3),
    },
    '& .MuiInputBase-input': {
      borderRadius: 4,
      position: 'relative',
      backgroundColor: theme.palette.mode === 'light' ? '#fcfcfb' : '#2b2b2b',
      border: '1px solid #4F1AFF',//ced4da
      fontSize: 16,
      width: '90%',
      padding: '10px 12px',
      transition: theme.transitions.create([
        'border-color',
        'background-color',
        'box-shadow',
      ]),
      // Use the system font instead of the default Roboto font.
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      '&:focus': {
        boxShadow: "rgba(79, 26, 255, 0.5)",//rgba(79, 26, 255, 0.5)
        borderColor: "#4F1AFF",
      },
    },
  }));


// const darkTheme = createTheme({
//   palette: {
//     mode: 'dark',
//   },
// });

export default function LoginQ1() {

    const [selectedValue, setSelectedValue] = React.useState('a'); //we have used the useState hook to implement the dot button and to make that glow
    const navigate = useNavigate();//the use navigate hook to render through the react router pages.
    const handleChange = (event) => {
      setSelectedValue(event.target.value);
    };
  
    const controlProps = (item) => ({
      checked: selectedValue === item,
      onChange: handleChange,
      value: item,
      name: 'size-radio-button-demo',
      inputProps: { 'aria-label': item },
    });

    function navigateToNextPage(){
      // <Link to={<SignUp/>}/>
      navigate('/loginq2');//when the user clicks the next button he will be redirected to the next question page 
  };
  return (
    <div>
      {/* <ThemeProvider theme={darkTheme}>
      <CssBaseline /> */}
        <div>
          {/*the app bar code starts here*/}
      <AppBar position="static" style={{backgroundColor:"#1B2749",width:"100%",height:"50px",alignItems: "center",display:"flex"}}>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} style={{display:"flex",alignItems: "center",textAlign:"center"}}>
            YCBM
          </Typography>
      </AppBar>
      {/*the app bar code ends here*/}
      </div>
      <div style={{backgroundColor:"#F4F5F7",width:"100%",height:"740px",display: "flex",justifyContent: "center",alignItems: "center",}}>
        <Container maxWidth="sm" style={{backgroundColor:"#FFFFF"}}>
            <Card sx={{ minWidth: 275 }} style={{height: "100%",display: "flex",justifyContent: "center",alignItems: "center",padding: "24px",borderRadius:"5%"}}>
            <CardContent>
              {/*for the radio button we have used Radio component  */}
            <Radio {...controlProps('a')} size="small" style={{color:"#4F1AFF"}} />
            <Radio {...controlProps('b')} size="small" style={{color:"#4F1AFF"}}/>
            <Radio {...controlProps('c')} size="small" style={{color:"#4F1AFF"}}/>
            <Typography variant="h4" gutterBottom style={{marginTop:"10%",color:"#232E35S",font:"28px sans-serif"}}>
                 Welcome to YCBM
            </Typography>
            <Typography variant='body1' gutterBottom style={{alignItems:"flex-start",display:"flex",marginLeft:"30px"}}>
                What's your name?
            </Typography>
            {/* <TextField error type='text' id="fullWidth" fullWidth // size="small" helperText="Please enter your name" style={{width:"90%",borderRadius:"8px",border:"1px solid e0e6ea"}} required/> */}
            <BootstrapInput type='text' error helperText="Please enter your name" id="bootstrap-input" style={{width:"90%",borderRadius:"8px",border:"1px solid e0e6ea"}} required />
            <Typography variant="body2" gutterBottom style={{alignItems:"flex-start",display:"flex",margin:"10px 0px 20px 30px"}}> 
                 So we know what to call you
            </Typography>
            <Button variant="contained" style={{width:"90%",borderRadius:"10px",backgroundColor:"#4F1AFF"}} onClick={navigateToNextPage}>
                Next
            </Button>
            <Typography variant="body2" gutterBottom style={{alignItems:"flex-start",display:"flex",marginLeft:"20px",marginTop:"20px"}}> 
            By continuing, you agree to YouCanBookMe Terms & Privacy policy.
            </Typography>
            </CardContent>
            </Card>
        </Container>
      </div>
      {/* </ThemeProvider> */}
    </div>
    
  )
}
