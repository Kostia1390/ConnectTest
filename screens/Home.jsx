import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import styled, { css } from '@emotion/native';
import Header from '../src/components/Header';
import StoryMenu from '../src/components/StoryMenu';
import ChatList from '../src/components/ChatList';
import BottomButton from '../src/components/BottomButton';

export const Home = () => {
  return (
    <MainContainer>
      <Header />

      <StoryMenu />

      <ChatList />

      <BottomButton />
    </MainContainer>
  );
};

const MainContainer = styled(View)`
  height: 100%;
  flex: 1;
  background-color: '#fff';
`;
