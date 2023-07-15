import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styled, { css } from '@emotion/native';
import { TextInput, Provider, DefaultTheme } from 'react-native-paper';

const CustomInput = ({
  onChangePassword,
  error,
  label,
  placeholder,
  errorMessage,
  isHidden,
  rightIcon,
}) => {
  const inputTheme = {
    ...DefaultTheme,
    roundness: 29,
    colors: {
      ...DefaultTheme.colors,
      primary: error ? 'red' : '#2F2F2F',
    },
  };

  return (
    <Provider>
      <TextInput
        label={label}
        mode="outlined"
        placeholder={placeholder}
        style={styles.input}
        theme={inputTheme}
        placeholderStyle={styles.placeholder}
        secureTextEntry={isHidden}
        onChangeText={onChangePassword}
      />

      {error && <ErrorText>{errorMessage}</ErrorText>}

      {rightIcon && rightIcon()}
    </Provider>
  );
};

const styles = StyleSheet.create({
  input: {
    width: '100%',
    height: 51,
    fontSize: 14,
    backgroundColor: '#f2f2f2',
  },
  placeholder: {
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 19,
    opacity: 0.3,
  },
});

const ErrorText = styled(Text)`
  padding-left: 25px;
  color: red;
  font-size: 12px;
  margin-top: 5px;
`;

export default CustomInput;
