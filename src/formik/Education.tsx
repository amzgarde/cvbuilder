import { Box, Button, Grid, Typography } from "@mui/material";
import { Field, FieldArray } from "formik";
import { TextField } from "formik-mui";

const blankEducation = {
  school: "",
  course: "",
  startDate: "",
  endDate: "",
};

const Education = ({ label, values }: any) => {
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
        <FieldArray name="educations">
          {({ insert, remove, push }) => (
            <div>
              {values.educations.length > 0 &&
                values.educations.map((education: any, index: number) => (
                  <Box sx={{ p: 2, border: "1px dashed grey", mt: 2 }}>
                    <Grid container spacing={2}>
                      <Grid item xs={12} sm={6}>
                        <Field
                          label="School/University/Institution"
                          id={`education.${index}.school`}
                          name={`education.${index}.school`}
                          placeholder="Universe University"
                          component={TextField}
                          fullWidth
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <Field
                          label="Course Title"
                          id={`education.${index}.course`}
                          name={`education.${index}.course`}
                          placeholder="Technology Degree"
                          component={TextField}
                          fullWidth
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <Field
                          id={`education.${index}.startDate`}
                          name={`education.${index}.startDate`}
                          component={TextField}
                          type="date"
                          fullWidth
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <Field
                          id={`education.${index}.endDate`}
                          name={`education.${index}.endDate`}
                          component={TextField}
                          type="date"
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
                        Remove Education
                      </Button>
                    </Box>
                  </Box>
                ))}
              <Button
                variant="contained"
                onClick={() => push(blankEducation)}
                sx={{ mt: 2, ml: 1 }}
              >
                Add another education
              </Button>
            </div>
          )}
        </FieldArray>
      </Grid>
    </>
  );
};

export default Education;
