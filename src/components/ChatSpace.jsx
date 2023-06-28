import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Modal } from 'react-native';
import styled, { css } from '@emotion/native';

const storiesData = [
  {
    id: 1,
    chatId: 1,
    usedId: 1,
    message: 'Привет',
    type: 'text',
    time: '9:30',
  },
  {
    id: 2,
    chatId: 1,
    usedId: 1,
    message: 'Как дела? Чем занимаешься?',
    type: 'text',
    time: '9:32',
  },
  {
    id: 3,
    chatId: 1,
    usedId: 1,
    message: 'Пример длинного текста, который переносится на следующую строку',
    type: 'text',
    time: '9:34',
  },
  {
    id: 4,
    chatId: 1,
    usedId: 2,
    message: 'Пример длинного текста, который переносится на следующую строку',
    type: 'text',
    time: '9:34',
  },

  {
    id: 5,
    chatId: 1,
    usedId: 1,
    message:
      'Пример длинного текста, который переносится на следующую строку переносится на следующую строку',
    type: 'text',
    time: '9:34',
  },
  {
    id: 6,
    chatId: 1,
    usedId: 1,
    message: '',
    type: 'missed_call',
    time: '9:34',
  },
  {
    id: 7,
    chatId: 1,
    usedId: 1,
    message: '',
    type: 'missed_call',
    time: '9:34',
  },
  {
    id: 8,
    chatId: 1,
    usedId: 2,
    message: '',
    type: 'missed_call',
    time: '9:34',
  },
  {
    id: 9,
    chatId: 1,
    usedId: 2,
    message: '',
    type: 'missed_call',
    time: '9:34',
  },
];

const ChatSpace = () => {
  return (
    <>
      <MessageWrapper>
        {storiesData.map((story) => (
          <Message key={story.id} usedId={story.usedId} isMissedCall={story.type === 'missed_call'}>
            {story.type === 'text' ? (
              <>
                <TextUser usedId={story.usedId}>{story.message}</TextUser>
                <TextTime usedId={story.usedId}>{story.time}</TextTime>
              </>
            ) : story.type === 'missed_call' ? (
              <>
                <Image
                  source={require('../../assets/svg/CameraOn.png')}
                  style={{ width: 39, height: 39 }}
                />
                <TextUserCall usedId={story.usedId}>Пропущений</TextUserCall>
                <TextTime usedId={story.usedId}>{story.time}</TextTime>
              </>
            ) : null}
          </Message>
        ))}
      </MessageWrapper>
    </>
  );
};

const MessageWrapper = styled(View)``;

const Message = styled(View)`
  align-self: flex-start;
  margin-top: 10px;
  margin-left: ${(props) => (props.usedId === 1 ? '10px' : 'auto')};
  margin-right: ${(props) => (props.usedId === 2 ? '10px' : 'auto')};
  padding: 11px;
  border-radius: 20px;
  background-color: ${(props) => (props.usedId === 1 ? '#e8e7ed' : '#2f2f2f')};
  ${(props) =>
    props.isMissedCall &&
    css`
      flex-direction: row;
    `}
`;

const TextUserCall = styled(Text)`
  font-size: 12px;
  font-weight: 400;
  line-height: 17px;
  padding: 10px 20px 0px 5px;
  color: ${(props) => (props.usedId === 1 ? '#000000' : '#ffffff')};
`;

const TextUser = styled(Text)`
  font-size: 16px;
  font-weight: 300;
  line-height: 22px;
  padding: 0px 20px 0px 5px;
  color: ${(props) => (props.usedId === 1 ? '#000000' : '#ffffff')};
`;

const TextTime = styled(Text)`
  font-size: 10px;
  font-weight: 400;
  line-height: 15px;
  position: absolute;
  bottom: 5px;
  right: 5px;
  color: ${(props) => (props.usedId === 1 ? '#000000' : '#ffffff')};
`;

export default ChatSpace;
