import React from 'react';
import './Availability.css'
import { Button, FormControlLabel, Radio, RadioGroup } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import EventIcon from '@mui/icons-material/Event';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const Availability = () => {
  return (
    <div className='container'>
      <div >
        <h2>what type of Availability do you have ?</h2>
        <div className='main20'>
          <div className='main21'>

            <RadioGroup defaultValue="repeat"
              name="radio-buttons-group">

              <FormControlLabel value="repeat" className='margin' label="Repeating Availability" control={<Radio sx={{ color: "gray" }} val />} />
              <h5 >OR</h5>
              <FormControlLabel value="custom" className='margin' label="Custom Availability" control={<Radio sx={{ color: "gray" }} />} />
            </RadioGroup>

          </div>
          <div className='flexSpaceBetween1'>
            <h2>Set the hours you are available</h2>
            <Button color='primary'>edit</Button>
          </div>
          <div className='flexSpaceBetween'><p>8:00 AM   - 5:00PM </p><p>Mon - Fri</p>  </div>
          <div className='flexSpaceBetween'><p>unavailable</p><p>sun , sat </p></div>
        </div>
        <div className='main22'><h4>Break ?</h4><div className='bt'><p>Between</p>
          <select name="" id="">
            <option value="">e-g 11:00 AM</option>
            <option value="">e-g 11:00 AM</option>
            <option value="">e-g 11:00 AM</option>
            <option value="">e-g 11:00 AM</option>
            <option value="">e-g 11:00 AM</option>
            <option value="">e-g 11:00 AM</option>

          </select>
          <select name="" id="">
            <option value="">e-g 11:00 AM</option>
            <option value="">e-g 11:00 AM</option>
            <option value="">e-g 11:00 AM</option>
            <option value="">e-g 11:00 AM</option>
            <option value="">e-g 11:00 AM</option>
            <option value="">e-g 11:00 AM</option>

          </select>
          <ClearIcon /></div> </div>
        <div className='main23' ><EventIcon color='primary' /><div className='text'><h3>Fixed start and end date </h3>
          <p>set a fixed start and/or end date to offer a </p><p>specific range of datesa for booking<Button color='primary'>Try it now</Button></p>
        </div><KeyboardArrowRightIcon />
        </div>
        <Button className='btn1'>No Changes to save</Button>
      </div>
    </div>
  )
}

/* <VerifiedRoundedIcon color="primary"/> */
export default Availability;
