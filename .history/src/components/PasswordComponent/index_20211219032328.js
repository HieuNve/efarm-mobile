import React from 'react';
import {View, Text} from 'react-native';
import Container from '../Common/Container';
import CustomButton from '../Common/CustomButton';
import Input from '../Common/Input';
const PasswordComponent = () => {
  return (
    <Container>
      <Input placeholder={'Nhập mật khẩu cũ'} />
      <Input placeholder={'Mật Khẩu Mới'} />
      <Input placeholder={'Nhập lại mật khẩu mới'} />
      <CustomButton title={'Đổi mật khẩu'} />
    </Container>
  );
};

export default PasswordComponent;
