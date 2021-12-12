import 'react-native-gesture-handler';
import React from 'react';
import {View, Text} from 'react-native';
import AppNavContainer from './src/navigations';
import {NavigationContainer} from '@react-navigation/native';
const App = () => {
  return (
    <NavigationContainer>
      <AppNavContainer></AppNavContainer>
    </NavigationContainer>
  );
};

export default App;
