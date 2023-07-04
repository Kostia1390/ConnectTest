import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import styled, { css } from '@emotion/native';
import Header from '../src/componentsConnect/Header';
import StoryMenu from '../src/componentsConnect/StoryMenu';
import ChatList from '../src/componentsConnect/ChatList';
import BottomButton from '../src/componentsConnect/BottomButton';
import { NavigationBar } from '../src/components/NavigationBar';

export const Home = () => {
  return (
    <MainContainer>
      <Header />

      <StoryMenu />

      <ChatList />

      {/* <BottomButton /> */}
      <NavigationBar />
    </MainContainer>
  );
};

const MainContainer = styled(View)`
  height: 100%;
  flex: 1;
  background-color: '#fff';
`;
