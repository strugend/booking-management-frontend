import React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
// import Calender_Teams from "./CalenderTeams";
function Thirdpart() {
  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        p: 3,
        width: 500,
        display: { xs: "none", lg: "block" },
        backgroundColor: "#232e35",
        color: "white",
      }}
    >
      <Toolbar />
      {/* <Calender_Teams /> */}
      <Typography>date selector will come here</Typography>
    </Box>
  );
}

export default Thirdpart;
