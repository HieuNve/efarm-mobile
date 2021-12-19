import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {View, Text, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {CONTROLLER, DEVICE} from '../../constants/routeName';
import CustomTouchableOpacy from '../Common/CustomTouchableOpacy';
import styles from './styles';

const FarmDetailComponent = ({item}) => {
  const {navigate} = useNavigation();
  return (
    <View style={{flex: 1}}>
      <View style={styles.name}>
        <Image
          style={styles.logo}
          height={24}
          width={24}
          source={require('../../assets/theme/images/tree.png')}
        />
        <Text style={styles.farmName}>Tên Cây: {item.farmName}</Text>
      </View>
      <View style={styles.dayCreate}>
        <Text style={styles.createDayName}>Start : {item.timeStart}</Text>
      </View>
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
          background
          link={require('../../assets/theme/images/cloudy.png')}
          xanh
        />
        <CustomTouchableOpacy
          style={{flex: 1, margin: 5}}
          title={'Điều Khiển'}
          xanh
          background
          link={require('../../assets/theme/images/control.png')}
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
          green
        />

        <CustomTouchableOpacy
          style={{flex: 1, margin: 5, height: 50}}
          title={'Kết Thúc Mùa Vụ'}
          green
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
          title={'Danh Sách Vườn'}
          green
        />
      </View>
    </View>
  );
};
export default FarmDetailComponent;
