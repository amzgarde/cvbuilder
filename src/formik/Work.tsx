import { Box, Button, Grid, Typography } from "@mui/material";
import { Field, FieldArray } from "formik";
import { TextField } from "formik-mui";

const blankWork = {
  company: "",
  jobTitle: "",
  startDate: "",
  endDate: "",
  responsibilities: [],
};

const Work = ({ label, values }: any) => {
  // const responsibilities = values.works[index].responsibilities;

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
        <FieldArray name="works">
          {({ insert, remove, push }) => (
            <div>
              {values.works.length > 0 &&
                values.works.map((work: any, index: number) => (
                  <Box sx={{ p: 2, border: "1px dashed grey", mt: 2 }}>
                    <Grid container spacing={2}>
                      <Grid item xs={12} sm={6}>
                        <Field
                          label="Company Name"
                          id={`works.${index}.company`}
                          name={`works.${index}.company`}
                          placeholder="Cool Company"
                          component={TextField}
                          fullWidth
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <Field
                          label="Job Title"
                          id={`works.${index}.jobTitle`}
                          name={`works.${index}.jobTitle`}
                          placeholder="Senior Software Engineer"
                          component={TextField}
                          fullWidth
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <Field
                          id={`works.${index}.startDate`}
                          name={`works.${index}.startDate`}
                          component={TextField}
                          type="date"
                          fullWidth
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <Field
                          id={`works.${index}.endDate`}
                          name={`works.${index}.endDate`}
                          component={TextField}
                          type="date"
                          fullWidth
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <FieldArray name={`works.${index}.responsibilities`}>
                          {({ insert, remove, push }) => (
                            <div>
                              {values.works[index].responsibilities.length >
                                0 &&
                                values.works[index].responsibilities.map(
                                  (responsibility: any, count: any) => (
                                    <Grid container spacing={2}>
                                      <Grid item xs={10}>
                                        <Field
                                          id={`works.${index}.responsibilities.${count}.description`}
                                          name={`works.${index}.responsibilities.${count}.description`}
                                          component={TextField}
                                          fullWidth
                                        />
                                      </Grid>
                                      <Grid item xs={2}>
                                        <Button
                                          color="secondary"
                                          variant="contained"
                                          onClick={() => remove(count)}
                                          sx={{ mt: 2, ml: 1 }}
                                        >
                                          Remove
                                        </Button>
                                      </Grid>
                                    </Grid>
                                  )
                                )}
                              <Button
                                variant="contained"
                                onClick={() => push({ description: "" })}
                                sx={{ mt: 2, ml: 1 }}
                              >
                                Add responsibility
                              </Button>
                            </div>
                          )}
                        </FieldArray>
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
                        Remove Work
                      </Button>
                    </Box>
                  </Box>
                ))}
              <Button
                variant="contained"
                onClick={() => push(blankWork)}
                sx={{ mt: 2, ml: 1 }}
              >
                Add another work experience
              </Button>
            </div>
          )}
        </FieldArray>
      </Grid>
    </>
  );
};

export default Work;
