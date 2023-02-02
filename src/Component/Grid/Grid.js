import './Grid.css'
import React from 'react';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import { Button, FormControlLabel, Radio, RadioGroup } from '@mui/material';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import EventIcon from '@mui/icons-material/Event';



const Grid = () => {
  return (
    <div className='container'>
      <div className='main1'>
        <p>Grid Display</p>
        <QuestionMarkIcon />
      </div>
      <div className='main2'>
        <p>show availability in increments of </p><select>
          <option>1 hour</option>
          <option>2 hour</option>
          <option>3 hour</option>
        </select>
      </div>
      <div className='main3'>
        <h3>Booking duration</h3>
        <RadioGroup defaultValue="fixed" name="radio-buttons-group">

          <FormControlLabel value='fixed' label="Fixed" control={<Radio sx={{ color: "gray" }} />} />
          <select className='sm'>
            <option>1 hour</option>
            <option>2 hour</option>
            <option>3 hour</option>
          </select>

          <FormControlLabel value='custom' label="Booker can choose duration " control={<Radio sx={{ color: "gray" }} />} />
        </RadioGroup>
      </div>
      <div className='main4' ><EventIcon color='primary' /><div className='text'><h3>Add padding between bookings</h3>
        <p> Add padding between bookings and existing  events </p><p>on your calender so you're not booked</p><p>back to back<Button color='primary'>Try it now</Button></p>
      </div><KeyboardArrowRightIcon />
      </div>
      <div className='main4' ><EventIcon color='primary' /><div className='text'><h3>Group Bookings</h3>
        <p>let up to so people book into the same time slot </p><Button color='primary'>Try it now</Button>
      </div><KeyboardArrowRightIcon />
      </div>
      <div className='main5'>
        <div >
          <div className='main1'>
            <p>Min booking notice</p>
            <QuestionMarkIcon /></div>
          <div className='input'>
            <input type="text" defaultValue='2' />
            <select>
              <option>hour</option>
              <option>Minute</option>
              <option>second</option>
            </select>
          </div>  </div>
        <div >
          <div className='main1'>
            <p>Max Advance booking </p>
            <QuestionMarkIcon /></div>
          <div className='input'>
            <input type="text" defaultValue='2' />
            <select>
              <option>hour</option>
              <option>Minute</option>
              <option>second</option>
            </select>
          </div>
        </div>
      </div>
      <div className='main6'>

        <h3>Week Start</h3> <div className='flex'>
          <select className='select'>
            <option>Today</option>
            <option>Tommarow</option>
            <option>second</option>
          </select>
          <Button className='btn' color='primary'>Save All Changes</Button>
        </div>
      </div>
    </div>
  )
}
export default Grid;