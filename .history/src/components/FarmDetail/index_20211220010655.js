import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {View, Text, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {CONTROLLER, DEVICE, HOME} from '../../constants/routeName';
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
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 4,
            },
            shadowOpacity: 0.3,
            shadowRadius: 4.65,
            elevation: 8,
          }}
          title={'NHẬT KÍ MÔI TRƯỜNG'}
          onPress={() => {
            navigate(DEVICE, {item});
          }}
          background
          link={require('../../assets/theme/images/cloudy.png')}
        />
        <CustomTouchableOpacy
          style={{
            flex: 1,
            margin: 5,
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 4,
            },
            shadowOpacity: 0.3,
            shadowRadius: 4.65,
            elevation: 8,
          }}
          title={'ĐIỀU KHIỂN'}
          background
          link={require('../../assets/theme/images/settings.png')}
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
          style={{
            flex: 1,
            margin: 5,
            height: 50,
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 4,
            },
            shadowOpacity: 0.3,
            shadowRadius: 4.65,
            elevation: 8,
          }}
          title={'QUY TRÌNH'}
          green
        />

        <CustomTouchableOpacy
          style={{
            flex: 1,
            margin: 5,
            height: 50,
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 4,
            },
            shadowOpacity: 0.3,
            shadowRadius: 4.65,
            elevation: 8,
          }}
          title={'KẾT THÚC MÙA VỤ'}
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
          title={'DANH SÁCH VƯỜN'}
          green
          onPress={() => {
            navigate(HOME, {item});
          }}
        />
      </View>
    </View>
  );
};
export default FarmDetailComponent;
