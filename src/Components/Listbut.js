import React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";

function Listbut(props) {
  return (
    <ListItemButton
      sx={{
        pl: 4,
        height: 50,
        marginTop: 1,
        borderRadius: 2,
        ":hover": { backgroundColor: "#2d3b45" },
      }}
    >
      <ListItemText>
        <Typography>&nbsp; {props.name}</Typography>
      </ListItemText>
    </ListItemButton>
  );
}

export default Listbut;
