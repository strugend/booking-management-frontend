import React, { useState} from 'react';
import App from '../../../../../App';

export const multiStepContext = React.createContext();


function StepContext() {
    const [currentStep, setCurrentStep] = useState(1);
    const [userData, setUserData] = useState([]);
    const [finalData, setFinalData] = useState([]);
    const [showForm, setShowForm] = useState(false);

    const submitData = () => {}

    
    return (
        <>
            <multiStepContext.Provider value={{currentStep, setCurrentStep, userData, setUserData, finalData, setFinalData, showForm, setShowForm, submitData}}  >
                <App/>
            </multiStepContext.Provider>
        </>
    )
}

export default StepContext;