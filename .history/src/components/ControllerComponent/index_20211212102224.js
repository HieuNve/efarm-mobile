import React, {useState} from 'react';
import {View, Switch, StyleSheet, Text, ActivityIndicator} from 'react-native';

const ControllerComponent = ({data, loading}) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const [value, setValue] = useState(data.relay1);
  // const relay = data.data.relay1;
  // const toggleSwitch = ({form, onChange}) => {
  //   if (value == 0) {
  //     setValue(1);
  //   } else if (value == 1) {
  //     setValue(0);
  //   }
  // };
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  console.log('value', value);
  return (
    <View style={styles.container}>
      {/* {loading && (
        <View style={{ paddingVertical: 100, paddingHorizontal: 100 }}>
          <ActivityIndicator color={{ colors: "blue" }} size="large" />
        </View>
      )} */}
      {!loading && (
        <View style={{flex: 1}}>
          <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            <Text>Đèn</Text>
            <Switch
              trackColor={{false: '#767577', true: '#81b0ff'}}
              thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
              onChangeText={value => {
                toggleSwitch;
                onChange({name: 'relay1', value});
              }}
              value={isEnabled}
            />
          </View>
        </View>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
});

export default ControllerComponent;
