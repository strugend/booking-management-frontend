import React, { useContext } from 'react';

import UpgradeForm from './1-Upgrage-account-Form/UpgradeForm';
import BillingForm from './2-Billing-details-Form/BillingForm';
import ReviewForm from './3-Review-&-pay-Form/ReviewForm';
import { multiStepContext } from './StepContext';

import { Stepper, StepLabel, Step } from '@mui/material';


const cssStyles = {
  width: "100%",
  padding: '2rem 0px',
  display: "flex",
  flexDirection: 'column',
  justifyContent: "space-around",
  alignItems: "center",
  background: 'rgba(0, 0, 0, 0.9)',
}



function MergeAllForms() {
  // -- Getting data from the "multiStepContext" as useContext;
  const { currentStep, finalData } = useContext(multiStepContext)

  const showStep = (step) => {
    switch (step) {
      case 1:
        return (<UpgradeForm />);
      case 2:
        return (<BillingForm />);
      case 3:
        return (<ReviewForm />);
      default:
        return ("No form is available");
    }
  }



  return (
    <div>
      <div style={cssStyles}>
        <Stepper style={{ width: '500px', marginBottom: '10px' }} activeStep={currentStep - 1} orientation='horizontal'>
          <Step>
            <StepLabel></StepLabel>
          </Step>

          <Step>
            <StepLabel></StepLabel>
          </Step>

          <Step>
            <StepLabel></StepLabel>
          </Step>
        </Stepper>

        {showStep(currentStep)}

      </div>
    </div>
  )
}

export default MergeAllForms;