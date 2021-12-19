import {StyleSheet} from 'react-native';
import React from 'react';
import colors from '../../assets/theme/colors';

export default StyleSheet.create({
  wrapper: {
    shadowColor: '#000',
    shadowOpacity: 10,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    borderRadius: 20,
  },
  itemContainer: {
    backgroundColor: 'white',
    flexDirection: 'row',
    padding: 20,
    marginBottom: 10,
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
