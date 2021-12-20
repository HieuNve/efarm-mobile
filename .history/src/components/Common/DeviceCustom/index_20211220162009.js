import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

const DeviceCustom = ({title, icon, value, source, image}) => {
  return (
    <View style={styles.item}>
      <View>{icon && icon}</View>
      <View>{image && <Image source={source} height={30} width={30} />}</View>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.value}>{value}</Text>
      <Text></Text>
      <Text></Text>
    </View>
  );
};
export default DeviceCustom;
