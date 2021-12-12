import React, {useState} from 'react';
import {View, Switch, StyleSheet, Text, ActivityIndicator} from 'react-native';

const ControllerComponent = ({data, loading, onChangeV}) => {
  const [isEnabled, setIsEnabled] = useState(true);
  const [value, setValue] = useState(0);

  const valueOfDevice = () => {
    if (value == 1) {
      setIsEnabled(false);
      setValue(0);
    }
    if (value == 0) {
      setIsEnabled(true);
      setValue(1);
    }
    console.log('value', value);
  };

  return (
    <View style={styles.container}>
      {/* {loading && (
        <View style={{ paddingVertical: 100, paddingHorizontal: 100 }}>
          <ActivityIndicator color={{ colors: "blue" }} size="large" />
        </View>
      )} */}
      {!loading && (
        <View style={{flex: 1, margin: 20}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{fontSize: 20, paddingHorizontal: 20}}>Đèn</Text>
            <Switch
              style={{transform: [{scaleX: 1.5}, {scaleY: 1.5}]}}
              trackColor={{false: '#767577', true: '#81b0ff'}}
              thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
              onValueChange={value => {
                onChangeV({name: 'relay1', value});
                valueOfDevice();
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
