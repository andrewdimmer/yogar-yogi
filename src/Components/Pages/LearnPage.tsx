import {
  Container,
  Divider,
  Fab,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@material-ui/core";
import ARIcon from "@material-ui/icons/Layers";
import YouTubeIcon from "@material-ui/icons/YouTube";
import React, { Fragment } from "react";
import { PageProps } from ".";
import { yogaPoses } from "../../Data/poses";
import ArInfoViewer from "../Content/InfoViewers/ArInfoViewer";
import VideoInfoViewer from "../Content/InfoViewers/VideoInfoViewer";

const LearnPage: React.FunctionComponent<PageProps> = ({ classes }) => {
  const [arOpen, setArOpen] = React.useState<number | null>(null);
  const [videoOpen, setVideoOpen] = React.useState<number | null>(null);

  return (
    <Fragment>
      <Container className={classes.pageTitle}>
        <Typography variant="h3">Learn New Yoga Poses</Typography>
      </Container>
      <List>
        {yogaPoses.map((data, index) => (
          <Fragment>
            <ListItem key={index}>
              <ListItemText
                primary={data.name}
                secondary={`Difficulty: ${data.difficulty}`}
              />
              <ListItemAvatar className={classes.marginRight}>
                <Fab disabled={!data.video} onClick={() => setVideoOpen(index)}>
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
      <VideoInfoViewer
        open={videoOpen}
        setOpen={setVideoOpen}
        classes={classes}
      />
      <ArInfoViewer open={arOpen} setOpen={setArOpen} classes={classes} />
    </Fragment>
  );
};

export default LearnPage;
