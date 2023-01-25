import React from "react";
import { Typography } from "@mui/material";
import TextareaAutosize from "@mui/base/TextareaAutosize";
import { Box } from "@mui/system";

import Button from "@mui/material/Button";
import ContentCopyOutlinedIcon from "@mui/icons-material/ContentCopyOutlined";

function Butn() {
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
          Add a button to your website
        </Typography>
        <Typography textAlign={"center"} mt={2}>
          Copy the code below to add a booking button to your website
        </Typography>

        <Box
          mt={3}
          sx={{ width: "100%" }}
          display={"flex"}
          flexDirection={"column"}
          gap={"1rem"}
          justifyContent="center"
          alignItems={"center"}
          boxSizing={"border-box"}
        >
          <TextareaAutosize
            minRows={3}
            style={{
              width: "80%",
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
            &nbsp; Copy Button Code
          </Button>
        </Box>
      </Box>
    </>
  );
}

export default Butn;
