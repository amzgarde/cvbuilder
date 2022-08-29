import { Box, Button, Grid, Typography } from "@mui/material";
import { Field, FieldArray } from "formik";
import { TextField } from "formik-mui";

const blankVolunteering = {
  charity: "",
  title: "",
  startDate: "",
  endDate: "",
  description: "",
};

const Volunteering = ({ label, values }: any) => {
  return (
    <>
      <Grid item xs={12}>
        <Grid item xs={12}>
          <Typography variant="h4" gutterBottom>
            {label}
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            Please fill in your {label.toLowerCase()} below
          </Typography>
        </Grid>
        <FieldArray name="volunteering">
          {({ insert, remove, push }) => (
            <div>
              {values.volunteering.length > 0 &&
                values.volunteering.map((work: any, index: number) => (
                  <Box sx={{ p: 2, border: "1px dashed grey", mt: 2 }}>
                    <Grid container spacing={2}>
                      <Grid item xs={12} sm={6}>
                        <Field
                          label="Charity Name"
                          id={`volunteering.${index}.charity`}
                          name={`volunteering.${index}.charity`}
                          placeholder="Cat Charity"
                          component={TextField}
                          fullWidth
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <Field
                          label="Title"
                          id={`volunteering.${index}.title`}
                          name={`volunteering.${index}.title`}
                          placeholder="General Volunteer"
                          component={TextField}
                          fullWidth
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <Field
                          id={`volunteering.${index}.startDate`}
                          name={`volunteering.${index}.startDate`}
                          component={TextField}
                          type="date"
                          fullWidth
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <Field
                          id={`volunteering.${index}.endDate`}
                          name={`volunteering.${index}.endDate`}
                          component={TextField}
                          type="date"
                          fullWidth
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <Field
                          label="Description"
                          id={`volunteering.${index}.description`}
                          name={`volunteering.${index}.description`}
                          placeholder="Some description of the work"
                          component={TextField}
                          fullWidth
                        />
                      </Grid>
                    </Grid>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "flex-end",
                      }}
                    >
                      <Button
                        color="secondary"
                        variant="contained"
                        onClick={() => remove(index)}
                        sx={{ mt: 2, ml: 1 }}
                      >
                        Remove Volunteering
                      </Button>
                    </Box>
                  </Box>
                ))}
              <Button
                variant="contained"
                onClick={() => push(blankVolunteering)}
                sx={{ mt: 2, ml: 1 }}
              >
                Add another volunteering work
              </Button>
            </div>
          )}
        </FieldArray>
      </Grid>
    </>
  );
};

export default Volunteering;
