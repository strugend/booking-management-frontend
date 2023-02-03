import React, { useState } from 'react';
import style from './DashboardBody.module.css';

// -- Material UI --
import { Menu, MenuItem, Tooltip } from '@mui/material';

// -- Icons --
import AcUnitIcon from '@mui/icons-material/AcUnit';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
// import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
// import LinkIcon from '@mui/icons-material/Link';




function DashboardBody() {
    const [showIcon, setShowIcon] = useState(false);
    const [anchorElem, setAnchorElem] = useState(null);
    const open = anchorElem;

    const handleMouseEnter = () => { setShowIcon(true) }
    const handleMouseLeave = () => { setShowIcon(false) }
    const handleAction = (e) => { setAnchorElem(e.currentTarget); }
    const handleActionClose = () => { setAnchorElem(null) }

    return (
        <div>
            <div className={style.container} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>

                <div className={style.content}>
                    <AcUnitIcon className={style.logo} />
                    <div className={style.user_info}>
                        <p className={style.user_name} >User Name</p>
                        <p>useremail1234.youcanbook.me</p>
                    </div>
                </div>

                <div className={style.icons_list}  >
                    {
                        showIcon ?
                            <div>
                                <Tooltip title="View booking" placement='top'><CalendarMonthIcon className={style.icon} /></Tooltip>
                                <Tooltip title="Set online" placement='top' ><RemoveRedEyeOutlinedIcon className={style.icon} /></Tooltip>
                                <Tooltip title="Edit setting" placement='top' ><EditOutlinedIcon className={style.icon} /></Tooltip>
                            </div>
                            : ""
                    }
                    <Tooltip title='Actions' placement='top'>
                        <MoreVertIcon id='resources-menu' className={style.icon} onClick={handleAction} />
                    </Tooltip>
                    <Menu id='resources-menu' anchorEl={anchorElem} open={open} onClose={handleActionClose} >
                        <MenuItem onClick={handleActionClose}>Edit setting</MenuItem>
                        <MenuItem onClick={handleActionClose}>View bookings</MenuItem>
                        <MenuItem onClick={handleActionClose}>Set online</MenuItem>
                        <MenuItem onClick={handleActionClose}>Duplicate</MenuItem>
                        <MenuItem onClick={handleActionClose}>Delete</MenuItem>
                    </Menu>
                </div>
            </div>
        </div>
    )
}

export default DashboardBody;