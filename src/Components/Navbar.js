import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import MenuIcon from "@mui/icons-material/Menu";

function Navbar({ disp, handlec }) {
  return (
    <AppBar
      position="fixed"
      sx={{
        zIndex: (theme) => theme.zIndex.drawer + 1,
        backgroundColor: "#32414a",
      }}
    >
      <Toolbar>
        <MenuIcon
          sx={{ cursor: "pointer", display: { lg: "none", xs: "block" } }}
          onClick={handlec}
        />
        <Button sx={{ color: "white" }}>
          <ArrowBackIosIcon sx={{ fontSize: 15 }} /> Back
        </Button>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <Typography sx={{ alignItems: "center" }}>
          <RadioButtonUncheckedIcon sx={{ fontSize: 13, fontWeight: "bold" }} />{" "}
          url will come here
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
