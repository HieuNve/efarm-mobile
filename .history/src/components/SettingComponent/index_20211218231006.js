import React from 'react';
import {View, Text} from 'react-native';
import CustomTouchableOpacy from '../Common/CustomTouchableOpacy';

const SettingComponent = () => {
  return (
    <View>
      <CustomTouchableOpacy title={'Đổi Mật Khẩu'} secondary/>
    </View>
  );
};

export default SettingComponent;
