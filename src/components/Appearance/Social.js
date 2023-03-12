import { Typography } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Box } from "@mui/system";
import React from "react";

function Social() {
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
          Share on popular social networks
        </Typography>
        <Typography textAlign={"center"} mt={2}>
          Instantly share your booking link on your favourite social media
          networks
        </Typography>

        <Box
          mt={3}
          sx={{ width: "100%" }}
          display={"flex"}
          gap={"1rem"}
          justifyContent="center"
          alignItems={"center"}
        >
          <LinkedInIcon fontSize="large" sx={{ cursor: "pointer" }} />
          <TwitterIcon fontSize="large" sx={{ cursor: "pointer" }} />
        </Box>
      </Box>
    </>
  );
}

export default Social;
