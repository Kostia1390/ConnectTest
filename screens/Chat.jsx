import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import styled, { css } from '@emotion/native';
import HeaderMessage from '../src/components/HeaderMessage';

export const Chat = ({ navigation }) => {
  return (
    <MainContainer>
      <HeaderMessage />

      <MessageOponent>
        <TextUser>Привет</TextUser>
        <TextTime>9:30</TextTime>
      </MessageOponent>
    </MainContainer>
  );
};

const TextUser = styled(Text)`
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  padding: 0px 20px 0px 5px;
`;

const TextTime = styled(Text)`
  font-size: 10px;
  font-weight: 400;
  line-height: 15px;
`;

const MessageOponent = styled(View)`
  width: 102px;
  height: 42px;
  padding: 10px 0px 0px 10px;
  border-radius: 20px 20px 20px 0px;
  background-color: #e8e7ed;
  flex-direction: column;
`;

const MainContainer = styled(View)`
  height: 100%;
  flex: 1;
  background-color: '#fff';
`;
