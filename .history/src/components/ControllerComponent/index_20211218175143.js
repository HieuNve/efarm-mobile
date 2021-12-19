import React, {useState, useEffect} from 'react';
import {
  View,
  Switch,
  StyleSheet,
  Text,
  ActivityIndicator,
  Button,
  TouchableOpacity,
  Image,
} from 'react-native';
import styles from './styles';
const ControllerComponent = ({
  data,
  loading,
  toggleValueChange,
  form,
  onSubmit,
  valueCurrent,
}) => {
  const [value, setValue] = useState();

  useEffect(() => {
    const getValue = async () => {
      const checkValue = await data[0];
      console.log('checkValue', checkValue);
      setValue(checkValue.relay1);
    };
    getValue();
  }, []);
  console.log('relay1', value);
  return (
    <View style={styles.container}>
      {/* {loading && (
        <View style={{ paddingVertical: 100, paddingHorizontal: 100 }}>
          <ActivityIndicator color={{ colors: "blue" }} size="large" />
        </View>
      )} */}

      {!loading && (
        <View style={{flex: 1, paddingVertical: 20}}>
          <View style={styles.deviceWrapper}>
            <View style={styles.device}>
              <Image
                style={styles.iconDevice}
                height={50}
                width={50}
                src={require('../../assets/theme/images/motor.png')}
              />
              <Text
                style={{
                  fontSize: 20,
                  paddingHorizontal: 20,
                  color: '#259125',
                  fontWeight: 'bold',
                }}>
                Máy bơm
              </Text>
              <Switch
                style={{transform: [{scaleX: 1.5}, {scaleY: 1.5}]}}
                trackColor={{false: '#767577', true: '#81b0ff'}}
                thumbColor={form.relay1 ? '#f5dd4b' : '#f4f3f4'}
                onValueChange={value => {
                  setValue(previousState => !previousState);
                  toggleValueChange({name: 'relay1', value: value});
                }}
                value={form.relay1}
                // value={value == 1 ? true : false}
              />
            </View>
          </View>
          <View style={styles.ledWrapper}>
            <View style={styles.led}>
              <Text
                style={{
                  fontSize: 20,
                  paddingHorizontal: 20,
                  color: '#259125',
                  fontWeight: 'bold',
                }}>
                Đèn
              </Text>
              <Switch
                style={{transform: [{scaleX: 1.5}, {scaleY: 1.5}]}}
                trackColor={{false: '#767577', true: '#81b0ff'}}
                thumbColor={form.relay2 ? '#f5dd4b' : '#f4f3f4'}
                onValueChange={value => {
                  toggleValueChange({name: 'relay2', value: value});
                }}
                value={form.relay2}
              />
            </View>
          </View>

          <TouchableOpacity
            onPress={onSubmit}
            style={{
              height: 40,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'green',
            }}>
            <Text>Chạy</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default ControllerComponent;
