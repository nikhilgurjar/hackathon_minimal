import { useState } from 'react';
// @mui
import { alpha } from '@mui/material/styles';
import { Box, Step, Paper, Button, Stepper, StepLabel, Typography, Card } from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import BasicInfo from './Register/BasicInfo';
import Car from './Register/Car';
import CarDetails from './Register/CarDetails';
// ----------------------------------------------------------------------

const steps = ['Select campaign settings', 'Create an ad group', 'Create an ad'];

export default function HorizontalLinearStepper() {
  const [activeStep, setActiveStep] = useState(0);
  const [skipped, setSkipped] = useState(new Set<number>());

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      confirmPassword: '',
      name: '',
      carUsed: 'no',
      frequency_of_car:'',
      car_type:'',
      diet:'',
      type_of_home:'',
      no_of_bedroom:0,
      no_of_people:0
    },
    validationSchema: Yup.object().shape({
      email: Yup.string()
        .required('Email is required')
        .email('Invalid email'),
      password: Yup.string()
        .min(8),
      confirmPassword: Yup.string()
        .min(8)
        .oneOf([Yup.ref('password')], 'Passwords do not match'),
      name: Yup.string()
        .required('Name is required'),
      carUsed: Yup.string()
        .required('Car usage is required'),
      frequency_of_car: Yup.string()
        .required('Car usage frequency is required'),
      car_type: Yup.string()
        .required('Car type is required'),
      diet:Yup.string()
      .required('Diet type is required'),
      type_of_home:Yup.string()
      .required('type of home owned is required'),
      no_of_bedroom:Yup.string()
      .required('No of bedroom is required'),
      no_of_people:Yup.number()
      .required('Number of people in home is required'),
    }),
    onSubmit: () => {
      if (activeStep === 4) {
        console.log('last step');
      } else {
        setActiveStep((prevStep) => prevStep + 1);
      }
    }
  });

  const formContent = (step: number) => {
    switch(step) {
      case 0:
        return <BasicInfo formik={formik} />;
      case 1:
        return <Car formik={formik} />;
      case 2:
        return <CarDetails formik={formik} />;
      case 3:
        return <CarDetails formik={formik} />;
      case 4:
        return <CarDetails formik={formik} />;
      case 5:
        return <CarDetails formik={formik} />;
      default:
        return <div>404: Not Found</div>
    }
  };

  const isStepOptional = (step: number) => step === 1;

  const isStepSkipped = (step: number) => skipped.has(step);

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <>
      {activeStep === steps.length ? (
        <>
          <Paper
            sx={{
              p: 3,
              my: 3,
              minHeight: 120,
              bgcolor: (theme) => alpha(theme.palette.grey[500], 0.12),
            }}
          >
            <Typography sx={{ my: 1 }}>All steps completed - you&apos;re finished</Typography>
          </Paper>

          <Box sx={{ display: 'flex' }}>
            <Box sx={{ flexGrow: 1 }} />
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        </>
      ) : (
        <>
         <Card sx={{ p: 3,mb:3 }}>
       
            {formContent(activeStep)}
          </Card>
          <Box sx={{ display: 'flex' }}>
            <Button color="inherit" disabled={activeStep === 0} onClick={handleBack} sx={{ mr: 1 }}>
              Back
            </Button>
            <Box sx={{ flexGrow: 1 }} />
            {isStepOptional(activeStep) && (
              <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                Skip
              </Button>
            )}
            <Button variant="contained" onClick={handleNext}>
              {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
            </Button>
          </Box>
        </>
      )}
    </>
  );
}
