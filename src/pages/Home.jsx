import React from "react";
import AppLayout from "../components/layout/AppLayout";
import { Box, Typography } from "@mui/material";


const Home = () => {
  return (
    <Box bgcolor={"rgb(8,69,69)"} height={"100%"}>
      <Typography p={"2rem"} variant="h5" textAlign={"center"} color="white">
        Select a friend to chat
      </Typography>
    </Box>
  );
};

export default AppLayout()(Home);
