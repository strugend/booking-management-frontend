import React, { useState } from "react";
import Box from "@mui/material/Box";

import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import Url from "./Url";

const style = {
  position: "absolute",
  top: "30%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "#232e35",
  color: "white",
  boxShadow: 24,
  borderRadius: 2,
  p: 4,
};

function Apperance() {
  const [url, seturl] = useState("hide");
  const handlec = () => {
    seturl("show");
  };
  return (
    <Box sx={style}>
      <Grid
        container
        display={"flex"}
        justifyContent={"space-evenly"}
        sx={{ borderBottom: 0.1, borderColor: "#32414a" }}
        lg={12}
      >
        <Grid item sx={{ fontSize: 18, cursor: "pointer" }} onClick={handlec}>
          URL
        </Grid>
        <Grid item sx={{ fontSize: 18, cursor: "pointer" }}>
          Embed
        </Grid>
        <Grid item sx={{ fontSize: 18, cursor: "pointer" }}>
          WordPress
        </Grid>
        <Grid item sx={{ fontSize: 18, cursor: "pointer" }}>
          Social
        </Grid>
        <Grid item sx={{ fontSize: 18, cursor: "pointer" }}>
          Button
        </Grid>
      </Grid>
      <Box>{url === "show" ? <Url /> : <h1>nothing</h1>}</Box>
    </Box>
  );
}

export default Apperance;
