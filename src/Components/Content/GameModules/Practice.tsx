import { Button, Container, Typography } from "@material-ui/core";
import React, { Fragment } from "react";
import { Calibration } from "../../../Scripts/poseCalibration";
import FullScreenWebcamOverlay from "../FullScreenWebcamOverlay";
import { Pose } from "@tensorflow-models/posenet";

declare interface PracticeProps {
  nextStep: () => void;
  previousStep: () => void;
  classes: any;
  calibration: Calibration;
  poses: Pose[];
}

const Practice: React.FunctionComponent<PracticeProps> = ({
  nextStep,
  previousStep,
  classes,
  calibration,
  poses,
}) => {
  const [practicing, setPracticing] = React.useState<boolean>(false);

  return (
    <Fragment>
      <Container className={classes.pageTitle}>
        <Typography variant="h4">Practice!</Typography>
      </Container>
      <Typography variant="body1" className={classes.marginedTopBottom}>
        Ready? Press the button below to start!
      </Typography>
      <Button
        color="primary"
        fullWidth
        variant="contained"
        size="large"
        className={classes.marginedTopBottom}
        disabled={practicing}
        onClick={() => {
          setPracticing(true);
        }}
      >
        <Typography variant="h5">Start Practicing!</Typography>
      </Button>
      <Button
        color="primary"
        variant="outlined"
        className={classes.marginedTopBottom}
        disabled={practicing}
        onClick={previousStep}
      >
        <Typography variant="body1">Reselect Poses</Typography>
      </Button>
      {practicing && (
        <FullScreenWebcamOverlay
          onClose={() => {
            setPracticing(false);
            nextStep();
          }}
          classes={classes}
          calibration={calibration}
          possiblePoses={poses}
        />
      )}
    </Fragment>
  );
};

export default Practice;
