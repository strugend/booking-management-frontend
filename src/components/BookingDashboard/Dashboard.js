import React from "react";
import Booknav from "./Booknav";
import Grid from "@mui/material/Grid";
import Booktable from "./Booktable";

const Dashboard = () => {
  return (
    <>
      {/* <Grid container justifyContent={"center"} mt={5}>
        <Grid item lg={10} md={12} color={"white"}>
          <Booknav />
        </Grid>
      </Grid> */}
      <Booktable />
    </>
  );
};

export default Dashboard;
