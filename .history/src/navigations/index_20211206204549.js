import {NavigationContainer} from '@react-navigation/native';
import * as React from 'react';
import DrawerNavigator from './DrawerNavigator';
import HomeNavigator from './HomeNavigator';

const AppNavContainer = () => {
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
};
export default AppNavContainer;
