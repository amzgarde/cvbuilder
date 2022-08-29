import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Paper,
} from "@mui/material";
import Builder from "./formik/Builder";
import PdfRender from "./pdfrender";

const Copyright = () => {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      Amy Garde {new Date().getFullYear()}
    </Typography>
  );
};

const App = () => (
  <div className="App">
    <AppBar
      position="absolute"
      enableColorOnDark
      elevation={0}
      sx={{
        position: "relative",
        borderBottom: (t) => `1px solid ${t.palette.divider}`,
      }}
    >
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          CV/Resume Builder
        </Typography>
      </Toolbar>
    </AppBar>
    <Container component="main" sx={{ mb: 4 }}>
      <Paper elevation={3} sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
        <Typography align="center" variant="h4">
          Fill out the details to build your CV/Resume
        </Typography>
        <Builder />
        <PdfRender />
        <Copyright />
      </Paper>
    </Container>
  </div>
);

export default App;
