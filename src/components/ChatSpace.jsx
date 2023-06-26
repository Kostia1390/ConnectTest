import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Modal } from 'react-native';
import styled, { css } from '@emotion/native';

const storiesData = [
  {
    id: 1,
    message: 'Привет',
    time: '9:30',
  },
  {
    id: 2,
    message: 'Как дела? Чем занимаешься?',
    time: '9:32',
  },
  {
    id: 3,
    message: 'Пример длинного текста, который переносится на следующую строку',
    time: '9:34',
  },
  {
    id: 4,
    message: 'Пример длинного текста, который переносится на следующую строку',
    time: '9:34',
  },

  {
    id: 5,
    message:
      'Пример длинного текста, который переносится на следующую строку переносится на следующую строку',
    time: '9:34',
  },
];

const ChatSpace = () => {
  return (
    <>
      <MessageWrapper>
        {storiesData.map((story) => (
          <Message key={story.id} isId4={story.id === 4}>
            <TextUser user={story.id === 4}>{story.message}</TextUser>
            <TextTime user={story.id === 4}>{story.time}</TextTime>
          </Message>
        ))}
      </MessageWrapper>

      {Array.from({ length: 4 }).map((_, index) => (
        <CallWrapper
          key={index}
          backgroundColor={index < 2 ? '#e8e7ed' : '#2f2f2f'}
          marginLeft={index < 2 ? '10px' : '225px'}>
          <Image
            source={require('../../assets/svg/CameraOn.png')}
            style={{ width: 39, height: 39 }}
          />
          <TextUserCall textColor={index >= 2 ? '#f3f2f2' : undefined}>Пропущений</TextUserCall>
          <TextTime user={index >= 2 ? '#f3f2f2' : undefined}>9:34</TextTime>
        </CallWrapper>
      ))}
    </>
  );
};

const MessageWrapper = styled(View)``;

const CallWrapper = styled(View)`
  align-self: flex-start;
  margin-top: 10px;
  margin-left: ${(props) => props.marginLeft};
  padding: 10px;
  border-radius: 20px;
  background-color: ${(props) => props.backgroundColor};
  flex-direction: row;
`;

const Message = styled(View)`
  align-self: flex-start;
  margin-top: 10px;
  margin-left: ${(props) => (props.isId4 ? '75px' : '10px')};
  padding: 11px;
  border-radius: 20px;
  background-color: ${(props) => (props.isId4 ? '#2f2f2f' : '#e8e7ed')};
`;

const TextUserCall = styled(Text)`
  font-size: 12px;
  font-weight: 400;
  line-height: 17px;
  padding: 10px 20px 0px 5px;
  ${(props) =>
    props.textColor &&
    css`
      color: ${props.textColor};
    `}
`;

const TextUser = styled(Text)`
  font-size: 16px;
  font-weight: 300;
  line-height: 22px;
  padding: 0px 20px 0px 5px;
  ${(props) =>
    props.user &&
    css`
      color: #f3f2f2;
    `}
`;

const TextTime = styled(Text)`
  font-size: 10px;
  font-weight: 400;
  line-height: 15px;
  position: absolute;
  bottom: 5px;
  right: 5px;
  ${(props) =>
    props.user &&
    css`
      color: #f3f2f2;
    `}
`;

export default ChatSpace;
