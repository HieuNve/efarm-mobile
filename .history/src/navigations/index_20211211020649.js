import React, {useContext, useState, useEffect} from 'react';
import {} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import DrawerNavigator from './DrawerNavigator';
import AuthNavigator from './AuthNavigator';
import {GlobalContext} from '../context/Provider';
import AsyncStorage from '@react-native-async-storage/async-storage';
import navigationRef from './SlideMenu/RootNaivgator';
import {ActivityIndicator} from 'react-native';
import firebase from '@react-native-firebase/app';
import messaging from '@react-native-firebase/messaging';
const AppNavContainer = () => {
  const {
    authState: {isLoggedIn},
  } = useContext(GlobalContext);
  const [isAuthenticated, setIsAuthenticated] = useState(isLoggedIn);
  const [authLoaded, setAuthLoaded] = React.useState(false);
  const getUser = async () => {
    try {
      const user = await AsyncStorage.getItem('user');
      const uuid = await AsyncStorage.getItem('uuid');
      if (user && uuid) {
        setAuthLoaded(true);
        setIsAuthenticated(true);
      } else {
        setAuthLoaded(true);
        setIsAuthenticated(false);
      }
    } catch (err) {}
  };
  useEffect(() => {
    getUser();
  }, [isLoggedIn]);
  console.log('check', 'Check login');
  useEffect(() => {
    messaging()
      .getToken(firebase.app().options.messagingSenderId)
      .then(token => {
        console.log('token', token);
      });

    const unsubcrible = messaging().onMessage(async remoteMsg => {
      console.log('remoteMsg', remoteMsg);
    });

    messaging().setBackgroundMessageHandler(async remoteMsg => {
      console.log('remoteMsgBackground', remoteMsg);
    });
    return unsubcrible;
  }, []);

  return (
    <>
      {authLoaded ? (
        <NavigationContainer ref={navigationRef}>
          {isAuthenticated ? <DrawerNavigator /> : <AuthNavigator />}
        </NavigationContainer>
      ) : (
        <ActivityIndicator />
      )}
    </>
  );
};
export default AppNavContainer;
