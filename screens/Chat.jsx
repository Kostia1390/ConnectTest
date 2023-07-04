import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import styled, { css } from '@emotion/native';
import HeaderMessage from '../src/componentsConnect/HeaderMessage';
import InputMessage from '../src/componentsConnect/InputMessage';
import ChatSpace from '../src/componentsConnect/ChatSpace';

export const Chat = ({ navigation }) => {
  return (
    <MainContainer>
      <HeaderMessage />
      <ChatSpace />
      <InputMessage />
    </MainContainer>
  );
};

const MainContainer = styled(View)`
  height: 100%;
  flex: 1;
  background-color: '#fff';
`;
