import { SvgIconTypeMap } from "@material-ui/core";
import { OverridableComponent } from "@material-ui/core/OverridableComponent";
import HomeIcon from "@material-ui/icons/Home";
import PlayIcon from "@material-ui/icons/SportsEsports";
import { NotificationMessage } from "../Misc/Notifications";
import ErrorPage from "./ErrorPage";
import HomePage from "./HomePage";
import PlayPage from "./PlayPage";

export declare interface PageProps {
  setPageKey: (pageKey: string) => void;
  setLoadingMessage: (loadingMessage: string) => void;
  setNotification: (notification: NotificationMessage) => void;
  classes: any;
}

export declare interface PageListForMenuItem {
  key: string;
  menuLabel: string;
  menuIcon: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
  displaySignedIn: boolean;
  displaySignedOut: boolean;
}

declare interface PageListItem extends PageListForMenuItem {
  title: string;
  component: React.FunctionComponent<PageProps>;
}

const pageList: PageListItem[] = [
  {
    key: "home",
    title: "",
    menuLabel: "Home",
    menuIcon: HomeIcon,
    displaySignedIn: true,
    displaySignedOut: true,
    component: HomePage,
  },
  {
    key: "play",
    title: "Play",
    menuLabel: "Play",
    menuIcon: PlayIcon,
    displaySignedIn: true,
    displaySignedOut: true,
    component: PlayPage,
  },
];

const pageObject = pageList.reduce((pageObject, pageListItem) => {
  pageObject[pageListItem.key] = pageListItem;
  return pageObject;
}, {} as { [key: string]: PageListItem });

export const getPageComponent = (
  key: string
): React.FunctionComponent<PageProps> => {
  if (pageObject[key]) {
    return pageObject[key].component;
  }
  return ErrorPage;
};

export const getPageTitle = (key: string): string => {
  if (pageObject[key]) {
    return pageObject[key].title;
  }
  return "";
};

export const pageListForMenu: PageListForMenuItem[] = pageList.map(
  ({ key, menuLabel, menuIcon, displaySignedIn, displaySignedOut }) => {
    return { key, menuLabel, menuIcon, displaySignedIn, displaySignedOut };
  }
);
