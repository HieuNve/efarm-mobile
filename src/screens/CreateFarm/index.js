import React, { useState, useEffect, useContext } from "react";
import { View, Text } from "react-native";
import CreateFarmComponent from "../../components/CreateFarmComponent";
import { useNavigation } from "@react-navigation/native";
import { GlobalContext } from "../../context/Provider";
import createFarm from "../../context/actions/farm/createFarm";
import { HOME } from "../../constants/routeName";
import AsyncStorage from '@react-native-async-storage/async-storage';
const CreateFarm = () => {
  const [form, setForm] = useState({});
  const [uuid, setUuid] = useState();
  const { navigate } = useNavigation();
  const [errors, setErrors] = useState({});
  const getUser = async () => {
    try {
      const uuid = await AsyncStorage.getItem('uuid');
      setUuid(uuid);
    } catch (err) { }
  };
  useEffect(() => {
    getUser();
  }, [form]);
  console.log(uuid);
  const {
    farmDispatch,
    farmState: {
      createFarm: { error, loading } },
  } = useContext(GlobalContext);

  const onChange = ({ name, value }) => {
    setForm({ ...form, [name]: value });

    if (value !== "") {
      setErrors((prev) => {
        return { ...prev, [name]: null };
      });
    } else {
      setErrors((prev) => {
        return { ...prev, [name]: "Không được để trống" };
      });
    }
  };
  const onSubmit = () => {
    //Validations
    console.log('form :>> ', form);
    if (!form.farmName) {
      setErrors((prev) => {
        return { ...prev, farmName: "Hãy Nhập Tên Vườn" };
      });
    }
    if (!form.location) {
      setErrors((prev) => {
        return { ...prev, location: "Không được để trống" };
      });
    }

    if (
      Object.values(form).length === 8 &&
      // Object.values(form).every((item) => item.trim().length > 0)
      //  &&
      Object.values(errors).every((item) => !item)
    ) {
      createFarm(form)(uuid)(farmDispatch)(() => {
        console.log("farm", uuid);
        navigate(HOME);
      });
    } else {

      console.log("Nothing ");
    }
  };
  return (
    <CreateFarmComponent
      onSubmit={onSubmit}
      onChange={onChange}
      form={form}
      errors={errors}
      error={error}
      loading={loading}
    />
  );
};

export default CreateFarm;
