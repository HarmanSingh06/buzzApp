import * as React from 'react';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Fb from './screens/fb';
import In from './screens/in'

export default class App extends React.Component {
  render() {
    return (
        <AppContainer/>
    );
  }
}

const AppNavigator = createBottomTabNavigator(
  {
    facebook: { screen: Fb },
    Instagram: { screen: In }
  }
)

const AppContainer = createAppContainer(AppNavigator)
