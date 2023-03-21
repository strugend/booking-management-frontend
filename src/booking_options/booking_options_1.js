import React from "react";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Card from '@mui/material/Card';
import Changes_in_booking1 from "./changes_in_booking1";
// Changes_in_booking1 include the reusebale component of the bookingform 1
import { CardActions, Grid } from "@mui/material";
import Typography from '@mui/material/Typography';
import Switch from '@mui/material/Switch';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const theme = createTheme({
    palette: {
            // primary: {
            //   main: purple[100],
            // },
            // secondary: {
            //   main: '#616161',
            // },
            mode: 'dark'
          },
  });

  //////////////////////////////////////// Note///////////////////////
//   these fields in the form are not editable as acc to excel sheet these input fields meintioned are 
//   not changeable or modifiable but for look replication purpose they have delete and overwrite button
/////////////////////////////////////////////////////////////////////


export default function Booking_options_1(){
// state of slider
const [state, setState] = React.useState(false);
// state of slider
  const handleClickOpen = () => {
    setState(true);
  };

  const handleClose = () => {
    setState(false);
  };

    return(
        <div>
        <ThemeProvider theme={theme}> 
        <Card variant="outlined" textAlign='center' sx={{maxWidth: 600}}>  
        <Changes_in_booking1 heading = "{FName} First Name" />  
        <Changes_in_booking1 heading = "{LName} Last Name"/> 
        <Changes_in_booking1 heading = "Email"/> 
        <Changes_in_booking1 heading = "Phone Number"/> 
        <Changes_in_booking1 heading = "Address"/> 
        
            <Grid container spacing={0}>
            <Grid item xs={10} md={10} sx={{textAlign: 'left'}}>
                <Typography variant="h6" gutterBottom paddingTop={2} paddingLeft={2}>
                    CAPTCHA Test
                </Typography>
            </Grid>
            <Grid item xs = {2} md = {2} marginTop={2}>
                <Switch defaultChecked onChange={handleClickOpen}/>
                <Dialog
                open={state}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                >
                <DialogTitle id="alert-dialog-title">
                    {"Switch off CAPTCHA test"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                    Switch off CAPTCHA test Upgrade to use Reduce any additional friction for customers making a booking by upgrading to switch off the CAPTCHA test
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} autoFocus>
                    Agree
                    </Button>
                </DialogActions>
                </Dialog>
            </Grid>
        </Grid>
        <CardActions style={{justifyContent: 'center',  marginTop: 10, marginLeft: 10, marginRight: 20}}>
                    <Button  
                    variant="outlined" 
                    size="large" 
                    sx={{
                        width: 1,
                        borderRadius: 3,
                    }}>Save Changes</Button>
                </CardActions> 

        </Card> 
        </ThemeProvider>
        </div>
    )
}