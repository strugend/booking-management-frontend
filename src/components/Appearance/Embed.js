import { Typography } from "@mui/material";
import TextareaAutosize from "@mui/base/TextareaAutosize";
import { Box } from "@mui/system";
import React from "react";
import Button from "@mui/material/Button";
import ContentCopyOutlinedIcon from "@mui/icons-material/ContentCopyOutlined";

function Embed() {
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
          Embed on your website
        </Typography>
        <Typography textAlign={"center"} mt={2}>
          Copy the code below to seamlessly embed your booking page in your
          website
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
            &nbsp; Copy Embed Code
          </Button>
        </Box>
      </Box>
    </>
  );
}

export default Embed;
