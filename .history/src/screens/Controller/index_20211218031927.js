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
      getValueControl: {data, loading},
      setValueControl: {error, loading},
    },
  } = useContext(GlobalContext);

  const sheetRef = useRef(null);
  const onValueChange = ({name, value}) => {
    setForm({...form, [name]: value});
    console.log('value: ', form);
    // setValueControl(form)(controlDispatch);
  };
  useEffect(() => {
    getValueControl()(controlDispatch);
  }, []);

  const toggleValueChange = () => {
    setForm({...form, relay1: !form.relay1});
    console.log('loading: ', form);
  };

  return (
    <ControllerComponent
      data={data}
      form={form}
      loading={loading}
      onChangeV={onValueChange}
      toggleValueChange={toggleValueChange}
    />
  );
};

export default Controller;
