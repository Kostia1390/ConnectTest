import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  ImageBackground,
} from 'react-native';
import styled, { css } from '@emotion/native';
import { useNavigation } from '@react-navigation/native';
import HeaderMessage from '../src/components/HeaderMessage';

const ConnectText = require(`../assets/svg/ConnectText.png`);
const BackButton = require(`../assets/svg/Back.png`);
const BackgroundFirsScreen = require(`../assets/svg/BackgroundStartSelection.png`);
const MessageIcon = require(`../assets/svg/Button4.png`);

export const StartSelection = () => {
  const navigation = useNavigation();
  const goToHome = () => {
    navigation.navigate('Home');
  };
  return (
    <ImageBackground source={BackgroundFirsScreen} style={styles.container}>
      <HeaderWrapper>
        <TouchableOpacity onPress={goToHome}>
          <Image source={BackButton} style={{ width: 40, height: 40 }} />
        </TouchableOpacity>
        <Image source={ConnectText} style={{ width: 142, height: 26, marginLeft: 58 }} />
      </HeaderWrapper>
      <ContentWrapper>
        <TextWrapper>
          <MainText>Регистрация</MainText>
          <SubText>
            Найдите друзей с которыми легко, идеального партнера и эффективные деловые связи!
          </SubText>
        </TextWrapper>
        <StyledButton>
          <Image
            source={MessageIcon}
            style={{ width: 24, height: 24, marginLeft: 18, marginRight: 34 }}
          />
          <StyledButtonText>Продолжить по номеру</StyledButtonText>
        </StyledButton>
        <TextBottom>
          Продолжая, вы принимаете наши Условия. Узнайте как мы обрабатываем ваши данные Политика
        </TextBottom>
      </ContentWrapper>
    </ImageBackground>
  );
};

const StyledButton = styled(TouchableOpacity)`
  height: 60px;
  width: 338px;
  border-width: 2px;
  border-radius: 55px;
  background-color: #f2f2f2;
  align-items: center;

  margin-bottom: 10px;
  flex-direction: row;
`;

const StyledButtonText = styled(Text)`
  font-weight: 700;
  font-size: 16px;
  line-height: 21px;
  color: #2c2c2c;
  justify-content: center;
`;

const ContentWrapper = styled(View)`
  flex: 1;
  justify-content: flex-end;
  margin-bottom: 20px;
`;

const MainText = styled(Text)`
  font-size: 27px;
  font-weight: 800;
  line-height: 36px;
  margin-bottom: 7px;
`;

const SubText = styled(Text)`
  font-size: 15px;
  font-weight: 400;
  line-height: 20px;
`;

const TextBottom = styled(Text)`
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  text-align: center;
`;

const TextWrapper = styled(View)`
  margin-bottom: 24px;
`;

const HeaderWrapper = styled(View)`
  flex-direction: row;
  align-items: center;
`;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 26,
    resizeMode: 'cover',
  },
});
