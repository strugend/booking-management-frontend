import React, { useState } from "react";
import Box from "@mui/material/Box";

// import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import Url from "./Url";
import Embed from "./Embed";
import Wordp from "./Wordp";
import Social from "./Social";
import Butn from "./Butn";

const style = {
  position: "absolute",
  top: "40%",
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
  const handlecc = () => {
    seturl("embed");
  };
  const wordpp = () => {
    seturl("wordp");
  };
  const socialo = () => {
    seturl("social");
  };
  const butto = () => {
    seturl("but");
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
        <Grid item sx={{ fontSize: 18, cursor: "pointer" }} onClick={handlecc}>
          Embed
        </Grid>
        <Grid item sx={{ fontSize: 18, cursor: "pointer" }} onClick={wordpp}>
          WordPress
        </Grid>
        <Grid item sx={{ fontSize: 18, cursor: "pointer" }} onClick={socialo}>
          Social
        </Grid>
        <Grid item sx={{ fontSize: 18, cursor: "pointer" }} onClick={butto}>
          Button
        </Grid>
      </Grid>
      <Box>
        {url === "hide" ? <Url /> : ""}
        {url === "show" ? <Url /> : ""}
        {url === "embed" ? <Embed /> : ""}
        {url === "wordp" ? <Wordp /> : ""}
        {url === "social" ? <Social /> : ""}
        {url === "but" ? <Butn /> : ""}
      </Box>
    </Box>
  );
}

export default Apperance;
