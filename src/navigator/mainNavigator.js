import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Maps158523Navigator from '../features/Maps158523/navigator';
import Settings158501Navigator from '../features/Settings158501/navigator';
import Settings158486Navigator from '../features/Settings158486/navigator';
import NotificationList158485Navigator from '../features/NotificationList158485/navigator';
import Maps158484Navigator from '../features/Maps158484/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Maps158523: { screen: Maps158523Navigator },
Settings158501: { screen: Settings158501Navigator },
Settings158486: { screen: Settings158486Navigator },
NotificationList158485: { screen: NotificationList158485Navigator },
Maps158484: { screen: Maps158484Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
