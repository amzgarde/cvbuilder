import { Container, Paper, Typography } from "@mui/material";
import Form from "./form";
import PdfRender from "./pdfrender";

const Base = () => {
  return (
    <Container component="main" sx={{ mb: 4 }}>
      <Paper elevation={3} sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
        <Typography align="center" variant="h4">
          Let's build a CV together
        </Typography>
        <Form />
        <PdfRender />
      </Paper>
    </Container>
  );
};

export default Base;
