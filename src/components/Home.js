import React from 'react'
import { Navbar } from './'
import { Box, Stack, Typography } from "@mui/material";

function Home() {
  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
    <Box sx={{ height: { sx: "auto", md: "92vh" }, px: { sx: 0, md: 2 } }}>
      <Navbar />
    </Box>

    <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
      <Typography variant="p" fontWeight="bold" mb={2} sx={{ color: "white" }}>
         <span style={{ color: "#FC1503" }}>Home Page</span>
      </Typography>      
    </Box>
  </Stack>
  )
}

export default Home
