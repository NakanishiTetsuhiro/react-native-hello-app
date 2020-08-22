import React, { Component } from 'react';
import Page1DetailScreen from './screens/Page1DetailScreen';
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import Page1Screen from './screens/Page1Screen';
import Page2Screen from "./screens/Page2Screen";

const MainStack = createStackNavigator(
  {
    Page1: Page1Screen,
    Page1Detail: Page1DetailScreen,
  }
)

const TabNavigator = createBottomTabNavigator(
  {
    Page1: {
      screen: MainStack
    },
    Page2: Page2Screen,
  },
  {
    initialRouteName: 'Page1'
  }
)

const AppContainer = createAppContainer(TabNavigator)

export default class App extends Component {
  render() {
    return (
      <AppContainer />
    )
  }
}
