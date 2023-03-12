import { Typography } from "@mui/material";
import React from "react";

function Notify() {
  return (
    <>
      <Typography
        sx={{
          height: 40,
          border: 0.0001,
          borderColor: "  #32414a",
          padding: 1,
          cursor: "pointer",
          borderRadius: 3,
        }}
        mb={1}
      >
        Send email after booking is done to both parties
      </Typography>
      <Typography
        sx={{
          height: 40,
          border: 0.0001,
          borderColor: "  #32414a",
          padding: 1,
          cursor: "pointer",
          borderRadius: 3,
        }}
        mb={1}
      >
        If booking is rescheduled, send email to owner
      </Typography>
      <Typography
        sx={{
          height: 40,
          border: 0.0001,
          borderColor: "  #32414a",
          padding: 1,
          cursor: "pointer",
          borderRadius: 3,
        }}
        mb={1}
      >
        If booking got canceled by one party, send email to other party{" "}
      </Typography>
      <Typography
        sx={{
          height: 40,
          border: 0.0001,
          borderColor: "  #32414a",
          padding: 1,
          cursor: "pointer",
          borderRadius: 3,
        }}
        mb={1}
      >
        Send email reminder 30 mins before the appointment
      </Typography>
      <Typography
        sx={{
          height: 40,
          border: 0.0001,
          borderColor: "  #32414a",
          padding: 1,
          cursor: "pointer",
          borderRadius: 2,
        }}
        mb={1}
      >
        After successful appointment send thank you mail
      </Typography>
      <Typography
        sx={{
          height: 40,
          border: 0.0001,
          borderColor: "  #32414a",
          padding: 1,
          cursor: "pointer",
          borderRadius: 3,
        }}
        mb={1}
      >
        If any party is not available during appointment then send mail to the
        same user
      </Typography>
    </>
  );
}

export default Notify;
