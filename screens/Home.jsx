import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import styled, { css } from '@emotion/native';
import Header from '../src/components/Header';
import StoryMenu from '../src/components/StoryMenu';
import Message from '../src/components/Message';

export const Home = ({ navigation }) => {
  return (
    <MainContainer>
      <Header />

      <StoryMenu />
      <TouchableOpacity onPress={() => navigation.navigate('Chat')}>
        <Message />
      </TouchableOpacity>
    </MainContainer>
  );
};

const MainContainer = styled(View)`
  height: 100%;
  flex: 1;
  background-color: '#fff';
`;
