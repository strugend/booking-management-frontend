import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';



function Booking_options_2(){
    const [state, setState] = React.useState('');
    const handleChange = () => {
        setState();
      };
    return(
        <div>
            <ThemeProvider theme={darkTheme}>      
                <Card variant="outlined" sx={{maxWidth: 600}}>
                <React.Fragment>
    <CardContent>
    <Typography sx={{ fontSize: 20, textAlign:'left', marginLeft: "12px" }} color="text.secondary" gutterBottom>
        After booking is made
    </Typography>
    <Grid container spacing={0}>
    <Grid item xs={0} md={0}>
    <Checkbox {...label} defaultChecked/>
    </Grid>
    <Grid item xs={6} md={4}>
    <Typography sx={{ fontSize: 18, marginTop: "10px", marginBottom:"15px"}} color="text.secondary" gutterBottom>
        Display confirmation
    </Typography>
    </Grid>
    </Grid>
    <TextField
          id="filled-multiline-static"
          multiline
          rows={8}
          defaultValue={state}
          variant="filled"
          fullWidth = "true"
          label= "Write a confirmation message"
          onChange={handleChange}
        />
    </CardContent>
    <CardActions>
    <Button size="large" variant="outlined" href="#" fullWidth = "true" color="inherit">Route to new URL</Button>
    </CardActions>
</React.Fragment>

                </Card>
            </ThemeProvider>  
    </div>
    )
    }
const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };


export default Booking_options_2;

