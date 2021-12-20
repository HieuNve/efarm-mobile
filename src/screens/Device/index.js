import { useRoute } from '@react-navigation/core';
import React, { useContext, useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import DeviceComponent from '../../components/DeviceComponent';
import getDevice from '../../context/actions/device/getDevice';
import { GlobalContext } from '../../context/Provider';
const Device = () => {
  const { params: { item = {} } = {} } = useRoute();
  const deviceID = item.deviceID;
  const [render, setRender] = useState(false);
  const [dataDT, setDT] = useState({});
  const {
    deviceDispatch,
    deviceState: {
      getDevice: { data, loading },
    },
  } = useContext(GlobalContext);

  useEffect(() => {
    setTimeout(() => {
      setRender(!render);
      getDevice()({ deviceID })(deviceDispatch);
    }, 1000);
  }, [render]);
  return <DeviceComponent data={data} loading={loading} />;
};
export default Device;
