import {
  TextField,
  Button,
  Stepper,
  Step,
  StepLabel,
  Typography,
  Box,
} from "@mui/material";
import { useState } from "react";
import { useForm, Controller } from "react-hook-form";

const BuilderForm = () => {
  const { handleSubmit, control, reset } = useForm();
  const onSubmit = (data: any) => console.log(data);

  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      label: "Basic Details",
      element: (
        <Box sx={{ display: "flex", flexDirection: "column", pt: 2 }}>
          <Controller
            name={"fullname"}
            control={control}
            render={({ field: { onChange, value } }) => (
              <TextField
                onChange={onChange}
                value={value}
                label={"Full Name"}
                variant="filled"
              />
            )}
          />
          <Controller
            name={"email"}
            control={control}
            render={({ field: { onChange, value } }) => (
              <TextField
                onChange={onChange}
                value={value}
                label={"Email Address"}
                type="email"
                variant="filled"
              />
            )}
          />
          <Controller
            name={"number"}
            control={control}
            render={({ field: { onChange, value } }) => (
              <TextField
                onChange={onChange}
                value={value}
                label={"Contact Number"}
                type="tel"
                variant="filled"
              />
            )}
          />
        </Box>
      ),
    },
  ];

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
    reset();
  };

  return (
    <form>
      <Stepper activeStep={activeStep}>
        {steps.map((step, index) => {
          const stepProps: { completed?: boolean } = {};
          const labelProps: {
            optional?: React.ReactNode;
          } = {};
          return (
            <Step key={index} {...stepProps}>
              <StepLabel {...labelProps}>{step.label}</StepLabel>
              {step.element}
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length && (
        <Typography sx={{ mt: 2, mb: 1 }}>
          All steps completed - you&apos;re finished
        </Typography>
      )}
      <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
        {activeStep !== steps.length && (
          <>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            {activeStep === steps.length - 1 ? (
              <Button onClick={handleNext}>Next</Button>
            ) : (
              <>
                <Button onClick={handleSubmit(onSubmit)}>Finish</Button>
              </>
            )}
          </>
        )}
        <Button onClick={handleReset} variant={"outlined"}>
          Reset
        </Button>
      </Box>
    </form>
  );
};

export default BuilderForm;
