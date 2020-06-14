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
    pose: {
      keypoints: [
        {
          part: "nose",
          position: { x: 688.3834477596702, y: 207.168208753559 },
          score: 0.7880235314369202,
        },
        {
          part: "leftEye",
          position: { x: 679.6368694337585, y: 200.28380412786782 },
          score: 0.5736747980117798,
        },
        {
          part: "rightEye",
          position: { x: 698.8877200147555, y: 203.6276020533602 },
          score: 0.5442556738853455,
        },
        {
          part: "leftEar",
          position: { x: 670.0089201903062, y: 217.25923597308952 },
          score: 0.03547674044966698,
        },
        {
          part: "rightEar",
          position: { x: 711.0707439660624, y: 207.2351460792649 },
          score: 0.196321502327919,
        },
        {
          part: "leftShoulder",
          position: { x: 697.378977886541, y: 273.4869874766175 },
          score: 0.5603044629096985,
        },
        {
          part: "rightShoulder",
          position: { x: 753.7353896451439, y: 242.98668407386458 },
          score: 0.42788994312286377,
        },
        {
          part: "leftElbow",
          position: { x: 720.6949143819826, y: 279.33716207155044 },
          score: 0.014575042761862278,
        },
        {
          part: "rightElbow",
          position: { x: 704.3446014044056, y: 174.3857715029112 },
          score: 0.25847163796424866,
        },
        {
          part: "leftWrist",
          position: { x: 677.1156485494836, y: 114.63995533258145 },
          score: 0.12120731174945831,
        },
        {
          part: "rightWrist",
          position: { x: 688.4480033990304, y: 62.05825558514664 },
          score: 0.07293038070201874,
        },
        {
          part: "leftHip",
          position: { x: 688.8510466345648, y: 443.93476389495424 },
          score: 0.9059222340583801,
        },
        {
          part: "rightHip",
          position: { x: 743.4170809097676, y: 425.9386612529486 },
          score: 0.9487338662147522,
        },
        {
          part: "leftKnee",
          position: { x: 593.1720932032568, y: 529.8801683237855 },
          score: 0.8696625828742981,
        },
        {
          part: "rightKnee",
          position: { x: 853.7170653061762, y: 565.1642312600579 },
          score: 0.6610965728759766,
        },
        {
          part: "leftAnkle",
          position: { x: 628.2955759701399, y: 670.1128588528701 },
          score: 0.7840789556503296,
        },
        {
          part: "rightAnkle",
          position: { x: 973.2624561123262, y: 648.9634743274098 },
          score: 0.5148862600326538,
        },
      ],
      score: 0.4869124410016572,
    },
    video: "https://www.youtube.com/embed/wdln9qWYloU",
  },
  {
    name: "Warior I Pose",
    difficulty: "beginner",
    pose: {
      keypoints: [
        {
          part: "nose",
          position: { x: 688.0746362181177, y: 180.65620218196386 },
          score: 0.9730435013771057,
        },
        {
          part: "leftEye",
          position: { x: 677.8697478887806, y: 179.86556445376976 },
          score: 0.9366183876991272,
        },
        {
          part: "rightEye",
          position: { x: 698.4784264910281, y: 163.9256348408444 },
          score: 0.9132776856422424,
        },
        {
          part: "leftEar",
          position: { x: 674.5932963019077, y: 195.1593911614217 },
          score: 0.32476046681404114,
        },
        {
          part: "rightEar",
          position: { x: 717.1611393997682, y: 180.1632571421879 },
          score: 0.45841190218925476,
        },
        {
          part: "leftShoulder",
          position: { x: 684.8376946537733, y: 246.68554547806866 },
          score: 0.861176609992981,
        },
        {
          part: "rightShoulder",
          position: { x: 750.6959318061301, y: 224.0710293407172 },
          score: 0.8184776902198792,
        },
        {
          part: "leftElbow",
          position: { x: 659.3175610804437, y: 148.9228345844108 },
          score: 0.452440470457077,
        },
        {
          part: "rightElbow",
          position: { x: 728.5711680214482, y: 152.190300417618 },
          score: 0.19869288802146912,
        },
        {
          part: "leftWrist",
          position: { x: 659.8384834791316, y: 36.66208530479753 },
          score: 0.4454987049102783,
        },
        {
          part: "rightWrist",
          position: { x: 661.4851231695629, y: 33.31357918322925 },
          score: 0.2888561487197876,
        },
        {
          part: "leftHip",
          position: { x: 708.9971449338968, y: 424.31181917056233 },
          score: 0.9808230996131897,
        },
        {
          part: "rightHip",
          position: { x: 754.5221336326149, y: 426.7866360973304 },
          score: 0.9679903388023376,
        },
        {
          part: "leftKnee",
          position: { x: 718.5363683073356, y: 541.608153450657 },
          score: 0.05268760025501251,
        },
        {
          part: "rightKnee",
          position: { x: 625.1708817634776, y: 536.1894266370317 },
          score: 0.9546836018562317,
        },
        {
          part: "leftAnkle",
          position: { x: 843.6856423903879, y: 627.0375701743113 },
          score: 0.3506052792072296,
        },
        {
          part: "rightAnkle",
          position: { x: 668.8096000581327, y: 697.5649528503418 },
          score: 0.504153847694397,
        },
      ],
      score: 0.6165998954983318,
    },
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
