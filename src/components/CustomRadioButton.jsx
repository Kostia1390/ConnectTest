import React, { useMemo, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import RadioButton from 'react-native-radio-buttons-group';
import styled, { css } from '@emotion/native';
import { useNavigation } from '@react-navigation/native';
import CustomCheckBox from './CustomCheckBox';

const RadoBtnOn = require(`../../assets/svg/RadoBtnOn.png`);
const RadoBtnOff = require(`../../assets/svg/RadoBtnOff.png`);

const CustomRadioButton = ({ textRadio, isSelected, onPress, showImage = true }) => {
  const toggleIcon = isSelected ? RadoBtnOn : RadoBtnOff;
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <MainContainer isSelected={isSelected}>
        <RadioText isSelected={isSelected}>{textRadio}</RadioText>
        {showImage && (
          <RadioWrapper>
            <Image source={toggleIcon} style={{ width: 15, height: 15 }} />
          </RadioWrapper>
        )}
      </MainContainer>
    </TouchableWithoutFeedback>
  );
};

const RadioWrapper = styled(View)`
  position: absolute;
  right: 20px;
  top: 20px;
`;

const RadioText = styled(Text)`
  font-size: 14px;
  font-weight: 400;
  line-height: 19px;
  margin: 16px 0px 16px 20px;
  opacity: ${(props) => (props.isSelected ? '1' : '0.3')};
`;

const MainContainer = styled(View)`
  border-radius: 40px;
  width: 100%;
  height: 51px;
  border: ${(props) => (props.isSelected ? '1px' : '0.3px')};
  border-color: ${(props) => (props.isSelected ? '#2F2F2F' : '#A2A0AC')};
  margin-bottom: 10px;
`;

export default CustomRadioButton;
