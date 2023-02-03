import React, { useState, useContext } from 'react';
import style from './UpgradeForm.module.css';

// -- Below is the "Parent" component form which we are passing data to its children with the help of "useContext" hook.
import { multiStepContext } from '../StepContext';

// -- Material UI -- 
import HttpsOutlinedIcon from '@mui/icons-material/HttpsOutlined';

// -- Icons --
import ClearIcon from '@mui/icons-material/Clear';
import { FormControlLabel, RadioGroup, Radio } from '@mui/material';




function UpgradeForm() {
  const [value, setValue] = useState('');
  const handleChange = (event) => {
    setValue(event.target.value);
  }
  // console.log(value);


  // -- Using "useContext" data to move to the next form.
  const { setCurrentStep, userData, setUserData, setShowForm } = useContext(multiStepContext);

  return (
    <div>

      <div className={style.content} >
        <div className={style.functional_icons}>
          <ClearIcon className={style.clear_icon} onClick={() => setShowForm(false)} />
        </div>

        <h3>Upgrade your account</h3>
        <p>You're linking to  <span>1 calendar</span></p>

        {/* ------------------------------   Select-Currency   ------------------------------  */}
        <div className={style.select_currency}>
          <label for='currency' >Choose your currency </label>
          <select name="currency" id="currency">
            <option value="₹">₹ - INR Rupee</option>
            <option value="$">$ - US Dollar</option>
            <option value="£">£ - British Pound</option>
          </select>
        </div>



        {/* ------------------------------   Choose-plan   ------------------------------  */}
        <div className={style.choose_plan} >
          <h3>Choose your plan</h3>

          <RadioGroup name='job-experience-group' value={value} onChange={handleChange} >

            <FormControlLabel
              className={style.radio_box}
              control={<Radio size='small' />}
              label={
                <div className={style.radio_btn_info}>
                  <h3>Monthly - $10 </h3>
                  <p>$10 per calander per month, billed every month.</p>
                </div>}
              // value={userData.['$10 / month']}
              value='$10 / month'
              onClick={(e) => setUserData({ ...userData, amount_pay: e.target.value })} >
            </FormControlLabel>

            <FormControlLabel
              className={style.radio_box}
              control={<Radio size='small' />}
              label={
                <div className={style.radio_btn_info}>
                  <h3>Yearly - $108 <span>Save 10%</span> </h3>
                  <p>$9 per calander per month, billed every year.</p>
                </div>}
              // value={userData.['$108 / year']}
              value='$108 / year'
              onClick={(e) => setUserData({ ...userData, amount_pay: e.target.value })} >
            </FormControlLabel>

            <FormControlLabel
              className={style.radio_box}
              control={<Radio size='small' />}
              label={
                <div className={style.radio_btn_info}>
                  <h3>2 Years - $192 <span>Save 20% - best value!</span> </h3>
                  <p>$8 per calander per month, billed every 2 years.</p>
                </div>}
              // value={userData.['$192 for 2 years.' ]}
              value='$192 for 2 years.'
              onClick={(e) => setUserData({ ...userData, amount_pay: e.target.value })}>
            </FormControlLabel>

          </RadioGroup>

        </div>


        {/* ------------------------------   Footer   ------------------------------  */}
        <div className={style.footer}>
          <button onClick={() => setCurrentStep(2)} >Continue to billing details</button>
          <p>
            <HttpsOutlinedIcon className={style.lock_icon} />
            This is a secure 256-bit SSL encrypted page.
          </p>
          <p>This form is protected by reCAPTCHA and the Google <span>Privacy Policy</span> and <span>Terms of Service</span> apply.</p>
        </div>

      </div>
    </div>

  )
}

export default UpgradeForm;