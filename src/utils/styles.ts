import { ColorValue, Dimensions, StatusBarStyle, StyleSheet } from 'react-native';

export const STATUS_BAR_BACKGROUND: ColorValue = 'transparent';
export const STATUS_BAR_STYLE: StatusBarStyle = 'dark-content';

export enum Colors {
  White = 'rgba(255, 255, 255, 1)',
  WhiteTransparent = 'rgba(255, 255, 255, 0.8)',
  InactiveDot = 'rgba(255, 255, 255, 0.12)',
  LightGray = 'rgba(135, 135, 135, 0.12)',
  Gray = 'rgba(162, 160, 172, 1)',
  DarkGray = '#2F2F2F',
  GrayBg = '#E8E7ED',
  Text = '#2C2C2C',
  Background = '#DFDFE3',
  BackgroundModal = '#F3F2F8',
  transparent = 'transparent',
  Red = '',
}

export enum Fonts {
  'light' = 'Manrope-Light',
  'regular' = 'Manrope-Regular',
  'semiBold' = 'Manrope-SemiBold',
  'bold' = 'Manrope-Bold',
  'medium' = 'Manrope-Medium',
}

export const screenWidth = Dimensions.get('window').width;
export const screenHeight = Dimensions.get('window').height;

export const baseStyle = StyleSheet.create({
  screenView: {
    flex: 1,
    backgroundColor: Colors.Background,
  },
  scrollView: {
    flexGrow: 1,
    backgroundColor: Colors.Background,
  },
});
