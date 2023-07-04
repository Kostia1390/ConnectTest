import React from 'react';
import { SFlex } from '../Styled/SFlex';
import { View } from 'react-native';
import LocationSvg from 'assets/icons/location.svg';
import { SText } from '../Styled/SText';
import { Colors } from 'utils/styles';

interface IProps {
  name: string;
  city: string;
  age: number;
}

export const ModelMainInfo = ({ name, city, age }: IProps) => {
  return (
    <SFlex justifyContent="space-between" zIndex={1}>
      <View>
        <SFlex gap={10} marginBottom={8}>
          <LocationSvg/>
          <SText color={Colors.White} type="h3">
            {city}
          </SText>
        </SFlex>
        <SFlex>
          <SText color={Colors.White} type="h1">
            {name}
          </SText>
          <SText color={Colors.White} type="h1Light" marginStart={10}>
            {age}
          </SText>
        </SFlex>
      </View>
    </SFlex>
  );
};
