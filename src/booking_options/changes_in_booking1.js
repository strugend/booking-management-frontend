import React from "react";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import HeightIcon from '@mui/icons-material/Height';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteIcon from '@mui/icons-material/Delete';



function Changes_in_booking1(props){
    return(<div>
        <Paper
        component="form"
        sx={{ m: '15px 15px', display: 'flex', alignItems: 'center', width: 550, border: 1, borderBlockColor: 'grey'}}>
        <IconButton sx={{ p: '13px' }} aria-label="menu">
        <HeightIcon />
        </IconButton>
        <InputBase
        sx={{ ml: 1, flex: 1}}
        placeholder={props.heading}
        inputProps={{ readOnly: true, }}
        />
        <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
        <ModeEditIcon />
        </IconButton>
        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
        <IconButton color="primary" sx={{ p: '10px' }} aria-label="directions">
        <DeleteIcon />
        </IconButton>
        </Paper>
    </div>)
    
}

export default Changes_in_booking1;