import React from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Card from '@mui/material/Card';
import { styled } from '@mui/material/styles';
import { CardActions, Grid } from '@mui/material';
import Switch from '@mui/material/Switch';
import Button from '@mui/material/Button';
import Changes from './changes_in_booking3'
import { grey, purple } from '@mui/material/colors';



const theme = createTheme({
    palette: {
            primary: {
              main: purple[100],
            },
            secondary: {
              main: '#616161',
            },
            mode: 'dark'
          },
  });
  
const Div = styled('div')(({ theme }) => ({
...theme.typography.button,
backgroundColor: theme.palette.background.paper,
padding: theme.spacing(1),
}));


function Booking_options_3(){
    const [state, setState] = React.useState(false);


    return(
        <div>
         <ThemeProvider theme={theme}>      
            <Card variant="outlined" textAlign='center' sx={{maxWidth: 600}}>
                <Grid container spacing={0}>
                    <Grid item xs={10} md={8}>
                        <Div sx={{textAlign: "left"}}>{"Calculate booking prices & take payments"}</Div>
                    </Grid>
                    <Grid item xs = {2} md = {4}>
                        <Switch onChange={()=>setState(!state)}/>
                    </Grid>
                </Grid>
                {
                state?<Changes />:null
                }
                    <CardActions style={{justifyContent: 'center',  marginTop: 10, marginLeft: 40, marginRight: 40}}>
                    <Button  
                    variant="outlined" 
                    size="large" 
                    backgrounColor = "secondary"
                    sx={{
                        width: 1,
                        borderRadius: 5,
                    }}>Save Changes</Button>
                </CardActions>
            </Card>
        </ThemeProvider>  
        </div>
    )
}

export default Booking_options_3;
