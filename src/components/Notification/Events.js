import { Typography } from "@mui/material";
import { alpha, styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import Button from "@mui/material/Button";

import TextareaAutosize from "@mui/base/TextareaAutosize";
import { Box } from "@mui/system";
import React from "react";

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

function Events() {
  return (
    <>
      <Typography fontWeight={"bold"}>Your Calender event title</Typography>
      <BootstrapInput
        placeholder="title"
        sx={{ width: "98%", height: 50 }}
        id="bootstrap-input"
      />
      <Typography mt={2} mb={0.5} fontWeight={"bold"}>
        Your Calender event Description
      </Typography>
      <Box
        sx={{ width: "100%", border: 0.0001, borderColor: "  #32414a" }}
        py={0}
        borderRadius={2}
      >
        <Box
          sx={{ width: "100%", borderBottom: 0.0001, borderColor: "  #32414a" }}
        >
          <Typography>
            <Button sx={{ width: 10, textAlign: "left", color: "white" }}>
              <Typography>"{}"</Typography>
            </Button>
          </Typography>
        </Box>
        <Box sx={{ width: "100%" }}>
          <TextareaAutosize
            minRows={3}
            style={{
              width: "100%",
              height: "90%",
              border: "none",
              color: "white",
              fontSize: 15,
              backgroundColor: "#1d2629",
              resize: "vertical",
              "&focus": {
                borderColor: "theme.palette.primary.main",
              },
            }}
          />
        </Box>
      </Box>
      <Typography mt={2} fontWeight={"bold"}>
        Invite Participants to your calender event
      </Typography>
      <TextareaAutosize
        minRows={3}
        style={{
          width: "100%",

          border: "none",
          color: "white",
          fontSize: 15,
          backgroundColor: "#1d2629",
          resize: "vertical",
          "&focus": {
            borderColor: "theme.palette.primary.main",
          },
        }}
      />
      <Box
        mt={3}
        sx={{ width: "100%" }}
        justifyContent="center"
        boxSizing={"border-box"}
      >
        <Button
          variant="contained"
          component="label"
          size="large"
          sx={{
            color: "white",
            fontWeight: "bold",
            width: "100%",
            borderRadius: 7,
          }}
        >
          Save All Changes
        </Button>
      </Box>
    </>
  );
}

export default Events;
