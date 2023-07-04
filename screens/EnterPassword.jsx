import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import styled, { css } from '@emotion/native';
import HeaderBack from '../src/components/HeaderBack';
import CustomInput from '../src/components/CustomInput';
import CustomButton from '../src/components/CustomButton';

import { useNavigation } from '@react-navigation/native';

export const EnterPassword = () => {
  const [password, setPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const isPasswordError = submitted && password.length < 8;

  const handleChangePassword = (newPassword) => {
    setPassword(newPassword);
    setSubmitted(false);
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  return (
    <MainContainer>
      <HeaderBack />
      <TextContainer>
        <MainText>Введите пароль</MainText>
        <SubText>Пароль к аккаунту +380978906765</SubText>
      </TextContainer>
      <CustomInput onChangePassword={handleChangePassword} passwordError={isPasswordError} />
      <TouchableOpacity>
        <ForgotPassword>Забыли пароль?</ForgotPassword>
      </TouchableOpacity>
      <CustomButton disabled={password === ''} onSubmit={handleSubmit} />
    </MainContainer>
  );
};

const TextContainer = styled(View)`
  padding: 40px 0px 20px 0px;
`;

const ForgotPassword = styled(Text)`
  text-align: center;
  font-size: 15px;
  font-weight: 400;
  line-height: 21px;
  padding-bottom: 15px;
  text-decoration: underline;
`;

const MainText = styled(Text)`
  font-size: 27px;
  font-weight: 800;
  line-height: 36px;
  padding-bottom: 10px;
`;

const SubText = styled(Text)`
  font-size: 15px;
  font-weight: 400;
  line-height: 20px;
  opacity: 0.8;
`;

const MainContainer = styled(View)`
  padding: 50px 25px 10px 25px;
  flex: 1;
  background-color: '#fff';
`;
