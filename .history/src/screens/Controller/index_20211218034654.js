import React, {useContext, useEffect, useState, useRef} from 'react';
import {View, Text} from 'react-native';
import ControllerComponent from '../../components/ControllerComponent';
import getValueControl from '../../context/actions/device/getValueControl';
import setValueControl from '../../context/actions/device/setValueControl';
import {GlobalContext} from '../../context/Provider';
const Controller = () => {
  const [valueCurrent, setValueCurrent] = useState({});
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});

  const {
    controlDispatch,
    valueControlState: {
      getValueControl: {data, loading: getLoadingg},
      setValueControl: {error},
    },
  } = useContext(GlobalContext);

  const sheetRef = useRef(null);
  // const onValueChange = ({name, value}) => {
  //   setForm({...form, [name]: value});
  //   setValueControl(form)(controlDispatch);
  //   console.log('value: ', form);
  // };
  useEffect(() => {
    getValueControl()(controlDispatch);
  }, []);

  const toggleValueChange = () => {
    setForm({...form, relay1: !form.relay1, relay2: !form.relay2});
    setValueControl(form)(controlDispatch);
    console.log('loading: ', form);
  };

  return (
    <ControllerComponent
      data={data}
      form={form}
      error={error}
      loading={getLoadingg}
      toggleValueChange={toggleValueChange}
    />
  );
};

export default Controller;
