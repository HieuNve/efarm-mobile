import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StatusBar,
  Image,
  StyleSheet,
  ActivityIndicator,
  Alert,
  ScrollView,
} from 'react-native';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import Message from '../Common/Message';
import colors from '../../assets/theme/colors';
import {CREATE_FARM, FARM_DETAIL, SETTING} from '../../constants/routeName';
const ListEmptyComponent = () => {
  return (
    <View style={{paddingVertical: 100, paddingHorizontal: 100}}>
      <Message info message="Không có thông tin vườn" />
    </View>
  );
};

const HomeComponent = ({data, loading, setModalVisible}) => {
  const {navigate} = useNavigation();

  const renderItem = ({item}) => {
    return (
      <>
        <View style={styles.wrapperr}>
          <TouchableOpacity
            style={styles.itemContainer}
            onPress={() => {
              navigate(FARM_DETAIL, {item});
            }}>
            <View style={styles.item}>
              <Text style={styles.name}>Tên: {item.farmName}</Text>
              <Text style={styles.location}>Địa Điểm: {item.location}</Text>
              <Text style={styles.timeStart}>Bắt đầu: {item.timeStart}</Text>
            </View>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Image
                style={styles.logo}
                height={70}
                width={70}
                source={require('../../assets/theme/images/farm.png')}
              />
            </View>
          </TouchableOpacity>
        </View>
      </>
    );
  };
  return (
    <ScrollView style={{flex: 1}}>
      <View style={{margin: 10}}>
        <TouchableOpacity
          style={styles.addFarm}
          onPress={() => {
            navigate(CREATE_FARM);
          }}>
          <Text style={styles.textFarm}>Thêm Vườn</Text>
        </TouchableOpacity>
        {loading && (
          <View style={{paddingVertical: 100, paddingHorizontal: 100}}>
            <ActivityIndicator color={colors.primary} size="large" />
          </View>
        )}
        {!loading && (
          <View style={{paddingVertical: 2}}>
            <FlatList
              renderItem={renderItem}
              data={data}
              keyExtractor={item => String(item.farmID)}
              contentContainerStyle={{
                padding: 5,
                paddingTop: StatusBar.currentHeight || 10,
              }}
              ListEmptyComponent={ListEmptyComponent}
            />
          </View>
        )}
      </View>
    </ScrollView>
  );
};

export default HomeComponent;
