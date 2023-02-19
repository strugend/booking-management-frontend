import React from 'react';
import {AppBar,Box,Toolbar,Typography,Button,IconButton,Card,CardActions,CardContent,Container,TextField,InputLabel,FormHelperText,MenuItem,FormControl,Select} from '@mui/material';
import { alpha, rgbToHex, styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import Radio from '@mui/material/Radio';
import {useNavigate} from 'react-router-dom';



export default function LoginQ1() {

    const [selectedValue, setSelectedValue] = React.useState('b');//we have used the useState hook to implement the dot button and to make that glow
    const navigate = useNavigate();//the use navigate hook to render through the react router pages.

    const [industry, setIndustry] = React.useState('');

    const handleChange1 = (event) => {
        setIndustry(event.target.value);
    };

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
  return (
    <div>
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
            <Card sx={{ minWidth: 275 }} style={{height: "100%",display: "flex",justifyContent: "center",alignItems: "center",padding: "10px",borderRadius:"5%"}}>
            <CardContent>
              {/*for the radio button we have used Radio component  */}
            <Radio {...controlProps('a')} size="small"/>
            <Radio {...controlProps('b')} size="small" style={{color:"#4F1AFF"}}/>
            <Radio {...controlProps('c')} size="small"/>
            <Typography variant="h4" gutterBottom style={{marginTop:"10%",color:"#232E35S",font:"28px sans-serif"}}>
                 Great to Meet You.
            </Typography>
            <Typography variant='body1' gutterBottom style={{alignItems:"flex-start",display:"flex",marginLeft:"10px"}}>
                What industry are you in?
            </Typography>

            <Select
                native
                labelId="demo-simple-select-label"
                id="demo-simple-select bootstrap-input"
                value={industry}
                // label="Please Select"
                onChange={handleChange1}
                style={{width:"100%",height:"40px",borderRadius:"10px",border:"1px solid white"}}
                
            >
              {/*for the option group we have used the option component  */}
                {/* <option aria-label="None" value="" /> */}
                <option value={0}>Please Select</option>
                <optgroup label="SaaS/Technology/Software">
                    
                    <option value={1}>Customer Success</option>
                    <option value={2}>Design</option>
                    <option value={3}>Developer</option>
                    <option value={4}>Management</option>
                    <option value={5}>Recruitment</option>
                    <option value={6}>Sales & Marketing</option>
                </optgroup>
                <optgroup label="Education">
                    <option value={7}>Accelerator</option>
                    <option value={8}>Coaching</option>
                    <option value={9}>Private Tutoring</option>
                    <option value={10}>School/Teacher</option>
                    <option value={11}>University/College</option>
                </optgroup>
                <optgroup label="Professional and Business Services">
                    <option value={12}>Health Services</option>
                    <option value={13}>Financial Advisory</option>
                    <option value={14}>Consultancy</option>
                    <option value={15}>Legal and Professional service</option>
                </optgroup>
                <optgroup label="Consumer Services">
                    <option value={16}>Creative Arts</option>
                    <option value={17}>Faith Organisation</option>
                    <option value={18}>Non Profit / NGO / Government</option>
                    <option value={19}>Real Estate</option>
                    <option value={20}>Retail</option>
                    <option value={21}>Small Business / Sole Trader</option>
                </optgroup>
                <option value={22}>Other</option>
                <FormHelperText>Required</FormHelperText>
            </Select>

            <Typography variant="body2" gutterBottom style={{alignItems:"flex-start",display:"flex",marginLeft:"10px",marginTop:"5px"}}> 
                This helps us share the best resources for your needs.
            </Typography>
            <Button variant="contained" style={{width:"100%",borderRadius:"20px",backgroundColor:"#4F1AFF",marginTop:"20px",marginBottom:"30px"}}>
                Next
            </Button>
            </CardContent>
            </Card>
        </Container>
      </div>
    </div>
  )
}