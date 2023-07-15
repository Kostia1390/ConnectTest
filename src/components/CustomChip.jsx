import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styled from '@emotion/native';

const CloseIcon = require(`../../assets/svg/icon_close.png`);

const CustomChip = ({ selectedOption, onClose }) => {
  return (
    <StyledView>
      <StyledText>{selectedOption}</StyledText>
      <IconWrapper>
        <TouchableOpacity onPress={onClose}>
          <Image source={CloseIcon} style={{ width: 15, height: 15, marginLeft: 5 }} />
        </TouchableOpacity>
      </IconWrapper>
    </StyledView>
  );
};

const StyledView = styled(View)`
  background-color: rgba(163, 163, 163, 0.2);
  border-radius: 50px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px 12px;
  align-self: flex-start;
  height: 40px;
`;

const IconWrapper = styled(View)`
  margin-right: 5px;
`;

const StyledText = styled(Text)`
  font-size: 14px;
  font-weight: 400;
`;

export default CustomChip;
