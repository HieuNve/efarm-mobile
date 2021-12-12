import React from 'react';
import {View, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

import Home from '../screens/Home';
import Hello from '../screens/Hello';
const HomeNavigator = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{headerTitleAlign: 'center', headerShown: false}}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Hello" component={Hello} />
    </Stack.Navigator>
  );
};

export default HomeNavigator;
