import {StyleSheet} from 'react-native';
import colors from '../../../assets/theme/colors';

export default StyleSheet.create({
  wrapper: {
    height: 150,
    paddingHorizontal: 5,
    marginVertical: 5,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    color: colors.white,
    borderRadius: 10,
  },
  content: {
    fontSize: 18,
    textAlign: 'center',
    fontFamily: 'PTSerif-Regular',
    color: colors.black,
  },
  contentImage: {
    height: 140,
    width: 140,
  },
  contentWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
