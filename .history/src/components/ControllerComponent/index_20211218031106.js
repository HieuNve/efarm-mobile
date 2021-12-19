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
  form,
}) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const [value, setValue] = useState(0);

  const [isToggledOn, setToggle] = useState(false);

  const toggle = () => {
    setToggle(!isToggledOn);
  };

  const mayBomState = ({isEnabled}) => {
    onChangeV({name: 'relay1', isEnabled});
  };
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
                thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
                onValueChange={toggleValueChange}
                value={form.relay1}
              />
            </View>
          </View>
          <View style={styles.waterWrapper}>
            <View style={styles.water}>
              <TouchableOpacity
                onPress={() => {
                  toggle();
                  mayBomState(isEnabled);
                }}>
                <Text>{isToggledOn ? 'ON' : 'OFF'}</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.waterWrapper}>
            <View style={styles.water}>
              <TouchableOpacity
                onPress={() => {
                  toggle();
                  mayBomState(isEnabled);
                }}>
                <Text>{isToggledOn ? 'ON' : 'OFF'}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      )}
    </View>
  );
};

export default ControllerComponent;
