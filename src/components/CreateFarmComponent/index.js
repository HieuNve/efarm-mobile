import React, { useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import Container from '../Common/Container';
import CustomButton from '../Common/CustomButton';
import Input from '../Common/Input';
import { Picker } from '@react-native-picker/picker';
const CreateFarmComponent = ({
  onChange,
  onSubmit,
  loading,
  uuid,
  form,
  errors,
  error,
}) => {
  const [selectionTree, setSelectionTree] = useState();
  return (
    <Container>
      <ScrollView>
        <Input
          placeholder={'Nhập Tên Vườn'}
          lable={'Tên Vườn'}
          value={form.farmName || null}
          onChangeText={value => {
            onChange({ name: 'farmName', value });
          }}
          error={errors.farmName || error?.farmName?.[0]}
        />

        <Input
          placeholder={'Nhập ID Thiết bị'}
          lable={'ID Thiết Bị'}
          value={form.deviceID || null}
          onChangeText={value => {
            onChange({ name: 'deviceID', value });
          }}
          error={errors.deviceID || error?.deviceID?.[0]}
        />
        <Text>Chọn Cây</Text>
        <View
          style={{
            height: 42,
            borderWidth: 1,
            borderRadius: 4,
            flex: 1,
            justifyContent: "center"
          }}>
          <Picker
            selectedValue={selectionTree}

            onValueChange={(itemValue, itemIndex) => {
              setSelectionTree(itemValue);
              const value = itemValue;
              onChange({ name: 'treeID', value });
            }
            }>
            <Picker.Item label="Chọn Cây Trồng" value="0" />
            <Picker.Item label="Cây Cà Chua" value="1" />
            <Picker.Item label="Cây Cải Thảo" value="2" />
            <Picker.Item label="Cây Bí Xanh" value="3" />
            <Picker.Item label="Cây Dưa Chuột" value="4" />
          </Picker>
        </View>
        <Input
          placeholder={'Nhập Địa Chỉ'}
          lable={'Địa Chỉ'}
          value={form.location || null}
          onChangeText={value => {
            onChange({ name: 'location', value });
          }}
          error={errors.location || error?.location?.[0]}
        />
        <Input
          placeholder={'Nhập Ngày Tạo Vườn'}
          lable={'Ngày Tạo Vườn'}
          value={form.timeStart || null}
          onChangeText={value => {
            onChange({ name: 'timeStart', value });
          }}
          error={errors.timeStart || error?.timeStart?.[0]}
        />
        <Input
          placeholder={'Nhập Quốc Gia'}
          lable={'Quốc Gia'}
          value={form.area || null}
          onChangeText={value => {
            onChange({ name: 'area', value });
          }}
          error={errors.area || error?.area?.[0]}
        />
        <Input
          placeholder={'Thời Gian Kết Thúc'}
          lable={'Thời Gian Kết Thúc'}
          value={form.timeFinish || null}
          onChangeText={value => {
            onChange({ name: 'timeFinish', value });
          }}
          error={errors.timeFinish || error?.timeFinish?.[0]}
        />
        <CustomButton title={'Thêm Vườn'} orange onPress={onSubmit} />
      </ScrollView>
    </Container>
  );
};

export default CreateFarmComponent;
