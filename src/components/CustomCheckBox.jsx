import React, { useMemo, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';

import styled, { css } from '@emotion/native';

const ArrowOn = require(`../../assets/svg/ArrowOn.png`);
const ArrowOff = require(`../../assets/svg/ArrowOff.png`);

const CustomCheckBox = ({ textCheck, isChose, onPress }) => {
  const arrowIcon = isChose ? ArrowOn : ArrowOff;
  return (
    <MainContainer isChose={isChose}>
      <TouchableWithoutFeedback onPress={onPress}>
        <Image source={arrowIcon} style={{ width: 19, height: 19 }} />
      </TouchableWithoutFeedback>
      <CheckboxText>{textCheck}</CheckboxText>
    </MainContainer>
  );
};

const CheckboxText = styled(Text)`
  font-size: 13px;
  font-weight: 400;
  line-height: 19px;
  margin-left: 10px;
`;

const MainContainer = styled(View)`
  flex-direction: row;
`;

export default CustomCheckBox;
