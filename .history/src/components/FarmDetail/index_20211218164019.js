import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {View, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {CONTROLLER, DEVICE} from '../../constants/routeName';
import CustomTouchableOpacy from '../Common/CustomTouchableOpacy';
import styles from './styles';

const FarmDetailComponent = ({item}) => {
  const {navigate} = useNavigation();
  return (
    <View style={{flex: 1}}>
      <Text style={styles.farmName}>{item.farmName}</Text>
      <View
        style={{
          flexDirection: 'row',
          padding: 10,
          justifyContent: 'space-around',
        }}>
        <CustomTouchableOpacy
          style={{flex: 1, margin: 5}}
          title={'Nhật ký môi trường'}
          onPress={() => {
            navigate(DEVICE, {item});
          }}
          secondary
        />
        <CustomTouchableOpacy
          style={{flex: 1, margin: 5}}
          title={'Điều Khiển'}
          yellow
          onPress={() => {
            navigate(CONTROLLER, {item});
          }}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          padding: 10,
          justifyContent: 'space-around',
        }}>
        <CustomTouchableOpacy
          style={{flex: 1, margin: 5, height: 50}}
          title={'Quy Trình'}
          secondary
        />

        <CustomTouchableOpacy
          style={{flex: 1, margin: 5, height: 50}}
          title={'Kết Thúc Mùa Vụ'}
          secondary
        />
      </View>
    </View>
  );
};
export default FarmDetailComponent;
