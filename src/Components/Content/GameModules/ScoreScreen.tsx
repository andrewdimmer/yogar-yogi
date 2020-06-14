import { Button, Container, Typography } from "@material-ui/core";
import React, { Fragment } from "react";

declare interface ScoreScreenProps {
  setPageKey: (pageKey: string) => void;
  previousStep: () => void;
  classes: any;
}

const ScoreScreen: React.FunctionComponent<ScoreScreenProps> = ({
  setPageKey,
  previousStep,
  classes,
}) => {
  return (
    <Fragment>
      <Container className={classes.pageTitle}>
        <Typography variant="h4">Great Job!</Typography>
      </Container>
      <Typography variant="body1" className={classes.marginedTopBottom}>
        You earned an 83%!
      </Typography>
      <Button
        color="primary"
        fullWidth
        variant="contained"
        size="large"
        className={classes.marginedTopBottom}
        onClick={previousStep}
      >
        <Typography variant="h5">Replay the same set of poses</Typography>
      </Button>
      <Button
        color="primary"
        fullWidth
        variant="contained"
        size="large"
        className={classes.marginedTopBottom}
        onClick={() => {
          previousStep();
          previousStep();
        }}
      >
        <Typography variant="h5">Reselect Poses</Typography>
      </Button>
      <Button
        color="primary"
        fullWidth
        variant="outlined"
        size="large"
        className={classes.marginedTopBottom}
        onClick={() => {
          setPageKey("home");
        }}
      ></Button>
    </Fragment>
  );
};

export default ScoreScreen;
