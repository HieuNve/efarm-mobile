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
    setValueCurrent(data);
  }, [valueCurrent]);

  const onValueChange = ({name, value}) => {
    setForm({...form, [name]: value});
    console.log('form', form);
    console.log('form', 'echksdfhsd');
  };

  const onSubmit = () => {};
  console.log('valueCurrent', valueCurrent);
  return (
    <ControllerComponent
      data={data}
      loading={loading}
      onChange={onValueChange}
    />
  );
};

export default Controller;
