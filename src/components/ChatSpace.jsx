import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import styled, { css } from '@emotion/native';
import Message from './Message';

const MESSAGES = [
  {
    id: 1,
    chatId: 1,
    userId: 1,
    message: 'Привет',
    type: 'text',
    time: '9:30',
  },
  {
    id: 2,
    chatId: 1,
    userId: 1,
    message: 'Как дела? Чем занимаешься?',
    type: 'text',
    time: '9:32',
  },
  {
    id: 3,
    chatId: 1,
    userId: 1,
    message: 'Пример длинного текста, который переносится на следующую строку',
    type: 'text',
    time: '9:34',
  },
  {
    id: 4,
    chatId: 1,
    userId: 2,
    message: 'Пример длинного текста, который переносится на следующую строку',
    type: 'text',
    time: '9:34',
  },

  {
    id: 5,
    chatId: 1,
    userId: 1,
    message:
      'Пример длинного текста, который переносится на следующую строку переносится на следующую строку',
    type: 'text',
    time: '9:34',
  },
  {
    id: 6,
    chatId: 1,
    userId: 1,
    message: '',
    type: 'missed_call',
    time: '9:34',
  },
  {
    id: 7,
    chatId: 1,
    userId: 1,
    message: '',
    type: 'missed_call',
    time: '9:34',
  },
  {
    id: 8,
    chatId: 1,
    userId: 2,
    message: '',
    type: 'missed_call',
    time: '9:34',
  },
  {
    id: 9,
    chatId: 1,
    userId: 2,
    message: '',
    type: 'missed_call',
    time: '9:34',
  },
  {
    id: 10,
    chatId: 1,
    userId: 2,
    message: '',
    type: 'missed_call',
    time: '9:34',
  },
];

const ChatSpace = () => {
  return (
    <>
      <ScrollView>
        <ChatSpaceWrapper>
          {MESSAGES.map((story) => (
            <Message key={story.id} {...story} />
          ))}
        </ChatSpaceWrapper>
      </ScrollView>
    </>
  );
};

const ChatSpaceWrapper = styled(View)``;

export default ChatSpace;
