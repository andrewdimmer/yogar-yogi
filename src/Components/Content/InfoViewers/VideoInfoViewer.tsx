import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Slide,
} from "@material-ui/core";
import { TransitionProps } from "@material-ui/core/transitions/transition";
import React from "react";
import { yogaPoses } from "../../../Data/poses";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children?: React.ReactElement<any, any> },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

declare interface VideoInfoViewerProps {
  open: number | null;
  setOpen: (value: number | null) => void;
  classes: any;
}

const VideoInfoViewer: React.FunctionComponent<VideoInfoViewerProps> = ({
  open,
  setOpen,
  classes,
}) => {
  const handleClose = () => {
    setOpen(null);
  };

  return (
    <Dialog
      open={open !== null}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
    >
      <DialogTitle>
        {"Learn How To Do The " + (open !== null ? yogaPoses[open].name : "")}
      </DialogTitle>
      <DialogContent>
        <iframe
          width="552"
          height="311"
          frameBorder={0}
          title="Video"
          src={open !== null ? yogaPoses[open].video : ""}
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
};

export default VideoInfoViewer;
