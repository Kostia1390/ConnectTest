import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styled from '@emotion/native';

const CustomButton = ({ disabled, onSubmit }) => {
  return (
    <StyledButton disabled={disabled} onPress={onSubmit} style={{ opacity: disabled ? 0.1 : 1 }}>
      <StyledButtonText>Продолжить</StyledButtonText>
    </StyledButton>
  );
};

const StyledButton = styled(TouchableOpacity)`
  height: 60px;
  width: 338px;
  border-radius: 55px;
  background-color: #2f2f2f;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
`;

const StyledButtonText = styled(Text)`
  color: white;
  font-weight: 700;
  font-size: 16px;
  line-height: 21px;
`;

export default CustomButton;
