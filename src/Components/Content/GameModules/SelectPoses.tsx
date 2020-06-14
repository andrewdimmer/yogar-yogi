import {
  Button,
  Checkbox,
  Container,
  Divider,
  Fab,
  List,
  ListItem,
  ListItemAvatar,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@material-ui/core";
import ARIcon from "@material-ui/icons/Layers";
import YouTubeIcon from "@material-ui/icons/YouTube";
import React, { Fragment } from "react";
import { yogaPoses } from "../../../Data/poses";
import ArInfoViewer from "../InfoViewers/ArInfoViewer";
import VideoInfoViewer from "../InfoViewers/VideoInfoViewer";

declare interface SelectPosesProps {
  nextStep: () => void;
  previousStep: () => void;
  skipStep: () => void;
  classes: any;
  poses: boolean[];
  setPoses: (poses: boolean[]) => void;
}

const SelectPoses: React.FunctionComponent<SelectPosesProps> = ({
  nextStep,
  previousStep,
  skipStep,
  classes,
  poses,
  setPoses,
}) => {
  const [arOpen, setArOpen] = React.useState<number | null>(null);
  const [videoOpen, setVideoOpen] = React.useState<number | null>(null);

  const handleChange = (index: number) => {
    const newArray = poses.concat([]);
    newArray[index] = !newArray[index];
    setPoses(newArray);
  };

  return (
    <Fragment>
      <Container className={classes.pageTitle}>
        <Typography variant="h4">Select Poses</Typography>
      </Container>
      <Container className={classes.pageTitle}>
        <List>
          {yogaPoses.map((data, index) => (
            <Fragment>
              <ListItem key={index}>
                <ListItemIcon>
                  <Checkbox
                    edge="start"
                    checked={poses[index]}
                    color="primary"
                    onChange={() => handleChange(index)}
                  />
                </ListItemIcon>
                <ListItemText
                  primary={data.name}
                  secondary={`Difficulty: ${data.difficulty}`}
                />
                <ListItemAvatar className={classes.marginRight}>
                  <Fab
                    disabled={!data.video}
                    onClick={() => setVideoOpen(index)}
                  >
                    <YouTubeIcon />
                  </Fab>
                </ListItemAvatar>
                <ListItemAvatar>
                  <Fab disabled={!data.ar} onClick={() => setArOpen(index)}>
                    <ARIcon />
                  </Fab>
                </ListItemAvatar>
              </ListItem>
              <Divider className={classes.margined} key={"divider_" + index} />
            </Fragment>
          ))}
        </List>
      </Container>
      <Button
        color="primary"
        fullWidth
        variant="contained"
        size="large"
        className={classes.marginedTopBottom}
        onClick={nextStep}
      >
        <Typography variant="h5">Ready!</Typography>
      </Button>
      <Button
        color="primary"
        variant="outlined"
        className={classes.marginedTopBottom}
        onClick={previousStep}
      >
        <Typography variant="body1">Recalibrate camera</Typography>
      </Button>
      <VideoInfoViewer
        open={videoOpen}
        setOpen={setVideoOpen}
        classes={classes}
      />
      <ArInfoViewer open={arOpen} setOpen={setArOpen} classes={classes} />
    </Fragment>
  );
};

export default SelectPoses;
