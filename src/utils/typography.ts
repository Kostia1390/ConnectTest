import { StyleSheet } from 'react-native';
import { Fonts } from './styles';


export const typography = StyleSheet.create({
  h1: {
    fontSize: 24,
    fontFamily: Fonts.bold,
  },
  h1Light: {
    fontSize: 24,
    fontFamily: Fonts.light,
  },
  h2: {
    fontSize: 17,
    fontFamily: Fonts.semiBold,
  },
  h3: {
    fontSize: 14,
    fontFamily: Fonts.regular,
  },
  h3SemiBold: {
    fontSize: 14,
    fontFamily: Fonts.semiBold,
  },
  h3bold: {
    fontSize: 16,
    fontFamily: Fonts.bold,
  },
  h3medium: {
    fontSize: 16,
    fontFamily: Fonts.medium,
  },
  subtitle: {
    fontSize: 20,
    fontFamily: Fonts.bold,
  },
  description: {
    fontSize: 15,
    fontFamily: Fonts.regular,
  },
});

