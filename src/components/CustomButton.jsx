import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styled from '@emotion/native';

const CustomButton = ({ disabled, onSubmit }) => {
  return (
    <StyledButton disabled={disabled} onPress={disabled ? null : onSubmit}>
      <StyledButtonText disabled={disabled}>Продолжить</StyledButtonText>
    </StyledButton>
  );
};

const StyledButton = styled(TouchableOpacity)`
  height: 60px;
  width: 338px;
  border-radius: 55px;
  background-color: ${(props) => (props.disabled ? '#A2A0AC' : '#2f2f2f')};
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
  opacity: ${(props) => (props.disabled ? '0.1' : '1')};
`;

const StyledButtonText = styled(Text)`
  color: white;
  font-weight: 700;
  font-size: 16px;
  line-height: 21px;
  color: ${(props) => (props.disabled ? '#2C2C2C' : '#fff')};
`;

export default CustomButton;
