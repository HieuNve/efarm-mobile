import {StyleSheet} from 'react-native';
import React from 'react';
import colors from '../../assets/theme/colors';

export default StyleSheet.create({
  itemContainer: {
    backgroundColor: 'rgba(255,255, 255, 0.7)',
    flexDirection: 'row',
    padding: 20,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 24,
  },
  item: {
    padding: 20,
    flex: 1,
  },
  name: {
    paddingBottom: 15,
    fontSize: 18,
    fontFamily: 'Lato-Regular',
  },
  location: {paddingBottom: 15, fontSize: 18, fontFamily: 'Lato-Regular'},
  time: {fontSize: 18, fontFamily: 'Lato-Regular'},

  addFarm: {
    justifyContent: 'center',
    backgroundColor: colors.green,
    borderRadius: 20,
    height: 50,
    alignItems: 'center',
    margin: 10,
  },
  textFarm: {
    fontSize: 18,
    fontSize: 21,
    fontFamily: 'Lato-Regular',
    color: colors.white,
  },
});
