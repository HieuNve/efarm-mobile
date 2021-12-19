import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    marginHorizontal: 10,
  },
  deviceWrapper: {
    flex: 1,
    borderRadius: 15,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.5,
    backgroundColor: 'rgba(255,255, 255, 0.7)',
  },
  device: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  ledWrapper: {
    marginTop: 15,
    flex: 1,
    borderRadius: 15,
    backgroundColor: 'rgba(255,255, 255, 0.7)',
  },
  led: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  waterWrapper: {
    marginTop: 20,
    flex: 1,
    borderRadius: 15,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.5,
    backgroundColor: 'rgba(255,255, 255, 0.7)',
  },
  water: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    flex: 1,
  },
  iconDevice: {},
});
