import { Box, Button, Grid, Typography } from "@mui/material";
import { Field, FieldArray } from "formik";
import { TextField } from "formik-mui";

const Skills = ({ label, values }: any) => {
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
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <FieldArray name={`skills`}>
              {({ insert, remove, push }) => (
                <div>
                  {values.skills.length > 0 &&
                    values.skills.map((skill: any, count: any) => (
                      <Box sx={{ p: 2, border: "1px dashed grey", mt: 2 }}>
                        <Grid container spacing={2}>
                          <Grid item xs={10}>
                            <Field
                              label="Skill"
                              id={`skills.${count}.skill`}
                              name={`skills.${count}.skill`}
                              placeholder="Microsoft Office"
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
                      </Box>
                    ))}
                  <Button
                    variant="contained"
                    onClick={() => push({ skill: "" })}
                    sx={{ mt: 2, ml: 1 }}
                  >
                    Add Skill
                  </Button>
                </div>
              )}
            </FieldArray>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Skills;
