import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { View, Text, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { CONTROLLER, DEVICE, HOME } from '../../constants/routeName';
import CustomTouchableOpacy from '../Common/CustomTouchableOpacy';
import styles from './styles';

const FarmDetailComponent = ({ item }) => {
  const { navigate } = useNavigation();
  return (
    <View style={{ flex: 1 }}>
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
        <Text style={styles.createFirstDayName}>Bắt Đầu: {item.timeStart}</Text>
        <Text style={styles.createLastDayName}>Kết Thúc: {item.timeStart}</Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          padding: 10,
          justifyContent: 'space-around',
        }}>
        <CustomTouchableOpacy
          style={{
            flex: 1,
            margin: 5,
            backgroundColor: 'rgba(255,255, 255, 0.7)',
            shadowOffset: {
              width: 0,
              height: 10,
            },
            marginTop: 5,
            shadowOpacity: 0.5,
            paddingVertical: 20,
            elevation: 1,
          }}
          title={'NHẬT KÍ MÔI TRƯỜNG'}
          onPress={() => {
            navigate(DEVICE, { item });
          }}
          background
          link={require('../../assets/theme/images/cloudy.png')}
        />
        <CustomTouchableOpacy
          style={{
            flex: 1,
            margin: 5,
            backgroundColor: 'rgba(255,255, 255, 0.7)',
            shadowOffset: {
              width: 0,
              height: 10,
            },
            marginTop: 5,
            shadowOpacity: 0.5,
            paddingVertical: 20,
            elevation: 1,
          }}
          title={'ĐIỀU KHIỂN'}
          background
          link={require('../../assets/theme/images/settings.png')}
          onPress={() => {
            navigate(CONTROLLER, { item });
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
          style={{
            flex: 1,
            margin: 5,
            height: 50,
            backgroundColor: 'rgba(255,255, 255, 0.7)',
            shadowOffset: {
              width: 0,
              height: 10,
            },
            marginTop: 5,
            shadowOpacity: 0.5,
            elevation: 1,
          }}
          title={'QUY TRÌNH'}
        />

        <CustomTouchableOpacy
          style={{
            flex: 1,
            margin: 5,
            height: 50,
            backgroundColor: 'rgba(255,255, 255, 0.7)',
            shadowOffset: {
              width: 0,
              height: 10,
            },
            marginTop: 5,
            shadowOpacity: 0.5,
            elevation: 1,
          }}
          title={'KẾT THÚC'}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          padding: 10,
          justifyContent: 'space-around',
        }}>
        <CustomTouchableOpacy
          style={{
            flex: 1,
            margin: 5,
            height: 50,
            backgroundColor: 'rgba(255,255, 255, 0.7)',
            shadowOffset: {
              width: 0,
              height: 10,
            },
            marginTop: 5,
            shadowOpacity: 0.5,

            elevation: 1,
          }}
          title={'DANH SÁCH VƯỜN'}
          onPress={() => {
            navigate(HOME, { item });
          }}
        />
      </View>
    </View>
  );
};
export default FarmDetailComponent;
