import React from "react";
import Base from "./Base";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";

function App() {
  return (
    <div className="App">
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              CV Builder
            </Typography>
            <Button color="inherit">CV Builder</Button>
            <Button color="inherit">About</Button>
          </Toolbar>
        </AppBar>
      </Box>
      <Base />
    </div>
  );
}

export default App;
