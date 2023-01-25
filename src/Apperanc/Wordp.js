import React from "react";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";

function Wordp() {
  return (
    <>
      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        mt={4}
        flexDirection={"column"}
      >
        <Typography sx={{ fontSize: 20, fontWeight: "bold" }}>
          Embed on your WordPress site
        </Typography>
        <Box
          mt={2}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          px={3}
        >
          <ul>
            <li>On your admin console, go to appearance widgets</li>
            <li>
              Drag the "Image" widget to the right hand side and drop in the
              sidebar (or footer, depending on your theme).
            </li>
            <li>
              In the widget title, enter something like "Click here to book a
              meeting with me"
            </li>
            <li>
              In the image URL, enter <br />
            </li>
            <li>In the link URL, enter your booking address </li>
          </ul>
        </Box>
      </Box>
    </>
  );
}

export default Wordp;
