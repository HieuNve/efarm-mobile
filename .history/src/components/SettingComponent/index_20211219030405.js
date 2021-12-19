import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text} from 'react-native';
import CustomTouchableOpacy from '../Common/CustomTouchableOpacy';

const SettingComponent = () => {
  const {navigate} = useNavigation();
  return (
    <View>
      <CustomTouchableOpacy
        title={'Đổi Mật Khẩu'}
        secondary
        style={{height: 40, margin: 10, marginTop: 20}}
        onPress={() => {}}
      />
      <CustomTouchableOpacy
        title={'Chế Độ'}
        secondary
        style={{height: 40, margin: 10}}
      />
      <CustomTouchableOpacy
        title={'Xóa Tài Khoản'}
        secondary
        style={{height: 40, margin: 10}}
      />
    </View>
  );
};

export default SettingComponent;
