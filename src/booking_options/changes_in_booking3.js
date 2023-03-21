import React from "react";
import { styled } from '@mui/material/styles';
import { Grid, CardActions } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


const Div = styled('div')(({ theme }) => ({
    ...theme.typography.button,
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(1),
    }));

function Changes(){

    const [Currency, setCurrency] = React.useState('');
    const handleChangeCurrency = (event) => {
      setCurrency(event.target.value);
    };
    const [amount, setAmount] = React.useState('');
    // console.log(amount);
    const handleChangeAmount= (event) => {
      setAmount(event.target.value);
    };


    return(
        <div>
    <Grid container spacing={0}>
        <Grid item xs={6} md={6}>
            <Div>{"Currency"}</Div>
        </Grid>
        <Grid item xs={6} md={6}>
            <Div>{"Price"}</Div>
        </Grid>
    </Grid>
    <Grid container spacing={0}>
        <Grid xs={6} md={6}>
            <FormControl sx={{ width: 2/3}}>
                <InputLabel id="demo-simple-select-label">Currency</InputLabel>
                <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={Currency}
                label="Currency"
                onChange={handleChangeCurrency}
                placeholder = "Enter age"
                >
                <MenuItem value={1}>US_Dollar</MenuItem>
                <MenuItem value={2}>Indian Rupee</MenuItem>
                <MenuItem value={3}>Euro</MenuItem>
                </Select>
            </FormControl>
        </Grid>
        <Grid xs={6} md={6}>
            <FormControl sx={{ width: 2/3}}>
                <TextField
                    label="Price-per-slot"
                    // value={values.numberformat}
                    // onChange={handleChange}
                    name="numberformat"
                    id="formatted-numberformat-input"
                    // InputProps={{
                    // inputComponent: NumberFormatCustom,
                    onChange={handleChangeAmount}
                    // }}
                    variant="standard"
                />
            </FormControl>
        </Grid>
    </Grid>
    <CardActions style={{justifyContent: 'center', marginTop: 30, marginLeft: 40, marginRight: 40}}>
    <Button  
        variant="outlined" 
        size="large" 
        backgroundColor = "secondary"
        endIcon = <ArrowForwardIosIcon />
        sx={{
        width: 1,
        borderRadius: 5,
        fontSize: 15,
        }}>Take payments for your booking</Button>
    </CardActions>
    </div>
    )
}
export default Changes;