import {Platform, StatusBar, Dimensions} from 'react-native';
import {isIphoneX} from 'react-native-iphone-x-helper';

// console.log('StatusBar', StatusBar);
export const statusBarHeight =
  Platform.OS === 'ios' ? (isIphoneX() ? 44 : 20) : StatusBar.currentHeight;
export const headerHeight = Platform.OS === 'ios' ? 44 : 56;
export const paddingBottomHeight =
  Platform.OS === 'ios' ? (isIphoneX() ? 34 : 0) : 0;
