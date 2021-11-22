import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";

const NavBar = () => {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography color="inherit">CV Builder</Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};
export default NavBar;
