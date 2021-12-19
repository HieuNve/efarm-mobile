import React from 'react';
import {View, Text} from 'react-native';
import Container from '../Common/Container';
import Input from '../Common/Input';
const PasswordComponent = () => {
  return (
    <Container>
      <Input placeholder={'Nhập mật khẩu cũ'} />
      <Input placeholder={'Mật Khẩu Mới'} />
      <Input placeholder={'Nhập mật khẩu cũ'} />
    </Container>
  );
};

export default PasswordComponent;
