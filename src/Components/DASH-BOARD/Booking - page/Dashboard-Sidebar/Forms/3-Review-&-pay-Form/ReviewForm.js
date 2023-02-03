import React, { useContext } from 'react';
import style from './ReviewForm.module.css';

// -- Below is the "Parent" component form which we are passing data to its children with the help of "useContext" hook.
import { multiStepContext } from '../StepContext';

// -- Icons --
import ClearIcon from '@mui/icons-material/Clear';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import HttpsOutlinedIcon from '@mui/icons-material/HttpsOutlined';


function ReviewForm() {
    // -- Using "useContext" data to move to the next form.
    const { setCurrentStep, userData, setUserData, submitData, setShowForm } = useContext(multiStepContext);

    return (
        <div>
            <div className={style.content} >
                <div className={style.functional_icons}>
                    <ArrowBackIcon className={style.back_icon} onClick={() => setCurrentStep(2)} />
                    <ClearIcon className={style.clear_icon} onClick={() => setShowForm(false)} />
                </div>

                <h3>Review and pay</h3>
                <p>What happens if I change my mind?</p>


                {/*   ------------------------------   Form   ------------------------------ */}
                <form className={style.card_details} >
                    <div className={style.flex_column}>
                        <label htmlFor="CardNum">Card number</label>
                        <input type="number" placeholder='1234 1234 1234 1234' value={userData['cardNumber']} onChange={(e) => setUserData({ ...userData, cardNumber: e.target.value })} />
                    </div>

                    <div className={style.flex_row}>
                        <div className={style.flex_column}>
                            <label htmlFor="ExpiryDate">Expiration Date</label>
                            <input className={style.left} type="month" placeholder='MM / YY' value={userData['expiryDate']} onChange={(e) => setUserData({ ...userData, expiryDate: e.target.value })} />
                        </div>
                        <div className={style.flex_column}>
                            <label htmlFor="cvcNum">CVC number</label>
                            <input className={style.right} type="number" placeholder='CVC' value={userData['CVCnumber']} onChange={(e) => setUserData({ ...userData, CVCnumber: e.target.value })} />
                        </div>
                    </div>
                </form>


                {/*   ------------------------------   Payment-Summary   ------------------------------ */}
                <div className={style.payment_summary}>

                    <div className={style.summary}>
                        <div>
                            <h3>Summary</h3>
                            <p>1 calendar x $10 x 1 month</p>
                        </div>
                        <h4>$10</h4>
                    </div>

                    <div className={style.total} >
                        <h3>Total</h3>
                        <h3>$10</h3>
                    </div>
                </div>


                {/*   ------------------------------   Footer   ------------------------------ */}
                <div className={style.footer}>
                    <button onClick={() => submitData}>Upgrade and pay securely</button>
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

export default ReviewForm;