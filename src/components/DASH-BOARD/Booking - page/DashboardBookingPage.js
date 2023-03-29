import React, { useContext } from 'react';
import style from './DashboardBookingPage.module.css';

// -- Below is the "Parent" component form which we are passing data to its children with the help of "useContext" hook.
import { multiStepContext } from './Dashboard-Sidebar/Forms/StepContext';

// -- Below these components are part of the "Booking-Page" --
import DashboardNavbar from './Dashboard-Navbar/DashboardNavbar';
import DashboardBody from './Dashboard-Body/DashboardBody';
import DashboardSidebar from './Dashboard-Sidebar/DashboardSidebar';
import MergeAllForms from './Dashboard-Sidebar/Forms/MergeAllForms';



function DashboardBookingPage() {
  const { showForm} = useContext(multiStepContext);

  return (
    <>
      {/*  ---  Below I am using "Ternary-Operator" so that either to show "Booking-Page" or the  "Forms" that are inside "DashboardSidebar" component. */}
      {/* {
        showForm
          ? <MergeAllForms />
          
          : <div className={style.container}>
            <div className={style.content_1} >
              <DashboardNavbar />
              <DashboardBody />
            </div>

            <div className={style.content_2}>
              <DashboardSidebar />
            </div>
          </div>
      } */}
This is booking dashboard page
    </>
  )
}

export default DashboardBookingPage;
