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
    <View style={{flex: 1, backgroundColor: '#badbee'}}>
      {data && Object.keys(data).length !== 0 ? (
        <View
          style={{
          
            flex: 1,
          }}>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
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
          <DeviceCustom
            title={'Nhiệt độ môi trường'}
            value={data[0].temperature}
            icon={
              <Icon
                type="faicon5"
                size={30}
                name="temperature-high"
                color="red"
              />
            }
          />
          <DeviceCustom
            title={'Độ Ẩm không khí      '}
            value={data[0].humidity}
            icon={<Icon type="materialIcon" size={30} name="home" />}
          />
          <DeviceCustom
            title={'Cường Độ Ánh Sáng'}
            value={data[0].lightIntensity}
            icon={
              <Icon
                type="entypoIcon"
                size={30}
                name="light-up"
                color="orange"
              />
            }
          />
          <DeviceCustom
            title={'Độ Ẩm Đất Trồng      '}
            value={data[0].soilHumidity}
            icon={
              <Icon
                type="materialcommunityicon"
                size={30}
                name="water"
                color="#18C4DE"
              />
            }
          />
          <DeviceCustom
            title={'Nồng Độ PH Đất:       '}
            value={data[0].soilPH}
            icon={<Icon type="materialIcon" size={30} name="home" />}
          />
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
