import {useRoute} from '@react-navigation/core';
import React, {useContext, useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import DeviceComponent from '../../components/DeviceComponent';
import getDevice from '../../context/actions/device/getDevice';
import {GlobalContext} from '../../context/Provider';
const Device = () => {
  const [render, setRender] = useState(false);
  const {params: {item = {}} = {}} = useRoute();
  const deviceID = item.deviceID;
  const {
    deviceDispatch,
    deviceState: {
      getDevice: {data},
    },
  } = useContext(GlobalContext);

  useEffect(() => {
    setTimeout(() => {
      setRender(!render);
      getDevice()({deviceID})(deviceDispatch);
    }, 2000);
  }, [render]);
  return <DeviceComponent data={data} />;
};
export default Device;
