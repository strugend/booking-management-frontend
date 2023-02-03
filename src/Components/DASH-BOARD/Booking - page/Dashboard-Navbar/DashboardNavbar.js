import React, { useState } from 'react';
import style from './DashboardNavbar.module.css';

// -- Material UI --
import { Tooltip, IconButton, Menu, MenuItem } from '@mui/material';

// -- Icons --
import AddCircleIcon from '@mui/icons-material/AddCircle';
import TuneIcon from '@mui/icons-material/Tune';
import SortByAlphaIcon from '@mui/icons-material/SortByAlpha';
import SearchIcon from '@mui/icons-material/Search';
import CircleIcon from '@mui/icons-material/Circle';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
// import TableRowsRoundedIcon from '@mui/icons-material/TableRowsRounded';
// import AppsRoundedIcon from '@mui/icons-material/AppsRounded';



function DashboardNavbar() {

    // ----  Inside "navbar_btn" class  "first p-tag"  ----
    const [filterDisplay, setFilterDisplay] = useState(false);
    const handleFilterData = () => setFilterDisplay(!filterDisplay)

    // ----  Inside "navbar_btn" class  "second p-tag"  ----
    const [anchorNavbarBtn, setAnchorNavbarBtn] = useState(null);
    const openNavbar = anchorNavbarBtn;
    const handleClickSorting = (e) => { setAnchorNavbarBtn(e.currentTarget) }
    const handleCloseSorting = () => { setAnchorNavbarBtn(null) }

    // ----  Inside "filter_content" class  "select-tag"  ----
    const [anchorFilterContent, setAnchorFilterContent] = useState(null);
    const openFilter = anchorFilterContent;
    const handleClickFilter = (e) => { setAnchorFilterContent(e.currentTarget) }
    const handleCloseFilter = () => { setAnchorFilterContent(null) }



    return (
        <div>

            <div className={style.content_1} >

                <div className={style.navbar} >
                    <h3>All booking pages
                        <Tooltip title="Create a booking page" placement='top' arrow >
                            <AddCircleIcon className={style.icons} />
                        </Tooltip>
                    </h3>

                    <div className={style.navbar_btn} >
                        <p onClick={handleFilterData}><TuneIcon className={style.icons} /> Filters</p>
                        <p id="sorting-button" onClick={handleClickSorting}><SortByAlphaIcon className={style.icons} />Sort by Page title </p>
                        <Menu id='sorting' anchorEl={anchorNavbarBtn} open={openNavbar} onClose={handleCloseSorting}>
                            <MenuItem onClick={handleCloseSorting}>Sort by page title</MenuItem>
                            <MenuItem onClick={handleCloseSorting}>Sort by pagel link</MenuItem>
                            <MenuItem onClick={handleCloseSorting}>Sort by last modified</MenuItem>
                        </Menu>
                    </div>
                </div>

                {
                    //  ---  This is the Hidden "Search-bar" 
                    filterDisplay ?
                        <div className={style.filter_content}>
                            <div className={style.search}>
                                <SearchIcon className={style.search_icon} />
                                <input type="text" placeholder='Search pages...' />
                            </div>
                           
                            <p id='filter-button' onClick={handleClickFilter} className={style.select_items}>Any Status</p>
                            <Menu id='filter' anchorEl={anchorFilterContent} open={openFilter} width='100%'>
                                <MenuItem onClick={handleCloseFilter}>Any status</MenuItem>
                                <MenuItem onClick={handleCloseFilter}><CircleIcon className={style.status_icon} /> Online</MenuItem>
                                <MenuItem onClick={handleCloseFilter}><CircleOutlinedIcon className={style.status_icon}/> Offline</MenuItem>
                            </Menu>
                        </div>
                        : ""
                }
            </div>

        </div>
    )
}

export default DashboardNavbar;