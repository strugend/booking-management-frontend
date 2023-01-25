import { Box } from "@mui/system";
import GoogleIcon from "@mui/icons-material/Google";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import * as React from "react";

export default function BasicCard() {
  return (
    <Box sx={{ width: "100%" }}>
      <Typography fontWeight={"bold"} mb={2}>
        Linked Calender
      </Typography>
      <Box
        sx={{
          border: 0.0001,
          borderColor: "  #32414a",
          borderRadius: 2,
          overflow: "hidden",
        }}
      >
        <Box display={"flex"} justifyContent={"space-between"}>
          <Box
            px={2}
            py={0.7}
            width={"100%"}
            sx={{
              backgroundColor: "#1d2629",
              height: 40,
              fontSize: 16,
              borderBottom: 0.0001,
              borderColor: "  #32414a",
            }}
          >
            We'll check your availablity on:
          </Box>
          <Box>
            <Button
              sx={{ backgroundColor: "#1d2629", width: "100%", height: "100%" }}
            >
              Edit
            </Button>
          </Box>
        </Box>

        <Box px={2} py={2} sx={{ border: 0.0001, borderColor: "  #32414a" }}>
          <Typography>
            <GoogleIcon sx={{ fontSize: 20 }} /> Gmail willl come here
          </Typography>
        </Box>
        <Box display={"flex"} justifyContent={"space-between"}>
          <Box
            px={2}
            py={0.7}
            width={"100%"}
            sx={{
              backgroundColor: "#1d2629",
              height: 40,
              marginBottom: 0.0001,
              fontSize: 16,
              borderColor: "  #32414a",
            }}
          >
            And create new bookings on:
          </Box>
          <Box>
            <Button
              sx={{ backgroundColor: "#1d2629", width: "100%", height: "100%" }}
            >
              Edit
            </Button>
          </Box>
        </Box>

        <Box px={2} py={2} sx={{ border: 0.0001, borderColor: "  #32414a" }}>
          <Typography>
            <GoogleIcon sx={{ fontSize: 20 }} /> Gmail willl come here
          </Typography>
        </Box>
      </Box>
      <Typography mt={3}>looking for different calender?</Typography>
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
    </Box>
  );
}
