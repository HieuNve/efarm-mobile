import React from 'react';
import {View, Text} from 'react-native';
import Feed from '../screens/Feed';
import Hello from '../screens/Hello';
import {createDrawerNavigator} from '@react-navigation/drawer';
const DrawerNavigator = () => {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Feed" component={Feed} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
