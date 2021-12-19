import React, {useState} from 'react';
import {
  View,
  Switch,
  StyleSheet,
  Text,
  ActivityIndicator,
  Button,
  TouchableOpacity,
} from 'react-native';
import styles from './styles';
const ControllerComponent = ({
  data,
  loading,
  onChangeV,
  toggleValueChange,
  toggleValueChange2,
  form,
  onSumit,
}) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const [value, setValue] = useState(0);

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
                  toggleValueChange({name: 'relay1', value: value});
                }}
                value={form.relay1}
              />
            </View>
          </View>
          <View style={styles.deviceWrapper}>
            <View style={styles.device}>
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
                thumbColor={form.relay2 ? '#f5dd4b' : '#f4f3f4'}
                onValueChange={value => {
                  toggleValueChange({name: 'relay2', value: value});
                }}
                value={form.relay2}
              />
            </View>
          </View>
          <View style={styles.deviceWrapper}>
            <View style={styles.device}>
              <TouchableOpacity onPress={onSubmit}>
                <Text>Chạy</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      )}
    </View>
  );
};

export default ControllerComponent;
