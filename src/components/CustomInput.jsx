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

const CustomInput = ({ onChangePassword, passwordError }) => {
  const [showPassword, setShowPassword] = useState(false);

  const handlePasswordChange = (password) => {
    onChangePassword(password);
  };

  const inputTheme = {
    ...DefaultTheme,
    roundness: 29,
    colors: {
      ...DefaultTheme.colors,
      primary: passwordError ? 'red' : '#2F2F2F',
    },
  };

  return (
    <Provider theme={inputTheme}>
      <TextInput
        label="Пароль"
        mode="outlined"
        placeholder="Введите пароль"
        style={styles.input}
        theme={inputTheme}
        placeholderStyle={styles.placeholder}
        secureTextEntry={showPassword}
        onChangeText={handlePasswordChange}
      />

      {passwordError && <ErrorText>Неверный пароль</ErrorText>}

      <TouchableWithoutFeedback onPress={() => setShowPassword(!showPassword)}>
        <PasswordToggleWrapper>
          {showPassword ? (
            <Image
              source={require('../../assets/svg/HideEye.png')}
              style={{ width: 20, height: 20 }}
            />
          ) : (
            <Image
              source={require('../../assets/svg/ShowEye.png')}
              style={{ width: 20, height: 20 }}
            />
          )}
        </PasswordToggleWrapper>
      </TouchableWithoutFeedback>
    </Provider>
  );
};

const styles = StyleSheet.create({
  input: {
    width: '100%',
    height: 51,
    fontSize: 14,
  },
  placeholder: {
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 19,
    opacity: 0.3,
  },
});

const PasswordToggleWrapper = styled(View)`
  position: absolute;
  right: 20px;
  top: 23px;
`;

const ErrorText = styled(Text)`
  padding-left: 25px;
  color: red;
  font-size: 12px;
  margin-top: 5px;
`;

export default CustomInput;
