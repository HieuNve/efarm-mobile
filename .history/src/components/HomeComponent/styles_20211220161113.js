import {StyleSheet} from 'react-native';
import React from 'react';
import colors from '../../assets/theme/colors';

export default StyleSheet.create({
  farmWrapper: {
    flexDirection: 'row',
  },

  wrapperr: {
    shadowColor: '#470000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.2,
    elevation: 1,
    borderRadius: 20,
  },
  itemContainer: {
    flex: 1,
    flexDirection: 'row',
    padding: 20,
    marginBottom: 10,
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
    fontSize: 18,
    fontFamily: 'Lato-Regular',
  },
  location: {paddingBottom: 15, fontSize: 18, fontFamily: 'Lato-Regular'},
  timeStart: {color: colors.orange, fontSize: 18,},

  addFarm: {
    justifyContent: 'center',
    backgroundColor: colors.orange,
    borderRadius: 20,
    height: 50,
    alignItems: 'center',
    margin: 2,
  },
  textFarm: {
    fontSize: 18,
    fontSize: 21,
    fontFamily: 'Lato-Regular',
    color: colors.white,
  },
});
