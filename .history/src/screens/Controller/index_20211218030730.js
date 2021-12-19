import React, {useContext, useEffect, useState} from 'react';
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
      getValueControl: {data, loading},
    },
  } = useContext(GlobalContext);

  useEffect(() => {
    getValueControl()(controlDispatch);
  }, []);
  const toggleValueChange = () => {
    setForm({...form, relay1: !form.relay1});
    console.log('loading: ', form);
  };
  const onValueChange = ({name, value}) => {
    console.log('value', value);
    setForm({...form, [name]: value});
    console.log('form', form);
    // setValueControl(form)(controlDispatch);
  };

  return (
    <ControllerComponent
      data={data}
      loading={loading}
      onChangeV={onValueChange}
      toggleValueChange={toggleValueChange}
    />
  );
};

export default Controller;
