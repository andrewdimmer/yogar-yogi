import { Container, Typography, Button } from "@material-ui/core";
import React, { Fragment } from "react";
import { styles } from "../../Styles";
import { PageProps } from ".";

const HomePage: React.FunctionComponent<PageProps> = ({ setPageKey }) => {
  const classes = styles();

  return (
    <Fragment>
      <Container className={classes.pageTitle}>
        <Typography variant="h3">Dance 'Til You Drop!</Typography>
      </Container>
      <Button
        color="primary"
        fullWidth
        variant="contained"
        size="large"
        className={classes.marginedTopBottom}
        onClick={() => {
          setPageKey("play");
        }}
      >
        <Typography variant="h4">Play!</Typography>
      </Button>
    </Fragment>
  );
};

export default HomePage;
