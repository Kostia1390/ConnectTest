
import React from 'react';
import { BlurView } from '@react-native-community/blur';
import { StyleSheet } from 'react-native';

interface IProps {
  borderTopRightRadius?: number;
  borderTopLeftRadius?: number;
  borderBottomLeftRadius?: number;
  borderBottomRightRadius?: number;
  zIndex?: number;
}

export const BackgroundBlur = ({
  borderTopRightRadius = 0,
  borderTopLeftRadius = 0,
  borderBottomLeftRadius = 0,
  borderBottomRightRadius = 0,
  zIndex = -1,
}: IProps) => {
  return (
    <BlurView
      style={[
        StyleSheet.absoluteFillObject,
        {
          borderTopRightRadius,
          borderTopLeftRadius,
          borderBottomLeftRadius,
          borderBottomRightRadius,
          zIndex,
        },
      ]}
      blurType="light"
      blurAmount={15}
      reducedTransparencyFallbackColor="rgba(255, 255, 255, 0.8)"
    />
  );
};

