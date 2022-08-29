import {
  Box,
  Button,
  Container,
  Step,
  StepLabel,
  Stepper,
  Typography,
} from "@mui/material";
import { Form, Formik } from "formik";
import { useState } from "react";
import Education from "./Education";
import PersonalDetails from "./PersonalDetails";
import Skills from "./Skills";
import Volunteering from "./Volunteering";
import Work from "./Work";

const initialValues = {
  personalDetails: {
    name: "",
    email: "",
    number: "",
    linkedin: "",
  },
  skills: [
    {
      skill: "",
    },
  ],
  educations: [
    {
      school: "",
      course: "",
      startDate: "",
      endDate: "",
    },
  ],
  works: [
    {
      company: "",
      jobTitle: "",
      startDate: "",
      endDate: "",
      responsibilities: [
        {
          description: "",
        },
      ],
    },
  ],
  volunteering: [
    {
      charity: "",
      title: "",
      startDate: "",
      endDate: "",
      description: "",
    },
  ],
};

const Builder = () => {
  const [formData, setFormData] = useState("");

  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const steps = [
    {
      label: "Personal Details",
      element: (label: any, values: any) => <PersonalDetails label={label} />,
    },
    {
      label: "Education",
      element: (label: any, values: any) => (
        <Education label={label} values={values} />
      ),
    },
    {
      label: "Work Experience",
      element: (label: any, values: any) => (
        <Work label={label} values={values} />
      ),
    },
    {
      label: "Volunteering",
      element: (label: any, values: any) => (
        <Volunteering label={label} values={values} />
      ),
    },
    {
      label: "Skills",
      element: (label: any, values: any) => (
        <Skills label={label} values={values} />
      ),
    },
  ];

  return (
    <Container component="main" maxWidth="md" sx={{ mb: 4 }}>
      <Formik
        initialValues={initialValues}
        onSubmit={async (values) => {
          setFormData(JSON.stringify(values, null, 2));
        }}
      >
        {({ values }) => (
          <Form>
            <Box sx={{ width: "100%", mt: 4, mb: 4 }}>
              <Stepper activeStep={activeStep}>
                {steps.map((step, index) => (
                  <Step key={index}>
                    <StepLabel>{step.label}</StepLabel>
                  </Step>
                ))}
              </Stepper>
            </Box>

            <Box sx={{ width: "100%", mt: 4, mb: 4 }}>
              {steps[activeStep].element(steps[activeStep].label, values)}
            </Box>

            {activeStep === steps.length - 1 ? (
              <>
                <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                  <Button
                    variant="contained"
                    sx={{ mt: 3, ml: 1 }}
                    type="submit"
                  >
                    Generate CV/Resume
                  </Button>
                </Box>
              </>
            ) : (
              <>
                <Box
                  sx={{ mb: 2, display: "flex", justifyContent: "flex-end" }}
                >
                  <div>
                    <Button
                      variant="contained"
                      onClick={handleNext}
                      sx={{ mt: 1, mr: 1 }}
                    >
                      Continue
                    </Button>
                    <Button
                      disabled={activeStep === 0}
                      onClick={handleBack}
                      sx={{ mt: 1, mr: 1 }}
                    >
                      Back
                    </Button>
                  </div>
                </Box>
              </>
            )}
            <Typography>{JSON.stringify(values, null, "\t")}</Typography>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default Builder;
