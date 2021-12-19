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
  const onStatusSwitch = async () => {
    const checkValue = await data[0];
    console.log('checkValue', checkValue.relay1);
  };
  onStatusSwitch();
  useEffect(() => {
    getValueControl()(controlDispatch);
  }, []);

  const toggleValueChange = ({name, value}) => {
    setForm({...form, [name]: value});
    console.log('value', value);
  };
  const onSubmit = () => {
    setValueControl(form)(controlDispatch);
    console.log('form', form);
  };
  return (
    <ControllerComponent
      data={data}
      form={form}
      error={error}
      loading={getLoadingg}
      toggleValueChange={toggleValueChange}
      onSubmit={onSubmit}
    />
  );
};

export default Controller;
