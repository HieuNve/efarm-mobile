import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  name: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    flexDirection: 'row',
  },
  farmName: {
    fontSize: 21,
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
  },
  logo: {
    height: 24,
    width: 24,
  },
  dayCreate: {
    paddingVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 10,
  },
  createFirstDayName: {
    fontSize: 18,
    fontFamily: 'OpenSans-Italic-VariableFont_wdth,wght',
  },
  createLastDayName: {
    fontSize: 18,
  },
});
