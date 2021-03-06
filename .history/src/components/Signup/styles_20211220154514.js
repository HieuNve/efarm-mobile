import {StyleSheet} from 'react-native';
import React from 'react';
import colors from '../../assets/theme/colors';

export default StyleSheet.create({
  logo: {
    alignSelf: 'center',
    height: 100,
    width: 100,
  },
  title: {
    fontSize: 21,
    textAlign: 'center',
    color: colors.secondary,
    fontWeight: 'bold',
  },
  subtitle: {
    paddingVertical: 10,
    textAlign: 'center',
    fontSize: 18,
    color: colors.gray,
  },
  form: {
    paddingTop: 5,
  },
  createSection: {
    paddingTop: 20,
    flexDirection: 'row',
  },
  linkBtn: {
    paddingLeft: 17,
    color: colors.secondary,
    fontSize: 16,
  },
  infoText: {
    fontSize: 17,
  },
});
