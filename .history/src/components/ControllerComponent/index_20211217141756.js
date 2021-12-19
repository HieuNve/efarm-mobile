import React, {useState} from 'react';
import {View, Switch, StyleSheet, Text, ActivityIndicator} from 'react-native';
import styles from './styles';
const ControllerComponent = ({data, loading, onChangeV}) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const [value, setValue] = useState(0);
  const [isLedEnabled, setIsLedEnabled] = useState(false);
  const [valueLed, setValueLed] = useState(0);
  const [isWaterEnabled, setIsWaterEnabled] = useState(false);
  const [valueWater, setValueWater] = useState(0);
  const mayBomState = ({value}) => {
    setIsEnabled(previousState => !previousState);
    if (value === true) {
      value = 0;
      onChangeV({name: 'relay1', value});
    } else if (value === false) {
      value = 1;
      onChangeV({name: 'relay1', value});
    }
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
                onValueChange={value => {
                  mayBomState(value);
                }}
                value={isEnabled}
              />
            </View>
          </View>
          {/* <View style={styles.ledWrapper}>
            <View style={styles.led}>
              <Text
                style={{
                  fontSize: 20,
                  paddingHorizontal: 20,
                  fontWeight: 'bold',
                  color: '#259125',
                }}>
                Đèn
              </Text>
              <Switch
                style={{transform: [{scaleX: 1.5}, {scaleY: 1.5}]}}
                trackColor={{false: '#767577', true: '#81b0ff'}}
                thumbColor={isLedEnabled ? '#f5dd4b' : '#f4f3f4'}
                onValueChange={value => {
                  setIsLedEnabled(previousState => !previousState);
                  if (value === true) {
                    value = 0;
                    onChangeV({name: 'relay2', value});
                  } else if (value === false) {
                    value = 1;
                    onChangeV({name: 'relay2', value});
                  }
                }}
                value={isLedEnabled}
              />
            </View>
          </View> */}
          {/* <View style={styles.waterWrapper}>
            <View style={styles.water}>
              <Text
                style={{
                  fontSize: 20,
                  paddingHorizontal: 20,
                  fontWeight: 'bold',
                  color: '#259125',
                }}>
                Phun Sương
              </Text>
              <Switch
                style={{transform: [{scaleX: 1.5}, {scaleY: 1.5}]}}
                trackColor={{false: '#767577', true: '#81b0ff'}}
                thumbColor={isWaterEnabled ? '#f5dd4b' : '#f4f3f4'}
                onValueChange={value => {
                  setIsWaterEnabled(previousState => !previousState);
                }}
                value={isWaterEnabled}
              />
            </View>
          </View> */}
        </View>
      )}
    </View>
  );
};

export default ControllerComponent;
