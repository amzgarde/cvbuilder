import { Box, Grid, InputLabel, Typography } from "@mui/material";
import { Field } from "formik";
import { TextField } from "formik-mui";

const PersonalDetails = ({ label }: any) => {
  return (
    <>
      <Grid item xs={12}>
        <Typography variant="h4" gutterBottom>
          {label}
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          Please fill in your {label.toLowerCase()} below
        </Typography>
      </Grid>
      <Box sx={{ p: 2, border: "1px dashed grey", mt: 2 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <InputLabel htmlFor="personalDetails.name">
              Your full name
            </InputLabel>
            <Field
              id="personalDetails.name"
              name="personalDetails.name"
              placeholder="Jane Smith"
              component={TextField}
              helperText="Enter your full name"
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <InputLabel htmlFor="personalDetails.email">
              Your email address
            </InputLabel>
            <Field
              id="personalDetails.email"
              name="personalDetails.email"
              placeholder="jane.smith@email.com"
              component={TextField}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <InputLabel htmlFor="personalDetails.number">
              Your phone number
            </InputLabel>
            <Field
              id="personalDetails.number"
              name="personalDetails.number"
              placeholder="+1 (123) 456-7890"
              component={TextField}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <InputLabel htmlFor="personalDetails.linkedin">
              Your LinkedIn URL
            </InputLabel>
            <Field
              id="personalDetails.linkedin"
              name="personalDetails.linkedin"
              placeholder="www.linkedin.com/in/janesmith"
              component={TextField}
              fullWidth
            />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default PersonalDetails;
