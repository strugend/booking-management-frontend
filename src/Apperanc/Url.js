import { Typography } from "@mui/material";
import { alpha, styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import { Box } from "@mui/system";
import React from "react";
import Button from "@mui/material/Button";
import ContentCopyOutlinedIcon from "@mui/icons-material/ContentCopyOutlined";

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  "label + &": {
    marginTop: theme.spacing(3),
  },
  "& .MuiInputBase-input": {
    borderRadius: 4,
    innerHeight: 9,
    position: "relative",
    backgroundColor: "#1d2629",
    border: 0.0001,
    fontSize: 17,
    borderColor: "#32414a",
    padding: "5px 10px",
    color: "white",
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:focus": {
      boxShadow: `${alpha(theme.palette.primary.main, 1)} 0 0 0 0.2rem`,
      borderColor: theme.palette.primary.main,
    },
  },
}));

function Url() {
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
          Your Booking url
        </Typography>
        <Typography textAlign={"center"} mt={2}>
          Copy and paste the link below to share your booking link in emails &
          chats
        </Typography>
        <BootstrapInput
          placeholder="Url"
          sx={{ width: "78%", height: 50 }}
          id="bootstrap-input"
        />
        <Box
          mt={3}
          sx={{ width: "100%" }}
          display={"flex"}
          justifyContent="center"
          alignItems={"center"}
          boxSizing={"border-box"}
        >
          <Button
            variant="contained"
            component="label"
            size="large"
            sx={{
              color: "white",
              fontWeight: "bold",
              width: "80%",
              borderRadius: 7,
            }}
          >
            <ContentCopyOutlinedIcon />
            &nbsp; Copy Booking Link
          </Button>
        </Box>
      </Box>
    </>
  );
}

export default Url;
