import { Container, Typography, Button } from "@material-ui/core";
import React, { Fragment } from "react";
import { styles } from "../../Styles";
import { PageProps } from ".";

const HomePage: React.FunctionComponent<PageProps> = ({ setPageKey }) => {
  const classes = styles();

  return (
    <Fragment>
      <Container className={classes.pageTitle}>
        <Typography variant="h3">yogAR yogi!</Typography>
      </Container>
      <Button
        color="primary"
        fullWidth
        variant="contained"
        size="large"
        className={classes.marginedTopBottom}
        onClick={() => {
          setPageKey("learn");
        }}
      >
        <Typography variant="h4">Learn New Poses!</Typography>
      </Button>
      <Button
        color="primary"
        fullWidth
        variant="contained"
        size="large"
        className={classes.marginedTopBottom}
        onClick={() => {
          setPageKey("practice");
        }}
      >
        <Typography variant="h4">Practice Your Yoga!</Typography>
      </Button>
    </Fragment>
  );
};

export default HomePage;
