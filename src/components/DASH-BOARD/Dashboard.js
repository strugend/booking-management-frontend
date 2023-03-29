import React, { useState } from 'react';
import style from './Dashboard.module.css';
import DashboardPopup from './DashboardPopup';

// -- Icons --
import AcUnitIcon from '@mui/icons-material/AcUnit';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';

export default function Dashboard() {
    const [showData, setShowData] = useState(true);

    const handlePopup = () => {
        setShowData(!showData);
    }

    return (
        <>
            {/* ---  Below I am using "Ternary-Operator" btwn "Dashboard" & "DashboardPopup" component as an "toggle" */}
            {
                showData ?
                    <div className={style.container}>
                        <div className={style.content} >
                            <AcUnitIcon className={style.icon} />
                            <h3>Hey, User</h3>
                            <p>Nice work, your account is all set up! Ready to create your first booking page</p>
                            <button onClick={handlePopup}>Start creating my first booking page</button>

                            <p>Looking to schedule for your team?
                                <span> Start inviting team members</span>
                            </p>
                        </div>

                        <div className={style.info}>
                            <p>Introduction to YouCanBookMe</p>
                            <a href="" ><PlayCircleIcon className={style.play_icon} />Watch the video</a>
                        </div>
                    </div>


                    : <DashboardPopup trigger={handlePopup} />
            }

        </>
    )
}
