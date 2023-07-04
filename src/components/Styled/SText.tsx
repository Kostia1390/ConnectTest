import React from 'react';
import { Text, TextStyle } from 'react-native';
import { Colors } from 'utils/styles';
import { typography } from 'utils/typography';

type TextAlignType = TextStyle['textAlign'];
type FontWeightType = TextStyle['fontWeight'];
type AlignSelfType = TextStyle['alignSelf'];
type TextTransformType = TextStyle['textTransform'];
type TextDecorationType = TextStyle['textDecorationLine'];

interface IProps {
  color?: string;
  fontSize?: number;
  marginTop?: number;
  marginBottom?: number;
  marginStart?: number;
  marginEnd?: number;
  fontWeight?: FontWeightType;
  textAlign?: TextAlignType;
  textDecoration?: TextDecorationType;
  alignSelf?: AlignSelfType;
  textTransform?: TextTransformType;
  opacity?: number;
  letterSpacing?: number;
  lineHeight?: number;
  type?: 'h1' | 'h3' | 'h1Light' | 'h2' | 'h3bold' | 'description' | 'h3medium' | 'h3SemiBold' | 'subtitle';
  children: React.ReactNode;
  numberOfLines?: number;
  lineBreakMode?: 'tail' | 'clip' | 'middle' | 'head';
}

export const SText = ({
  type,
  color = Colors.Text,
  fontSize = 14,
  marginTop = 0,
  marginBottom = 0,
  marginStart = 0,
  marginEnd = 0,
  textAlign = 'left',
  textDecoration = 'none',
  alignSelf = 'auto',
  opacity = 1,
  letterSpacing = 0.2,
  children,
  lineBreakMode,
  numberOfLines,
  lineHeight,
}: IProps) => {
  return (
    <Text
      style={[
        type ? {
          ...typography[type],
        } : {
          letterSpacing,
          fontSize,
        },
        {
          color,
          marginTop,
          marginBottom,
          marginStart,
          marginEnd,
          textAlign,
          alignSelf,
          opacity,
          textDecorationLine: textDecoration,
        },
        lineHeight ? { lineHeight } : {},
      ]}
      lineBreakMode={lineBreakMode}
      numberOfLines={numberOfLines}
    >
      {children}
    </Text>
  );
};
