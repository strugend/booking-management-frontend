import React, { useContext } from 'react';
import style from './DashboardSidebar.module.css';

// -- Library used for the "Multi-Step" forms.
import { multiStepContext } from './Forms/StepContext';

// -- Icons --
import AddCircleIcon from '@mui/icons-material/AddCircle';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import OfflineBoltSharpIcon from '@mui/icons-material/OfflineBoltSharp';
import CreateNewFolderOutlinedIcon from '@mui/icons-material/CreateNewFolderOutlined';
// import TuneIcon from '@mui/icons-material/Tune';
// import SortByAlphaIcon from '@mui/icons-material/SortByAlpha';
// import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';



function DashboardSidebar() {
    const {setShowForm} = useContext(multiStepContext);

    return (
        <div>
            <button> <AddCircleIcon className={style.icons} /> Create booking page </button>

            {/*  ------------  Create-Folder  ------------  */}
            <div className={style.create_folder}>
                <CreateNewFolderOutlinedIcon className={style.folder_icons} />
                <div>
                    <h3>Create a folder</h3>
                    <p>Use folders to organize and group your booking pages</p>
                </div>
            </div>

            {/*  ------------  Free-trial  ------------  */}
            <div className={style.free_trial} >
                <AutoAwesomeIcon className={style.stars_icons} />
                <h3>You are on the free trial</h3>
                <p>You’ll switch to our free forever plan in 10 hours.</p>
                <div className={style.inside_box}>
                    <h4>With an upgraded account, you can:</h4>
                    <p> <CheckCircleIcon className={style.icons} /> Set a custom booking schedule using Custom Availability</p>
                    <p> <CheckCircleIcon className={style.icons} /> Send automated reminder, follow-up, and no-show emails to clients</p>
                    <p> <CheckCircleIcon className={style.icons} /> Generate unique video conference links through Zoom, Google Meet, or Microsoft Teams</p>
                </div>
                <button onClick={() => setShowForm(true)} > <OfflineBoltSharpIcon className={style.icons} /> Upgrade</button>
            </div>

        </div>
    )
}

export default DashboardSidebar;













// {/* ------------  Informtion  ------------  */ }
// <div className={style.information} >
//     <div className={style.info}>
//         <h3>Start scheduling for your team</h3>
//         <p> <ArrowForwardIosSharpIcon className={style.arrow_icons} /> Read the article</p>
//     </div>
//     <div className={style.info}>
//         <h3>Start scheduling for your team</h3>
//         <p><ArrowForwardIosSharpIcon className={style.arrow_icons} /> Read the article</p>
//     </div>
//     <div className={style.info}>
//         <h3>Start scheduling for your team</h3>
//         <p><ArrowForwardIosSharpIcon className={style.arrow_icons} /> Read the article</p>
//     </div>
// </div>