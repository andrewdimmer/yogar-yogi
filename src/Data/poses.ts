export declare interface YogaPose {
  name: string;
  difficulty: "beginner" | "intermediate" | "advanced";
  pose?: any;
  video?: string;
  ar?: ARInfo;
}

declare interface ARInfo {
  echoarId: string;
  preview: string;
  usdz: string;
}

export const yogaPoses: YogaPose[] = [
  {
    name: "Chair Pose",
    difficulty: "beginner",
    video: "https://www.youtube.com/embed/aP5elwNjfHU",
  },
  {
    name: "Tree Pose",
    difficulty: "beginner",
    video: "https://www.youtube.com/embed/wdln9qWYloU",
  },
  {
    name: "Warior I Pose",
    difficulty: "beginner",
    video: "https://www.youtube.com/embed/5rT--p_cLOc",
  },
  {
    name: "Triangle Pose",
    difficulty: "intermediate",
    video: "https://www.youtube.com/embed/upFYlxZHif0",
  },
  {
    name: "Full Lotus Pose",
    difficulty: "advanced",
    video: "https://www.youtube.com/embed/odKi0b2K4LY",
    ar: {
      echoarId: "eabfa791-ab02-4c79-be35-447596ff6f6f",
      preview: window.location.href + "/assets/images/LotusPose.jpg",
      usdz: window.location.href + "/assets/models/Anna_Full_Lotus.usdz",
    },
  },
  {
    name: "Reverse Wheel Pose",
    difficulty: "advanced",
    ar: {
      echoarId: "938011b5-8ecf-4b69-aecf-62747172e874",
      preview: window.location.href + "/assets/images/WheelPose.jpg",
      usdz: window.location.href + "/assets/models/Anna_Reverse_Wheel.usdz",
    },
  },
];
