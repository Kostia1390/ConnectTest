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
const BackgroundFirsScreen = require(`../assets/svg/BackgroundFirsScreen.png`);

export const FirstScreen = () => {
  const navigation = useNavigation();
  const goToStartSelection = () => {
    navigation.navigate('StartSelection');
  };

  return (
    <ImageBackground source={BackgroundFirsScreen} style={styles.container}>
      <HeaderWrapper>
        <Image source={ConnectText} style={{ width: 142, height: 26 }} />
      </HeaderWrapper>
      <ContentWrapper>
        <TextWrapper>
          <MainText>Коннект будущего!</MainText>
          <SubText>
            Алгоритм поиска совместимости основан на работе искусственного интеллекта, обученного
            психологии и нумерологии.
          </SubText>
        </TextWrapper>

        <StyledRegisterButton>
          <TouchableOpacity onPress={goToStartSelection}>
            <StyledRegisterButtonText>Регистрация</StyledRegisterButtonText>
          </TouchableOpacity>
        </StyledRegisterButton>

        <StyledEntryButton>
          <StyledEntryButtonText>Вход</StyledEntryButtonText>
        </StyledEntryButton>

        <TextBottom>
          Продолжая, вы принимаете наши Условия. Узнайте как мы обрабатываем ваши данные Политика
        </TextBottom>
      </ContentWrapper>
    </ImageBackground>
  );
};

const StyledEntryButton = styled(TouchableOpacity)`
  height: 60px;
  width: 338px;
  background-color: #f2f2f2;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
`;

const StyledEntryButtonText = styled(Text)`
  font-weight: 700;
  font-size: 16px;
  line-height: 21px;
  color: #2c2c2c;
`;

const StyledRegisterButton = styled(TouchableOpacity)`
  height: 60px;
  width: 338px;
  border-radius: 55px;
  background-color: #2f2f2f;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
`;

const StyledRegisterButtonText = styled(Text)`
  font-weight: 700;
  font-size: 16px;
  line-height: 21px;
  color: #fff;
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
  margin-bottom: 34px;
`;

const HeaderWrapper = styled(View)`
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
