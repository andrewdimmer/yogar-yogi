import {
  Container,
  Step,
  StepLabel,
  Stepper,
  Typography,
} from "@material-ui/core";
import { Pose } from "@tensorflow-models/posenet";
import React, { Fragment } from "react";
import { PageProps } from ".";
import { yogaPoses } from "../../Data/poses";
import { Calibration, getCalibration } from "../../Scripts/poseCalibration";
import CalibrateCamera from "../Content/GameModules/CalibrateCamera";
import Practice from "../Content/GameModules/Practice";
import GrantCameraAccess from "../Content/GameModules/GrantCameraAccess";
import ScoreScreen from "../Content/GameModules/ScoreScreen";
import SelectPoses from "../Content/GameModules/SelectPoses";
import ErrorPage from "./ErrorPage";

const PracticePage: React.FunctionComponent<PageProps> = ({
  setPageKey,
  setNotification,
  setLoadingMessage,
  classes,
}) => {
  const [activeStep, setActiveStep] = React.useState<number>(0);
  const [skipped, setSkipped] = React.useState(new Set<number>());
  const [calibration, setCalibration] = React.useState<Calibration | null>(
    null
  );
  const [poses, setPoses] = React.useState<boolean[]>(
    yogaPoses.map(() => true)
  );
  const steps = [
    "Grant Camera Permission",
    "Calibrate Camera",
    "Select Poses",
    "Practice!",
  ];

  function getStepContent(step: number) {
    switch (step) {
      case 0:
        return (
          <GrantCameraAccess
            setNotification={setNotification}
            nextStep={handleNext}
            classes={classes}
          />
        );
      case 1:
        return (
          <CalibrateCamera
            nextStep={handleNext}
            previousStep={handleBack}
            classes={classes}
            setCalibration={handleCalibration}
          />
        );
      case 2:
        return (
          <SelectPoses
            nextStep={handleNext}
            previousStep={handleBack}
            skipStep={handleSkip}
            classes={classes}
            poses={poses}
            setPoses={setPoses}
          />
        );
      case 3:
        if (calibration !== null) {
          return (
            <Practice
              nextStep={handleNext}
              previousStep={handleBack}
              classes={classes}
              calibration={calibration}
              poses={yogaPoses.reduce((prev, current, index) => {
                if (poses[index] && current.pose) {
                  prev.push(current.pose);
                }
                return prev;
              }, [] as Pose[])}
            />
          );
        } else {
          return (
            <Typography variant="body1">
              Error! Calibration is not set. Please refresh the page and try
              again.
            </Typography>
          );
        }
      case 4:
        return (
          <ScoreScreen
            previousStep={handleBack}
            setPageKey={setPageKey}
            classes={classes}
          />
        );
      default:
        return (
          <ErrorPage
            setPageKey={setPageKey}
            setLoadingMessage={setLoadingMessage}
            setNotification={setNotification}
            classes={classes}
          />
        );
    }
  }

  const isStepOptional = (step: number) => {
    return step === 2;
  };

  const isStepSkipped = (step: number) => {
    return skipped.has(step);
  };

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
      setNotification({
        type: "warning",
        message: "You can't skip a step that is not optional!",
        open: true,
      });
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleCalibration = (poses: Pose[]) => {
    console.log("Starting get calibration");
    const temp = getCalibration(poses);
    if (temp) {
      console.log("Calinration complete.");
      setCalibration(temp);
      handleNext();
    } else {
      console.log("Calibration failed.");
      setNotification({
        type: "error",
        message: "Calibration Failed. Please try again.",
        open: true,
      });
    }
  };

  return (
    <Fragment>
      <Container className={classes.pageTitle}>
        <Typography variant="h3">
          Let's get ready to play yogAR yogi!
        </Typography>
      </Container>
      <Stepper activeStep={activeStep} className={classes.themeBackgroundColor}>
        {steps.map((label, index) => {
          const stepProps: { completed?: boolean } = {};
          const labelProps: { optional?: React.ReactNode } = {};
          if (isStepOptional(index)) {
            labelProps.optional = (
              <Typography variant="caption">Optional</Typography>
            );
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {getStepContent(activeStep)}
    </Fragment>
  );
};

export default PracticePage;
