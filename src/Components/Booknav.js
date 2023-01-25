import React from "react";
import Grid from "@mui/material/Grid";
import { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Fab from "@mui/material/Fab";
import TuneIcon from "@mui/icons-material/Tune";
// import { Box } from "@mui/system";
// import SearchIcon from "@mui/icons-material/Search";
import { alpha, styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import axios from "axios";
import {
  Table,
  TableBody,
  TableCell,
  tableCellClasses,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

const options = ["Any status", "Undecided", "Cancelled", "No show"];

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  "label + &": {
    marginTop: theme.spacing(3),
  },
  "& .MuiInputBase-input": {
    borderRadius: 4,
    position: "relative",
    backgroundColor: "#32414a",
    border: "0px",
    fontSize: 17,
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
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#32414a",
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

function Booknav() {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  const [selectedIndex, setSelectedIndex] = React.useState(1);
  const [users, setUsers] = useState([]);
  const [visible, setVisible] = React.useState(false);

  const loadusers = async () => {
    const res = await axios.get("url");
    setUsers(res.data);
  };
  useEffect(() => {
    loadusers();
  }, []);

  const handleClick = () => {
    console.info(`You clicked ${options[selectedIndex]}`);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setOpen(false);
  };

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpen(false);
  };

  return (
    <>
      <Grid container mt={4}>
        <Grid item lg={6} md={9}>
          <Typography variant="h5" gutterBottom>
            Upcoming bookings
          </Typography>
        </Grid>
        <Grid item lg={2} md={3}>
          <Button variant="text" style={{ textTransform: "none" }}>
            Clear All
          </Button>
          <Button
            variant="primary"
            p={2}
            size="large"
            sx={{ bgcolor: "#32414a", textTransform: "none" }}
            onClick={() => setVisible(!visible)}
          >
            <TuneIcon />
            Filters
          </Button>
        </Grid>
        <Grid item lg={3} md={10}>
          <ButtonGroup
            variant="textSuccess"
            aria-label="outlined button group"
            sx={{ bgcolor: "#32414a" }}
          >
            <Button style={{ textTransform: "none" }}>Upcoming</Button>
            <Button style={{ textTransform: "none" }}>Past</Button>
            <Button style={{ textTransform: "none" }}>Data Range</Button>
          </ButtonGroup>
        </Grid>
        <Grid item lg={1} md={2}>
          <Fab
            variant="extended"
            size="medium"
            color="primary"
            aria-label="add"
            textTransform="none"
          >
            Export
          </Fab>
        </Grid>
      </Grid>
      {visible && (
        <Grid container mt={2}>
          <Grid item lg={8} p={0.1} md={6}>
            <BootstrapInput
              placeholder="Search bookings ...."
              sx={{ width: "98%" }}
              id="bootstrap-input"
            />
          </Grid>
          <Grid item lg={2} md={3} justifyContent={"center"}>
            <React.Fragment>
              <ButtonGroup
                variant="contained"
                sx={{ bgcolor: "#32414a", width: "80%" }}
                ref={anchorRef}
                aria-label="split button"
              >
                <Button
                  sx={{ bgcolor: "#32414a", width: "90%" }}
                  onClick={handleClick}
                >
                  {options[selectedIndex]}
                </Button>

                <Button
                  size="small"
                  sx={{ bgcolor: "#32414a" }}
                  aria-controls={open ? "split-button-menu" : undefined}
                  aria-expanded={open ? "true" : undefined}
                  aria-label="select merge strategy"
                  aria-haspopup="menu"
                  onClick={handleToggle}
                >
                  <ArrowDropDownIcon />
                </Button>
              </ButtonGroup>
              <Popper
                sx={{
                  zIndex: 1,
                  bgcolor: "#32414a",
                }}
                open={open}
                anchorEl={anchorRef.current}
                role={undefined}
                transition
                disablePortal
              >
                {({ TransitionProps, placement }) => (
                  <Grow
                    {...TransitionProps}
                    style={{
                      transformOrigin:
                        placement === "bottom" ? "center top" : "center bottom",
                    }}
                  >
                    <Paper>
                      <ClickAwayListener onClickAway={handleClose}>
                        <MenuList
                          sx={{
                            bgcolor: "#32414a",
                            color: "white",
                            width: "100%",
                          }}
                          id="split-button-menu"
                          autoFocusItem
                        >
                          {options.map((option, index) => (
                            <MenuItem
                              key={option}
                              selected={index === selectedIndex}
                              onClick={(event) =>
                                handleMenuItemClick(event, index)
                              }
                            >
                              {option}
                            </MenuItem>
                          ))}
                        </MenuList>
                      </ClickAwayListener>
                    </Paper>
                  </Grow>
                )}
              </Popper>
            </React.Fragment>
          </Grid>
          <Grid item lg={2} md={3}>
            but
          </Grid>
        </Grid>
      )}
      <Grid container mt={6}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} size="small">
            <TableHead>
              <TableRow>
                <StyledTableCell>Date</StyledTableCell>
                <StyledTableCell align="right">Time</StyledTableCell>
                <StyledTableCell align="right">Duration</StyledTableCell>
                <StyledTableCell align="right">Booking</StyledTableCell>
                <StyledTableCell align="right">Team</StyledTableCell>
                <StyledTableCell align="right">
                  Appointment type
                </StyledTableCell>
                <StyledTableCell align="right">Status</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.map((user) => (
                <TableRow>
                  <TableCell>Date</TableCell>
                  <TableCell>time</TableCell>
                  <TableCell>Duration</TableCell>
                  <TableCell>Booking</TableCell>
                  <TableCell>Team</TableCell>
                  <TableCell>Appointment type</TableCell>
                  <TableCell>Status</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </>
  );
}

export default Booknav;
