import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  StyleSheet,
  StatusBar,
  Image,
  useWindowDimensions,
  ScrollView,
  ImageBackground,
} from 'react-native';
import DeviceCustom from '../Common/DeviceCustom';
import Icon from '../../components/Common/Icons';
import colors from '../../assets/theme/colors';
import styles from './styles';
const DeviceComponent = ({data}) => {
  const {width: windowWidth, height: windowHeight} = useWindowDimensions();
  return (
    <View style={{flex: 1, backgroundColor: '#F8F9F9'}}>
      {data && Object.keys(data).length !== 0 ? (
        <View
          style={{
            flex: 1,
          }}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 40,
            }}>
            <Image
              source={require('../../assets/theme/images/logo_nntm.png')}
              height={100}
              width={100}
              style={{
                height: 100,
                width: 100,
              }}
              // style={StyleSheet.absoluteFillObject}
            />
          </View>
          <View style={{flex: 1}}>
            <DeviceCustom
              title={'Nhiệt độ môi trường'}
              value={data[0].temperature + '  °C'}
              icon={
                <Image
                  source={require('../../assets/theme/images/temperature.png')}
                  height={40}
                  width={40}
                  style={{
                    height: 40,
                    width: 40,
                  }}
                />
              }
            />
            <DeviceCustom
              title={'Độ Ẩm không khí      '}
              value={data[0].humidity + '%'}
              icon={
                <Image
                  source={require('../../assets/theme/images/humidity.png')}
                  height={40}
                  width={40}
                  style={{
                    height: 40,
                    width: 40,
                  }}
                />
              }
            />
            <DeviceCustom
              title={'Cường Độ Ánh Sáng'}
              value={data[0].lightIntensity + 'Lux'}
              icon={
                <Image
                  source={require('../../assets/theme/images/sun.png')}
                  height={40}
                  width={40}
                  style={{
                    height: 40,
                    width: 40,
                  }}
                />
              }
            />
            <DeviceCustom
              title={'Độ Ẩm Đất Trồng      '}
              value={data[0].soilHumidity}
              icon={
                <Image
                  source={require('../../assets/theme/images/humidity.png')}
                  height={40}
                  width={40}
                  style={{
                    height: 40,
                    width: 40,
                  }}
                />
              }
            />
            <DeviceCustom
              title={'Nồng Độ PH Đất:       '}
              value={data[0].soilPH}
              icon={
                <Image
                  source={require('../../assets/theme/images/ph.png')}
                  height={40}
                  width={40}
                  style={{
                    height: 40,
                    width: 40,
                  }}
                />
              }
            />
          </View>
        </View>
      ) : (
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            alignContent: 'center',
          }}>
          <Text
            style={{
              flexDirection: 'column',
              fontSize: 20,
              alignContent: 'center',
            }}>
            Không tìm thấy thiết bị
          </Text>
        </View>
      )}
    </View>
  );
};

export default DeviceComponent;
