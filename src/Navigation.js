import React from 'react';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import DashBoard from './Screens/Dashborad';
import Event from './Screens/Event';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import AdaptiveHeader from './Components/AdaptiveHeader';
import Discuss from './Screens/Discuss';
import Color from './Style/Color';
import Menu from './Screens/Menu';

const DashBoardStack = createStackNavigator({
  DashBoard: {
    screen: Menu,
    navigationOptions: {
      title: 'Overview',
    },
  },
});

const EventStack = createStackNavigator({
  DashBoard: {
    screen: Event,
    navigationOptions: {
      title: 'Event',
    },
  },
});

const DiscussStack = createStackNavigator({
  DashBoard: {
    screen: Discuss,
    navigationOptions: {
      title: 'Discuss',
    },
  },
});

const TabNavigator = createBottomTabNavigator(
  {
    Overview: DashBoardStack,
    Event: EventStack,
    Discuss: DiscussStack,
    Menu: EventStack,
  },
  {
    initialRouteName: 'Overview',
    defaultNavigationOptions: ({navigation}) => ({
      tabBarIcon: ({focused, horizontal, tintColor}) => {
        const {routeName} = navigation.state;
        let IconComponent = Icon;
        let iconName;
        if (routeName === 'Overview') {
          iconName = 'layers';
        } else if (routeName === 'Event') {
          iconName = 'event';
        } else if (routeName === 'Discuss') {
          iconName = 'bubbles';
        } else if (routeName === 'Menu') {
          iconName = 'menu';
        }
        return <IconComponent name={iconName} size={25} color={tintColor} />;
      },
    }),
    headerMode: 'none',
    // headerTransitionPreset: 'uikit',
    tabBarOptions: {
      activeTintColor: Color.first,
      inactiveTintColor: Color.gray,
    },
  },
);

const StackNavigator = createStackNavigator(
  {
    TabNavigator: TabNavigator,
    Event: Event,
    Discuss: Event,
    Menu: Event,
  },
  {
    headerMode: 'none',
    headerTransitionPreset: 'uikit',
  },
);


export default createAppContainer(StackNavigator);
