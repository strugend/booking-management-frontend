import React, { useState } from 'react';
import style from './DashboardPopup.module.css';
import DashboardBookingPage from './Booking - page/DashboardBookingPage';

// -- Icons --
import ClearIcon from '@mui/icons-material/Clear';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';


function DashboardPopup({ trigger }) {
    const [showBookingPage, setShowBookingPage] = useState(false);

    return (
        <>
        {/* ---  Below I am using "Ternary-Operator" btwn "DashboardPopup" & "DashboardBookingPage" component as an "toggle" */}
            {
                showBookingPage
                    ? <DashboardBookingPage />

                    : <div className={style.container}>
                        <div className={style.content} >

                            <ClearIcon className={style.close_icon} onClick={() => trigger()} />

                            <div className={style.info}>
                                <h1>Create Your first booking page</h1>
                                <div className={style.input_1}>
                                    <label htmlFor="page_title">Booking page title</label>
                                    <input type="text" placeholder='Name' />
                                </div>

                                <div className={style.input_2}>
                                    <label htmlFor="page_link">Booking page link</label>
                                    <div className={style.inside_input_2}>
                                        <input type="text" placeholder='User Link' />
                                        <p>.youcanbookeme</p>
                                    </div>
                                    <p>Lowercase characters only please — no spaces or symbols</p>
                                </div>

                                <div className={style.fetch_data}>
                                    <h3>Booking page logo</h3>
                                    <button>
                                        <FileUploadOutlinedIcon /> Choose file
                                    </button>
                                </div>

                                <div className={style.footer}>
                                    <button onClick={() => setShowBookingPage(true)}>Create booking page</button>
                                    <p>Don't worry, you can update these details later on.</p>
                                </div>
                            </div>
                        </div>
                    </div>
            }
        </>
    )
}

export default DashboardPopup