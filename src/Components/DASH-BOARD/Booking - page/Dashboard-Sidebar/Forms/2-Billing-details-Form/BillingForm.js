import React, { useContext } from 'react';
import style from './BillingForm.module.css';

// -- Below is the "Parent" component form which we are passing data to its children with the help of "useContext" hook.
import { multiStepContext } from '../StepContext';

// -- List of all "Country" names inside the "select" tag for option to choose.
import AllCountryName from './AllCountryName';

// -- Icons --
import ClearIcon from '@mui/icons-material/Clear';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import HttpsOutlinedIcon from '@mui/icons-material/HttpsOutlined';



function BillingForm() {
    // const [values, setValues] = useState({
    //     organization: "",
    //     fname: "",
    //     lname: "",
    //     address: "",
    //     city: "",
    //     state: "",
    //     postcode: "",
    // });
    // const [submitted, setSubmitted] = useState(false);
    // const handleOnSubmit = (event) => {
    //     event.preventDefault();
    //     console.log(values);
    //     setSubmitted(true);
    // }


    // -- Using "useContext" data to move to the next form.
    const { setCurrentStep, userData, setUserData, setShowForm } = useContext(multiStepContext);

    return (
        <div>
            <div className={style.content} >
                <div className={style.functional_icons}>
                    <ArrowBackIcon className={style.back_icon} onClick={() => setCurrentStep(1)} />
                    <ClearIcon className={style.clear_icon} onClick={() => setShowForm(false)} />
                </div>

                <h3>Enter your billing details</h3>
                <form className={style.form_details} >
                    <div className={style.flex_column}>
                        <label htmlFor="Organization">Organization name <span>(Optional)</span> </label>
                        <input type="text" value={userData['organization']} onChange={(e) => setUserData({ ...userData, organization: e.target.value })} required />
                    </div>

                    <div className={style.flex_row}>
                        <div className={style.col_1}>
                            <label htmlFor="First name">First name</label>
                            <input type="text" value={userData['fname']} onChange={(e) => setUserData({ ...userData, fname: e.target.value })} required />
                            {/* {submitted && !values.fname ? <span className={style.error_message} >Enter your First name</span> : null} */}
                        </div>

                        <div className={style.col_2}>
                            <label htmlFor="Last name">Last name <span>(Optional)</span> </label>
                            <input type="text" value={userData['lname']} onChange={(e) => setUserData({ ...userData, lname: e.target.value })} required />
                        </div>
                    </div>

                    <div className={style.flex_column}>
                        <label htmlFor="Address">Address </label>
                        <input type="text" value={userData['address']} onChange={(e) => setUserData({ ...userData, address: e.target.value })} required />
                        {/* {submitted && !values.address ? <span className={style.error_message} >Enter your Address</span> : null} */}
                    </div>

                    <div className={style.flex_row}>
                        <div className={style.col_1}>
                            <label htmlFor="City">City</label>
                            <input type="text" value={userData['city']} onChange={(e) => setUserData({ ...userData, city: e.target.value })} required />
                            {/* {submitted && !values.city ? <span className={style.error_message} >Enter your first City</span> : null} */}
                        </div>

                        <div className={style.col_2}>
                            <label htmlFor="State">State/Region</label>
                            <input type="text" value={userData['state']} onChange={(e) => setUserData({ ...userData, state: e.target.value })} required />
                            {/* {submitted && !values.state ? <span className={style.error_message} >Enter your State</span> : null} */}
                        </div>
                    </div>

                    <div className={style.flex_row}>
                        <div className={style.col_1}>
                            <label htmlFor="Postcode">Zip /Postcode</label>
                            <input type="text" value={userData['postcode']} onChange={(e) => setUserData({ ...userData, postcode: e.target.value })} required />
                            {/* {submitted && !values.postcode ? <span className={style.error_message} >Enter your Postcode</span> : null} */}
                        </div>

                        <div className={style.col_2}>
                            <label htmlFor="Country">Country</label>
                            <AllCountryName />
                        </div>
                    </div>

                    <button onClick={() => setCurrentStep(3)}>Continue to payment details</button>
                </form>



                {/* ------------------------------   Footer   ------------------------------  */}
                <div className={style.footer}>
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

export default BillingForm;