import React from 'react';
import { Pressable, StyleProp } from 'react-native';
import { Colors } from '../../utils/styles';

interface IProps {
  children: React.ReactNode;
  baseColor?: string;
  activeColor?: string;
  onPress: () => void;
  borderRadius?: number;
  loading?: boolean;
  activeOpacity?: number;
  disabled?: boolean;
  marginLeft?: number;
  marginRight?: number;
  marginTop?: number;
  marginBottom?: number;
  styleBtn?: StyleProp<any>;
}

export const SButton = ({
  children,
  baseColor = Colors.transparent,
  activeColor = Colors.transparent,
  onPress,
  disabled = false,
  activeOpacity = 0.5,
  marginLeft = 0,
  marginRight = 0,
  marginTop = 0,
  marginBottom = 0,
  borderRadius = 0,
  styleBtn,
}: IProps) => {
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      style={({ pressed }) => [
        {
          opacity: pressed ? activeOpacity : 1,
          backgroundColor: pressed ? activeColor : baseColor,
          marginLeft,
          marginRight,
          marginTop,
          marginBottom,
          borderRadius,
          ...styleBtn,
        },
      ]}>
      {children}
    </Pressable>
  );
};
