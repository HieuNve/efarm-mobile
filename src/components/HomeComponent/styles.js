import { StyleSheet } from 'react-native';
import React from 'react';
import colors from '../../assets/theme/colors';

export default StyleSheet.create({
  farmWrapper: {
    flexDirection: 'row',
  },

  wrapperr: {
    backgroundColor: 'rgba(255,255, 255, 0.7)',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    marginTop: 5,
    shadowOpacity: 0.5,

    paddingVertical: 20,
    elevation: 1,
  },
  itemContainer: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: 5,
    borderRadius: 10,
  },
  logo: {
    height: 70,
    width: 70,
  },
  item: {
    padding: 20,
    flex: 1,
  },
  name: {
    paddingBottom: 15,
    fontSize: 16,

  },
  location: { paddingBottom: 15, fontSize: 16 },
  timeStart: { fontSize: 16 },

  addFarm: {
    justifyContent: 'center',
    backgroundColor: colors.orange,
    borderRadius: 10,
    height: 40,
    alignItems: 'center',

  },
  textFarm: {
    fontSize: 18,
    fontSize: 21,
    fontWeight: 'bold',
    color: colors.white,
  },
});
