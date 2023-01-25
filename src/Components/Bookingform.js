import React from "react";
// import Box from "@mui/material/Box";
import { Grid, Typography } from "@mui/material";
import { alpha, styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import Button from "@mui/material/Button";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import TextareaAutosize from "@mui/base/TextareaAutosize";
import { Box } from "@mui/system";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import InsertLinkIcon from "@mui/icons-material/InsertLink";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
// import TextField from "@mui/material/TextField";

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

function Bookingform() {
  return (
    <>
      <Typography sx={{ fontWeight: "bold", marginBottom: 1 }}>
        {" "}
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;
        &nbsp;Booking page Title
      </Typography>
      <Grid container>
        <Grid item lg={2} justifyContent="center">
          <Button
            variant="text"
            component="label"
            size="large"
            sx={{
              borderRadius: "70%",
              backgroundColor: "#1d2629",
              height: 60,
              border: 0.0001,
              borderColor: "  #32414a",
            }}
          >
            <AddAPhotoIcon size="large" sx={{ color: "white" }} />
            <input hidden accept="image/*" multiple type="file" />
          </Button>
        </Grid>
        <Grid item lg={10}>
          <BootstrapInput
            placeholder="Name"
            sx={{ width: "98%", height: 50 }}
            id="bootstrap-input"
          />
        </Grid>
      </Grid>
      <Typography sx={{ fontWeight: "bold", marginTop: 4 }}>
        Booking page link
      </Typography>

      <Grid
        container
        sx={{ border: 0.0001, borderColor: "  #32414a" }}
        px={0.1}
        borderRadius={2}
        mt={1}
      >
        <Grid item lg={9}>
          <BootstrapInput sx={{ width: "98%" }} id="bootstrap-input" />
        </Grid>
        <Grid item lg={3}>
          .youcanbook.me
        </Grid>
      </Grid>
      <Typography mt={3} mb={1} sx={{ fontWeight: "bold" }}>
        Booking Page info
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
              <FormatBoldIcon />
            </Button>
            <Button sx={{ width: 10, textAlign: "left", color: "white" }}>
              <FormatItalicIcon />
            </Button>
            <Button sx={{ width: 10, textAlign: "left", color: "white" }}>
              <InsertLinkIcon />
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

export default Bookingform;
