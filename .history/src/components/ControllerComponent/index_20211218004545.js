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
const ControllerComponent = ({data, loading, onChangeV}) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const [value, setValue] = useState(0);
  const [isLedEnabled, setIsLedEnabled] = useState(false);
  const [valueLed, setValueLed] = useState(0);
  const [isWaterEnabled, setIsWaterEnabled] = useState(false);
  const [valueWater, setValueWater] = useState(0);
  const [isToggledOn, setToggle] = useState(false);
  const toggle = () => {
    setToggle(!isToggledOn);
  };
  console.log('isToggledOn', isToggledOn);
  // const {relay1, relay2, relay3} = data[0];
  // function countProperties(obj) {
  //   var count = 0;
  //   for (var prop in obj) {
  //     if (obj.hasOwnProperty(prop)) ++count;
  //   }
  //   return count;
  // }
  // const valuecheck = countProperties(data);

  // if (valuecheck == 1) {
  //   console.log('CheckElement', data[0].relay1);
  //   setValue[data[0].relay1];
  // }
  // console.log('CheckElement', value);
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
                  setIsEnabled(previousState => !previousState);
                  if (value === true) {
                    value = 0;
                    onChangeV({name: 'relay1', value});
                  } else if (value === false) {
                    value = 1;
                    onChangeV({name: 'relay1', value});
                  }
                }}
                value={isEnabled}
              />
            </View>
          </View>
          <View style={styles.ledWrapper}>
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
                onValueChange={value1 => {
                  setIsLedEnabled(previousState => !previousState);
                  if (value1 === true) {
                    value1 = 0;
                    onChangeV({name: 'relay2', value1});
                  } else if (value1 === false) {
                    value1 = 1;
                    onChangeV({name: 'relay2', value1});
                  }
                }}
                value={isLedEnabled}
              />
            </View>
          </View>
          <View style={styles.waterWrapper}>
            <View style={styles.water}>
              <TouchableOpacity
                onPress={() => {
                  toggle();
                  const esdf = isToggledOn;
                  console.log('isToggledOn', esdf);
                  onChangeV({name: 'relay1', isToggledOn});
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
