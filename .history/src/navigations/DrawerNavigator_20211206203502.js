import {createDrawerNavigator} from '@react-navigation/drawer';

import React from 'react';
import {View, Text} from 'react-native';
import Feed from '../screens/Feed';
import Hello from '../screens/Hello';

const DrawerNavigator = () => {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Feed" component={Feed} />
      <Drawer.Screen name="Hello" component={Hello} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
