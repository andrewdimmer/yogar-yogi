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

declare interface ArInfoViewerProps {
  open: number | null;
  setOpen: (value: number | null) => void;
  classes: any;
}

const ArInfoViewer: React.FunctionComponent<ArInfoViewerProps> = ({
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
      <DialogContent className={classes.centerText}>
        <a rel="ar" href={open !== null ? yogaPoses[open].ar?.usdz : ""}>
          <img
            width="311"
            height="311"
            alt={open !== null ? yogaPoses[open].name : ""}
            src={open !== null ? yogaPoses[open].ar?.preview : ""}
          />{" "}
        </a>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
};

export default ArInfoViewer;
