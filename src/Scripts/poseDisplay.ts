import { Pose } from "@tensorflow-models/posenet";
import { Calibration } from "./poseCalibration";

let danceGeneratorNumber = 0;
let i = 0;

export const getDanceGeneratorNumber = () => danceGeneratorNumber;

export const removeDanceGenerator = () => {
  danceGeneratorNumber = 0;
};

export const createDanceGenerator = (
  calibration: Calibration,
  instanceNumber: number,
  possiblePoses: Pose[],
  setDance: (pose: Pose) => void
) => {
  danceGeneratorNumber = instanceNumber;
  i = 0;
  generateDancePose(calibration, instanceNumber, possiblePoses, setDance);
};

const generateDancePose = (
  calibration: Calibration,
  instanceNumber: number,
  possiblePoses: Pose[],
  setDance: (pose: Pose) => void
) => {
  setDance(possiblePoses[i]);
  i = (i + 1) % possiblePoses.length;
  setTimeout(
    () =>
      generateDancePose(calibration, instanceNumber, possiblePoses, setDance),
    10000
  );
};
